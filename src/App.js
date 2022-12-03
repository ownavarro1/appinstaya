import './App.css';
import { Link} from "react-router-dom";
import { Listarordenes } from './Componentes/Listarordenes';



function App() {
  return (
     <div id="wrapper">
  {/* <!-- Page Wrapper --> */}
        {/* <!-- Sidebar --> */}
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <hr className="sidebar-divider my-0" />
            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
                <a className="nav-link" href="index.html">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></a>
            </li>
            {/* <!-- Divider --> */}
            <hr className="sidebar-divider"/>

               {/* <!-- Heading --> */}
       
            {/* <!-- Nav Item - Charts --> */}
            <li className="nav-item">
                <a className="nav-link" href="charts.html">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Registrar Ordenes</span></a>
            </li>

            {/* <!-- Nav Item - Tables --> */}
            <li className="nav-item">
                <Link to="/listar" className="nav-link">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Listar Ordenes</span></Link>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider d-none d-md-block"/>

            {/* <!-- Sidebar Toggler (Sidebar) --> */}
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>
        </ul>
        {/* <!-- End of Sidebar --> */}

        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">

            {/* <!-- Main Content --> */}
            <div id="content">

                {/* <!-- Topbar --> */}
                <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                    {/* <!-- Sidebar Toggle (Topbar) --> */}
                    <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                        <i className="fa fa-bars"></i>
                    </button>

                    {/* <!-- Topbar Navbar --> */}
                    <ul className="navbar-nav ml-auto">
                   
                        <div className="topbar-divider d-none d-sm-block"></div>

                        {/* <!-- Nav Item - User Information --> */}
                        <li className="nav-item dropdown no-arrow">
                            <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                                <img className="img-profile rounded-circle"
                                    src="img/undraw_profile.svg"/>
                            </a>
                            {/* <!-- Dropdown - User Information --> */}
                            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="userDropdown">
                                <a className="dropdown-item" href="#">
                                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Profile
                                </a>
                                <a className="dropdown-item" href="#">
                                    <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Settings
                                </a>
                                <a className="dropdown-item" href="#">
                                    <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Activity Log
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Logout
                                </a>
                            </div>
                        </li>

                    </ul>

                </nav>
                {/* <!-- End of Topbar --> */}

                {/* <!-- Begin Page Content --> */}
                <div className="container-fluid">
                 <Listarordenes />
                    {/* <!-- Page Heading --> */}
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        
                    </div>
                              
                </div>
                     </div>
          
            <footer className="sticky-footer bg-white">
                <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                        <span>Copyright &copy; Your Website 2021</span>
                    </div>
                </div>
            </footer>
            {/* <!-- End of Footer --> */}
  {/* <!-- End of Content Wrapper --> */}
        {/* <!-- End of Page Wrapper --> */}
        </div>
        </div>
       
  );
}

export default App;
