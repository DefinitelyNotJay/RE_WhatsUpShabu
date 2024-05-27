import "../index.css";
import { Navigate } from "react-router-dom";
import { useState } from "react";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [redirect, setRedirect] = useState(false);

  function submitHandler(ev) {
    ev.preventDefault();
    const response = fetch("http://localhost:3000/auth/register", {
      method: "POST",
      body: JSON.stringify({ username, password, name, role }),
      headers: { "Content-type": "application/json" },
    });
    console.log(response.ok);
    if (response.ok) {
      setRedirect(true)
    }
  }

  if(redirect){
    return <Navigate to={"/login"}/>
  }
  return (
    <div className="w-full h-svh grid grid-cols-2">
      {/* login section */}
      <section className="flex items-center justify-center">
        <form
          method="POST"
          className="flex flex-col gap-2"
          onSubmit={submitHandler}
        >
          <img src="" alt="" />
          <label>ชื่อผู้ใช้</label>
          <input
            type="text"
            className="border-black border rounded-md p-1"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>รหัสผ่าน</label>
          <input
            type="password"
            className="border-black border rounded-md p-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>ชื่อ</label>
          <input
            type="text"
            className="border-black border rounded-md p-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>ตำแหน่ง</label>
          <select name="" id="" className="border border-black rounded-md px-2 py-1" onChange={e=>setRole(e.target.value)}>
            <option value="receptionist">พนักงานต้อนรับ</option>
            <option value="waiter">พนักงานเสิร์ฟ</option>
            <option value="manager">ผู้จัดการ</option>
          </select>
          <button className="px-4 py-1 bg-orange-500 text-white rounded-md hover:bg-orange-600">
            สมัครสมาชิก
          </button>
        </form>
      </section>
      {/* image section */}
      <section className="w-full bg-orange-300"></section>
    </div>
  );
};

export default RegisterPage;
