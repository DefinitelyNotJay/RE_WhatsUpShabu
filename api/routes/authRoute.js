import express from "express"
import {login, register} from "../controllers/auth.js"
import { useNavigate } from "react-router-dom"
const router = express.Router()

router.post("/register", register)
router.post("/login", login, async (req, res) => {
    const role = req.role
    console.log(role)
    if(role === "receptionist") {
        return res.redirect(200, "/ManageTable")
    }
})

export default router;