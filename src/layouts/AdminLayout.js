import { Outlet } from "react-router-dom";
import AdminSideBar from './components/Sidebar/AdminSideBar';
import styles from "./Layout.module.css";

function AdminLayout() {
  return (
    <>
      <AdminSideBar />
      <div className={styles.contentWrapperAdmin}>
        <Outlet />
      </div>
    </>
  );
}

export default AdminLayout;
