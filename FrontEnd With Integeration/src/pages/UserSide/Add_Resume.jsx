import React, { useEffect, useState } from 'react';
// import { motion } from "framer-motion"
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add_Resume() {
    // const navigate = useNavigate();
    const [fname, setFName] = useState('');
    const [mname, setMName] = useState('');
    const [lname, setLName] = useState('');
    const [job_title, setJob_title] = useState('');
    const [ph_no, setPh_no] = useState('');
    const [salary, setSalary] = useState('');
    const [age, setAge] = useState('');
    const [experience, setExperience] = useState('');
    const [language, setLanguage] = useState('');
    const [about, setAbout] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [fulladdress, setFulladdress] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [highskl, setHighskl] = useState('');
    const [intermedium, setIntermedium] = useState('');
    const [graduation, setGraduation] = useState('');
    const [university, setUniversity] = useState('');
    const [degree, setDegree] = useState('');
    const [tpoc, setTpoc] = useState('');
    const [graduatedyear, setGraduatedyear] = useState('');
    const [pcoa, setPcoa] = useState('');
    const [co, setCO] = useState('');
    const [summarysac, setSummarysac] = useState('');
    const [eil3y, setEil3y] = useState('');
    const [eil2y, setEil2y] = useState('');
    const [eil1y, setEil1y] = useState('');
    const [syh, setSyh] = useState('');

    const data = {
        fname, mname, lname, job_title, ph_no, salary, age, experience, language, about, country, state, fulladdress, latitude, longitude, highskl, intermedium, graduation, university, degree, tpoc, graduatedyear, pcoa, co, summarysac, eil1y, eil2y, eil3y, syh
    };

    const handleClick = () => {
        navigate("/logout");
    }

    // const onAxios = (e) => {
    //     e.preventDefault();
    //     axios.post("http://localhost:8080/postResume", data)
    //         .then((response) => {
    //             toast.success("Job Has been Submitted Successfully!", {
    //                 position: toast.POSITION.TOP_CENTER
    //             })
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //             toast.error("Something Went Wrong", {
    //                 position: toast.POSITION.TOP_CENTER
    //             })
    //         });
    // }

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [mobileMenuActive, setMobileMenuActive] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuActive(!mobileMenuActive);
    };

    return (
        <>
            {/* <motion.div className="ani"
                initial={{ opacity: 0 }}
                animate={{ opacity: 2 }}
                exit={{ opacity: 0 }}
            > */}
                <div className="clearfix"></div>

                <div className="dashboard-wrap bg-light">
                    {windowWidth > 773 ? (
                        <div className="collapse" id="MobNav">
                            <div className="dashboard-nav">
                                <div className="dashboard-inner">
                                    <ul data-submenu-title="Main Navigation">
                                        <li className="active"><a href="/Dash"><i className="lni lni-dashboard mr-2"></i>Dashboard</a></li>
                                        <li><a href="/JobPost"><i className="lni lni-dashboard mr-2"></i>Post New Job</a></li>
                                        <li className="inactive"><a href="/AppliedJobs"><i className="lni lni-dashboard mr-2"></i>AppliedJobs</a></li>
                                        <li className="inactive"><a href="/JobAccept"><i className="lni lni-dashboard mr-2"></i>Manage Jobs</a></li>
                                        <li><a href="/CompResume"><i className="lni lni-dashboard mr-2"></i>Complete Your Resume</a></li>
                                    </ul>
                                    {/* <ul data-submenu-title="My Accounts">
                                        <li><a href="/Profile"><i className="lni lni-user me-2"></i>My Profile </a></li>
                                        <li><a href="/ChangePass"><i className="lni lni-user me-2"></i>Change Password </a></li>
                                        <li><a href=""><i className="lni lni-trash-can me-2"></i>Delete Account</a></li>
                                        <li><a href="/" onClick={handleClick}><i className="lni lni-power-switch me-2"></i>Log Out</a></li>
                                    </ul> */}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="mobile-nav" onClick={toggleMobileMenu}>
                                <i className="fas fa-bars" style={{ color: "black", paddingLeft: 10 }}></i>
                            </div>
                            <div className={`site-nav-menu ${mobileMenuActive ? 'mobile-menu' : ''} flex-center-full-hw`}>
                                <ul className="primary-menu" style={{ paddingLeft: 20 }}>
                                    <li className="active"><a href="/Dash"><i className="lni lni-dashboard mr-2"></i>Dashboard</a></li>
                                    <li><a href="/JobPost"><i className="lni lni-dashboard mr-2"></i>Post New Job</a></li>
                                    <li className="inactive"><a href="/AppliedJobs"><i className="lni lni-dashboard mr-2"></i>AppliedJobs</a></li>
                                    <li className="inactive"><a href="/JobAccept"><i className="lni lni-dashboard mr-2"></i>Manage Jobs</a></li>
                                    <li><a href="/CompResume"><i className="lni lni-dashboard mr-2"></i>Complete Your Resume</a></li>
                                    <br />
                                    <ul data-submenu-title="My Accounts">
                                        <li><a href="/Profile"><i className="lni lni-user me-2"></i>My Profile </a></li>
                                        <li><a href="/ChangePass"><i className="lni lni-user me-2"></i>Change Password </a></li>
                                        <li><a href=""><i className="lni lni-trash-can me-2"></i>Delete Account</a></li>
                                        <li><a href="/" onClick={handleClick}><i className="lni lni-power-switch me-2"></i>Log Out</a></li>
                                    </ul>
                                </ul>
                            </div>
                        </>
                    )}
                </div>
            {/* </motion.div> */}
        </>
    );
}

export default Add_Resume;
