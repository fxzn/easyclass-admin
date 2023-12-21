import SideBar from "./component/SideBar";
import "./component/Style.css";
import TabelDashboard from "./tabelTransaksi/TabelDashboard";

function DashboardAdmin() {
  return (
    <>
      <SideBar />
      <TabelDashboard />
    </>
  );
}

export default DashboardAdmin;
