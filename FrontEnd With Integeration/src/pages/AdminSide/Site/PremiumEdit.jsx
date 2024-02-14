import { Link } from "react-router-dom";
import { FaLocationDot ,FaBriefcase } from "react-icons/fa6";
import { IoIosCloudDownload } from "react-icons/io";
import { FaEye,FaTrash,FaCalendar,FaClock } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RxStarFilled,RxStar } from "react-icons/rx";
import { BsClockHistory } from "react-icons/bs";
import Pricing from "../../../components/Pricing";
import { useEffect, useState } from "react";
function PremiumEdit() {
    const [title, setTitle] = useState('Standard');

    useEffect(() => {
        const storedTitle = localStorage.getItem("title");
        if (storedTitle) {
            setTitle(storedTitle);
        }
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();  
        const formData = new FormData(event.target);
        const newTitle = formData.get('Job Title');
        setTitle(newTitle); 
        localStorage.setItem("title", newTitle);
    };
    return ( <>
     <a class="mobNavigation" data-bs-toggle="collapse" href="#MobNav" role="button" aria-expanded="false" aria-controls="MobNav">
                   <i class="fas fa-bars me-2"></i>Dashboard Navigation
               </a>
                    <div class="collapse" id="MobNav">
                       <div class="dashboard-nav">
                       <div class="dashboard-inner">
                       
                       <ul data-submenu-title="Main Navigation">
								<li><Link to="/Dash">Dashboard</Link></li>
								<li><Link to="/BookMarkedResume">BookMarked Resumes</Link></li>
								<li><Link to="/JobApplicants">Job Applicants</Link></li>
							</ul>
							<ul data-submenu-title="Jobs Section">
								<li ><Link to="/Admin_job_add">Add Jobs</Link></li>
								<li><Link to="/View_Added_Jobs">View Jobs</Link></li>
								<li><a href="dashboard-add-resume.html">Edit Jobs</a></li>
								<li><Link to="/View_Premium_Jobs">View Premium Jobs</Link></li>
								<li><Link to="/View_Free_Jobs">View Free Jobs</Link></li>
								
							</ul>
                        <ul data-submenu-title="My Accounts">
                        
                            <li><a href="dashboard-change-password.html">Change Password</a></li>
                            <li><a href="javascript:void(0);">Delete Account</a></li>
                            <li><a href="login.html">Log Out</a></li>
                        </ul>
                        <ul data-submenu-title="Site Settings">
                        
                            <li className="active"><a href="dashboard-change-password.html">Premium Feature</a></li>
                           
                        </ul>
                       </div>						
                       </div>
                   </div>  
       <div class="dashboard-content">
                       <div class="dashboard-tlbar d-block mb-5">
                           <div class="row">
                               <div class="colxl-12 col-lg-12 col-md-12">
                                   <h1 class="ft-medium">Edit Premium Pricing</h1>
                                   <nav aria-label="breadcrumb">
                                       <ol class="breadcrumb">
                                           <li class="breadcrumb-item text-muted"><a href="#">Home</a></li>
                                           <li class="breadcrumb-item text-muted"><a href="#">Dashboard</a></li>
                                           <li class="breadcrumb-item"><a href="#" class="theme-cl">Edit Premium Feature</a></li>
                                       </ol>
                                   </nav>
                               </div>
                           </div>
                       </div>
                       <Pricing title={title}/>
                       <div className="dashboard-widg-bar d-block">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="_dashboard_content bg-white rounded mb-4">
                                <div className="_dashboard_content_header br-bottom py-3 px-3">
                                    <div className="dashboard_header_flex">
                                        <h4 className="mb-0 ft-medium fs-md"><i className="fa fa-file mr-1 theme-cl fs-sm"></i>Post Job</h4>	
                                    </div>
                                </div>
                                
                                <div className="_dashboard_content_body py-3 px-3">
                                    <form className="row" onSubmit={handleSubmit}>
                                        <div className="col-xl-12 col-lg-12 col-md-12">
                                            <div className="row">
                                            
                                                <div className="col-xl-12 col-lg-12 col-md-12">
                                                    <div className="form-group">
                                                        <label className="text-dark ft-medium">Job Title</label>
                                                        <input 
                                                            type="text"
                                                            name='Job Title'
                                                            className="form-control rounded"
                                                            placeholder="Title"
                                                        />
                                                    </div>
                                                </div>
                                                
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <button type="submit" className="btn btn-md ft-medium text-light rounded theme-bg" >Save Changes</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                   </div>
                   
    </> );
}

export default PremiumEdit;