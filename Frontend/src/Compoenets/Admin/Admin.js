import Adminnavbar from "./Adminnavbar";
import Sidebar from "./Sidebar";

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