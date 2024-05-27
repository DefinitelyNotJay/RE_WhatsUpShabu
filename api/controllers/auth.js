import Personnel from "../models/Personnel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { useNavigate } from "react-router-dom";
const secret = ";alksdjkhdvaefu28943dskjfnklxznvzxgivaodfnlLDFHDSFGUIDVJNLC";

export const login = async (req, res, next) => {
  const { username, password } = req.body;
  const loginDoc = await Personnel.findOne({ username });
  const isCorrect = bcrypt.compareSync(password, loginDoc.password);
  if (isCorrect) {
    const token = jwt.sign({ username, id: loginDoc._id }, secret);
    res
      .cookie("token", token)
      .json({
        id: loginDoc._id,
        role: loginDoc.role,
        name: loginDoc.name,
      })
      .status(200);
      req.role = loginDoc.role;
    next();
  } else {
    res.status(400).json("Wrong Credentials");
    alert("Please try again");
  }
};

export const register = async (req, res) => {
  const { username, password, name, role } = req.body;
  const newPersonnelDoc = await Personnel.create({
    username,
    password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)),
    name,
    role,
  });
};

export const verifyLogin = async (req, res, next) => {
  const token = req.cookies.token;
  jwt.verify(token, secret, (err, user) => {
    if(err) return;
    req.user = user;
    next();
  });
};
