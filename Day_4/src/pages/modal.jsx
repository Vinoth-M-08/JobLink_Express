import "../assets/css/modal.css";
// // import { FaFacebookF, FaTwitter, FaGoogle, FaGithub } from "react-icons/fa";
// // import { setRole } from "../components/Redux/Actions/ProductActions";
// // import React, { useState, useEffect } from "react";
// // import { useDispatch } from "react-redux";
// // import {
// //   MDBBtn,
// //   MDBContainer,
// //   MDBRow,
// //   MDBCol,
// //   MDBCard,
// //   MDBCardBody,
// //   MDBInput,
// //   MDBCheckbox,
// //   MDBIcon
// // } from 'mdb-react-ui-kit';
// // import { Link } from "react-router-dom";

// // function Modal({ setOpenModal }) {
// //   const [userName, setUserName] = useState('');
// //   const [pass, setPass] = useState('');
// //   const [Checkrole, setCheckRole] = useState('');
// //   const dispatch = useDispatch();

// //   useEffect(() => {
// //     if (userName.includes('@admin') && Checkrole !== 'admin') {
// //       setCheckRole('admin');
// //     } else if (!userName.includes('@admin') && Checkrole !== 'user') {
// //       setCheckRole('user');
// //     }
// //   }, [userName, Checkrole]);

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     localStorage.setItem('name', userName);
// //     localStorage.setItem('pass', pass);
// //     dispatch(setRole(userName, pass,Checkrole));
// //     setUserName('');
// //     setPass('');
// //     Checkrole('');
// //   };

// //   console.log("role",Checkrole);

// //   return (
// //     <>
// //       <form onSubmit={handleSubmit}>
// //         <div id="modal_container">
// //           <div className="modalBackground">
// //             <div className="modalContainer">
// //               <div className="titleCloseBtn">
// //                 <button className="bti"
// //                   onClick={() => {
// //                     setOpenModal(false);
// //                   }}
// //                 >
// //                   X
// //                 </button>
// //               </div>
// //               <div>
// //                 <MDBContainer fluid className='p-4 conn'>
// //                   <MDBRow>
// //                     <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
// //                       <h1 className="my-5 display-3 fw-bold ls-tight px-3">
// //                         Time To Get Placed In Your<br />
// //                         <span className="text-primary">Dream Company</span>
// //                       </h1>
// //                       <p className='px-3' style={{ color: 'hsl(217, 10%, 50.8%)' }}>
// //                         Lorem ipsum dolor sit amet consectetur adipisicing elit.
// //                         Eveniet, itaque accusantium odio, soluta, corrupti aliquam
// //                         quibusdam tempora at cupiditate quis eum maiores libero
// //                         veritatis? Dicta facilis sint aliquid ipsum atque?
// //                       </p>
// //                     </MDBCol>
// //                     <MDBCol md='6'>
// //                       <MDBCard className='my-5'>
// //                         <MDBCardBody className='p-5'>
// //                           <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' value={userName}
// //                             onChange={(e) => setUserName(e.target.value)} />
// //                           <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'
// //                             value={pass}
// //                             onChange={(e) => setPass(e.target.value)} />
// //                           <div className='d-flex justify-content-center mb-4'>
// //                             <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
// //                           </div>
// //                           <MDBBtn className='w-100 mb-4' size='md'>Sign in</MDBBtn>
// //                           <div className="text-center">
// //                             <p>or sign up as New:</p>
// //                             {/* <Link to={"/Sign"}>signUp</Link> */}
// //                             {/* <MDBBtn className='w-100 mb-4' size='md'>Sign up</MDBBtn> */}
// //                             <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
// //                               <FaFacebookF />
// //                             </MDBBtn>
// //                             <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
// //                               <FaTwitter />
// //                             </MDBBtn>
// //                             <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
// //                               <FaGoogle />
// //                             </MDBBtn>
// //                             <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
// //                               <FaGithub />
// //                             </MDBBtn>
// //                           </div>
// //                         </MDBCardBody>
// //                       </MDBCard>
// //                     </MDBCol>
// //                   </MDBRow>
// //                 </MDBContainer>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </form>
// //     </>
// //   );
// // }

// export default Modal;

import { FaFacebookF, FaTwitter, FaGoogle, FaGithub } from "react-icons/fa";
import { setRole } from "../components/Redux/Actions/ProductActions";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Modal({ setOpenModal }) {
  const [userName, setUserName] = useState('');
  const [pass, setPass] = useState('');
  const [Checkrole, setCheckRole] = useState('');
  const [Error, setError] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (userName.includes('@admin') && Checkrole !== 'admin') {
      setCheckRole('admin');
    } else if (!userName.includes('@admin') && Checkrole !== 'user') {
      setCheckRole('user');
    }
  }, [userName, Checkrole]);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (userName.trim() === '' || pass.trim() === '') {
      setError('Please fill out all fields');
      

      toast.error('Please fill out all fields');
      
      return;
    }
  
  
    localStorage.setItem('name', userName);
    localStorage.setItem('pass', pass);
    dispatch(setRole(userName, pass, Checkrole));
    setUserName('');
    setPass('');
    setCheckRole('');
    
   
    setOpenModal(false);
  };

  console.log("role", Error);

  return (
    <>
    <ToastContainer />
      <form>
        <div id="modal_container">
          <div className="modalBackground">
            <div className="modalContainer">
              <div className="titleCloseBtn">
                <button className="bti" onClick={() => setOpenModal(false)}>X</button>
              </div>
              <div>
                <div className='p-4 conn'>
                  <div className='text-center text-md-start d-flex flex-column justify-content-center'>
                    <h1 className="my-5 display-3 fw-bold ls-tight px-3">
                      Time To Get Placed In Your<br />
                      <span className="text-primary">Dream Company</span>
                    </h1>
                    <p className='px-3' style={{ color: 'hsl(217, 10%, 50.8%)' }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                      quibusdam tempora at cupiditate quis eum maiores libero
                      veritatis? Dicta facilis sint aliquid ipsum atque?
                    </p>
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="password">Password</label>
                    <input
                      id="password"
                      type="password"
                      value={pass}
                      onChange={(e) => setPass(e.target.value)}
                    />
                  </div>
                  <div className='d-flex justify-content-center mb-4'>
                    <input
                      type="checkbox"
                      id="newsletter"
                      name="newsletter"
                      value="subscribe"
                    />
                    <label htmlFor="newsletter">Subscribe to our newsletter</label>
                  </div>
                  <button type="submit" onClick={handleSubmit } className='w-100 mb-4' >Sign in</button>
                  <div className="text-center">
                    <p>or Sign Up</p>
                    <Link to="/SignUp">
                    <button type="submit"className='w-100 mb-4' >Sign Up</button>
                    </Link>
                  
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Modal;
