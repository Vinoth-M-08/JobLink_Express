import { Link } from "react-router-dom";

function JobAdd() {
    return ( <>

<a class="mobNavigation" data-bs-toggle="collapse" href="#MobNav" role="button" aria-expanded="false" aria-controls="MobNav">
                   <i class="fas fa-bars me-2"></i>Dashboard Navigation
               </a>
                    <div class="collapse" id="MobNav">
                       <div class="dashboard-nav">
                       <div class="dashboard-inner">
                       
                       <ul data-submenu-title="Main Navigation">
                            <li ><a href="candidate-dashboard.html">Dashboard</a></li>
                            <li><Link to="/BookMarkedResume">BookMarked Resumes</Link></li>
                            <li ><Link to="/JobApplicants">Job Applicants</Link></li>
                        </ul>
                        <ul data-submenu-title="Jobs Section">
                            <li class="active"><a href="candidate-dashboard.html">Add Jobs</a></li>
                            <li><a href="dashboard-manage-resume.html">View Jobs</a></li>
                            <li><a href="dashboard-add-resume.html">Edit Jobs</a></li>
                            <li><a href="dashboard-manage-resume.html">View Premium Jobs</a></li>
                            <li><a href="dashboard-manage-resume.html">View Free Jobs</a></li>
                            
                        </ul>
                        <ul data-submenu-title="My Accounts">
                            <li><a href="dashboard-my-profile.html">My Profile </a></li>
                            <li><a href="dashboard-change-password.html">Change Password</a></li>
                            <li><a href="javascript:void(0);">Delete Account</a></li>
                            <li><a href="login.html">Log Out</a></li>
                        </ul>
                       </div>						
                       </div>
                   </div>
                   
                   <div className="dashboard-content" >
                <div className="dashboard-tlbar d-block mb-5">
                    <div className="row">
                        <div className="colxl-12 col-lg-12 col-md-12">
                            <h1 className="ft-medium">Post A New Job</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item text-muted"><a href="">Home</a></li>
                                    <li className="breadcrumb-item text-muted"><a href="Dash">Dashboard</a></li>
                                    <li className="breadcrumb-item"><a href="#" className="theme-cl">Post Job</a></li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                
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
                                    <form className="row">
                                        <div className="col-xl-12 col-lg-12 col-md-12">
                                            <div className="row">
                                            
                                                <div className="col-xl-12 col-lg-12 col-md-12">
                                                    <div className="form-group">
                                                        <label className="text-dark ft-medium">Job Title</label>
                                                        <input type="text" name='Job Title'className="form-control rounded" placeholder="Title"/>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-xl-12 col-lg-12 col-md-12">
                                                    <div className="form-group">
                                                        <label className="text-dark ft-medium">Job Description</label>
                                                        <textarea name='Job Description' className="form-control rounded" placeholder="Job Description"></textarea>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label className="text-dark ft-medium">Email Address</label>
                                                        <input name='Email Address' type="text" className="form-control rounded" placeholder="Email"/>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label className="text-dark ft-medium">Username</label>
                                                        <input name='Username' type="text" className="form-control rounded" placeholder="User"/>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label className="text-dark ft-medium">Specialisms</label>
                                                        <select name='Specialisms' className="form-control rounded">
                                                            <option>Accounting</option>
                                                            <option>Banking</option>
                                                            <option>Software</option>
                                                            <option>Hardware</option>
                                                            <option>Hospital</option>
                                                            <option>Fashion Design</option>
                                                            <option>BPO Services</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label className="text-dark ft-medium">Industry</label>
                                                        <select name='Industry' className="form-control rounded">
                                                            <option>IT & Software</option>
                                                            <option>Bank Services</option>
                                                            <option>Power Corporation</option>
                                                            <option>Water Supply</option>
                                                            <option>Chemical Plant</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label className="text-dark ft-medium">Job Type</label>
                                                        <select name='Job Type' className="form-control rounded">
                                                            <option>Full Time</option>
                                                            <option>Part Time</option>
                                                            <option>Internship</option>
                                                            <option>Contract</option>
                                                            <option>Freelancing</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label className="text-dark ft-medium">Career Level</label>
                                                        <select name='CareerLevel' className="form-control rounded">
                                                            <option>Begginer</option>
                                                            <option>Junior</option>
                                                            <option>Manager</option>
                                                            <option>Team leader</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label className="text-dark ft-medium">Specialisms</label>
                                                        <select name='Specialisms' className="form-control rounded">
                                                            <option>Web Designing</option>
                                                            <option>JAVA Advance</option>
                                                            <option>PHP Developer</option>
                                                            <option>IOS Developer</option>
                                                            <option>App Developer</option>
                                                            <option>Fashion Designing</option>
                                                            <option>Bank Services</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label className="text-dark ft-medium">Experience</label>
                                                        <select name='Experience' className="form-control rounded">
                                                            <option>Begginer</option>
                                                            <option>0 To 6 Month</option>
                                                            <option>1 Years</option>
                                                            <option>2 Years</option>
                                                            <option>3 Years</option>
                                                            <option>4 Years</option>
                                                            <option>5+ Years</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label className="text-dark ft-medium">Qualification</label>
                                                        <select name='Qualification' className="form-control rounded">
                                                            <option>Graduation</option>
                                                            <option>Master Degree</option>
                                                            <option>BPharma</option>
                                                            <option>P.H.D.</option>
                                                            <option>Other</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label className="text-dark ft-medium">Gender</label>
                                                        <select name='Gender' className="form-control rounded">
                                                            <option>Male</option>
                                                            <option>Female</option>
                                                            <option>Other</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-xl-12 col-lg-12 col-md-12">
                                                    <div className="form-group">
                                                        <label className="text-dark ft-medium">Application Deadline</label>
                                                        <input name='Application Deadline' type="date" className="form-control rounded" placeholder="dd-mm-yyyy"/>
                                                    </div>
                                                </div>


                                                <div className="col-xl-4 col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label className="text-dark ft-medium">Excepted Salary</label>
                                                        <input  name='Expected Salary' type="text" className="form-control" placeholder="0"/>
                                                    </div>
                                                </div>

                                                
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label className="text-dark ft-medium">Country</label>
                                                        <input  name='Country' type="text" className="form-control" placeholder="Country"/>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label className="text-dark ft-medium">City</label>
                                                        <input name='City' type="text" className="form-control" placeholder="City"/>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-xl-12 col-lg-12 col-md-12">
                                                    <div className="form-group">
                                                        <label className="text-dark ft-medium">Full Address</label>
                                                        <input name='Full Address' type="text" className="form-control" placeholder="#10 Marke Juger, SBI Road"/>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-xl-4 col-lg-12 col-md-12">
                                                    <div className="form-group">
                                                        <label className="text-dark ft-medium">Zip Code</label>
                                                        <input  name='Zip Code' type="text" className="form-control" placeholder="Zip"/>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-xl-4 col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label className="text-dark ft-medium">Latitude</label>
                                                        <input  name='Latitude' type="text" className="form-control" placeholder="Liverpool"/>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-xl-4 col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label className="text-dark ft-medium">Longitude</label>
                                                        <input  name='Longitude' type="text" className="form-control" placeholder="Liverpool"/>
                                                    </div>
                                                </div>
                                                
                                                
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <button type="submit" className="btn btn-md ft-medium text-light rounded theme-bg" >Publish Job</button>
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

export default JobAdd;