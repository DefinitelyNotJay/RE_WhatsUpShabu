import "../index.css"
import LeftLink from "./LeftLink"
import {Settings2} from "lucide-react"


const LeftBar = () => {
    // const navData = () => {
        
    // }
  return (
    <div className='w-full h-full bg-orange-100 flex flex-col items-center px-2 py-4 gap-4'>
        <img src="/icon.png" alt="" className="object-contain w-full"/>
        <LeftLink name={"การจัดการโต๊ะ"} link={"/ManageTable"} icon={Settings2}/>
    </div>
  )
}

export default LeftBar