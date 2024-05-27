import "../../index.css";
import LeftBar from "../../components/LeftBar";
import TopBar from "../../components/TopBar";
import Table from "../../components/Table";

const ManageTable = () => {
  return (
    <section className="w-full h-screen flex font-Kanit">
      <div className="w-2/12 h-full">
        <LeftBar />
      </div>
      <div className="w-10/12">
         <TopBar title="การจัดการโต๊ะ" />
        <section className="bg-gray-200 h-[92%] flex items-center justify-center p-3">
          <div className="bg-white p-2 w-full h-full rounded-md grid gap-x-2 grid-cols-4 overflow-scroll">
            <Table/>
            <Table/>
            <Table/>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ManageTable;
