import NavBar from './components/NavBar'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './pages/HomePage'
import SignIn from './pages/Sign'
import Footer from './components/Footer'
import SignU from './pages/SignUp'
import Dash from './pages/Dash'
import Contact from './pages/Contact'
import Resume_Add from './pages/UserSide/Resume_Add'
import User_Applied_Jobs from './pages/UserSide/User_Applied_Jobs'
import Added_Resumes from './pages/UserSide/AddedResumes'
import {gsap, Power3,CSSPlugin} from 'gsap';
import BookMarkedResume from './pages/AdminSide/BookMarkedResume'
import AdminJobApplicants from './pages/AdminSide/JobApplicants'
import JobAdd from './pages/AdminSide/JobAdd'
import ViewAddedJob from './pages/AdminSide/ViewAddedJobs'
import ViewPremiumJobs from './pages/AdminSide/ViewPremiumJobs'

function App() {  
  gsap.registerPlugin(CSSPlugin);
  let tl = new gsap.timeline();
    let ease = Power3.easeOut;
  return (
    <>
   <Router>
  <Routes>
    <Route path="/" element={<Home timeline = {tl} ease= {ease}/>} />
    <Route path="/Dash" element={<Dash />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/User_AddResume" element={<Resume_Add />} />
    <Route path="/User_AppliedJobs" element={<User_Applied_Jobs />} />
    <Route path="/User_AddedJobs" element={<Added_Resumes />} />
    <Route path="/SignUp" element={<SignU />} />

    {/* Admin */}

    <Route path ="/BookMarkedResume" element={<BookMarkedResume/>}/>
    <Route path ="/JobApplicants" element={<AdminJobApplicants/>}/>
    <Route path ="/Admin_job_add" element={<JobAdd/>}/>
    <Route path ="/View_Added_Jobs" element={<ViewAddedJob/>}/>
    <Route path ="/View_Premium_Jobs" element={<ViewPremiumJobs/>}/>
  </Routes>
</Router>
    </>
  )
}

export default App
