import { useState } from "react";
import "../index.css"
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false)

  async function submitHandler(ev) {
    ev.preventDefault();
    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      body: JSON.stringify({username, password}),
      credentials: "include",
      headers: {"Content-type" : "application/json"}
    })
  }

  return (
    <div className="w-full h-svh grid grid-cols-2">
      {/* image section */}
      <section className="w-full bg-orange-300"></section>
      {/* login section */}
      <section className="flex items-center justify-center">
        <form method="POST" className="flex flex-col gap-2" onSubmit={submitHandler}>
          <img src="" alt="" />
          <label>ชื่อผู้ใช้</label>
          <input type="text" className="border-black border rounded-md p-1" value={username} onChange={(e)=>setUsername(e.target.value)} />
          <label>รหัสผ่าน</label>
          <input type="password" className="border-black border rounded-md p-1" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <div className="self-end">
            <input type="checkbox" className="mr-2" value={showPassword} onChange={(e)=>setShowPassword(e.target.checked)}/>
            <span>แสดงรหัสผ่าน</span>
          </div>
          <button className="px-4 py-1 bg-orange-500 text-white rounded-md hover:bg-orange-600">เข้าสู่ระบบ</button>
          <Link to={"/register"} className="hover:underline self-center mt-4">สมัครสมาชิก</Link>
        </form>
      </section>
    </div>
  );
};

export default LoginPage;
