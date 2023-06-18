import Adminnavbar from "./Adminnavbar";
import Sidebar from "./Sidebar";
import Addproduct from "./Addproduct";
import { Routes, Route } from 'react-router-dom';

function Admin(){
    return(
        <div>

            <Adminnavbar />

            <div class="row row-offcanvas row-offcanvas-left">
            <Sidebar />

            <div className="col main">
            
           </div>

            </div>
            

        </div>
    );
}
export default Admin;