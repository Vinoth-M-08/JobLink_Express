import back from "../assets/images/back3.png"
import { FaBriefcase,FaArrowRight,FaHeart } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import icon from "../assets/images/c-4.png"
import icon2 from "../assets/images/c-8.png"
import blog1 from "../assets/images/b-4.jpg"
import blog2 from "../assets/images/b-5.jpg"
import blog3 from "../assets/images/b-6.jpg"
import AdminRev from '../components/AdminRev';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import React, {useRef, useEffect} from 'react'

const Jobs=[
	{
		title: "Fresher UI/UX Designer (3 Year Exp.)",
    	location: "Kuniyamathur, Coimbatore",
    	employmentType: "Full Time",
    	imgSrc: icon2,
	},
	{
		title: "Fresher UI/UX Designer (3 Year Exp.)",
    	location: "Kuniyamathur, Coimbatore",
    	employmentType: "Full Time",
    	imgSrc: icon2,
	},
	{
		title: "Fresher UI/UX Designer (3 Year Exp.)",
    	location: "Kuniyamathur, Coimbatore",
    	employmentType: "Full Time",
    	imgSrc: icon2,
	},
	{
		title: "Fresher UI/UX Designer (3 Year Exp.)",
    	location: "Kuniyamathur, Coimbatore",
    	employmentType: "Full Time",
    	imgSrc: icon2,
	},
	{
		title: "Fresher UI/UX Designer (3 Year Exp.)",
    	location: "Kuniyamathur, Coimbatore",
    	employmentType: "Full Time",
    	imgSrc: icon2,
	},
	{
		title: "Fresher UI/UX Designer (3 Year Exp.)",
    	location: "Kuniyamathur, Coimbatore",
    	employmentType: "Full Time",
    	imgSrc: icon2,
	}
]
const Job_List = [
	{
	  title: "Fresher UI/UX Designer (3 Year Exp.)",
	  location: "Kuniyamathur, Coimbatore",
	  employmentType: "Full Time",
	  imgSrc: icon,
	},
	{
	  title: "Fresher UI/UX Designer (3 Year Exp.)",
	  location: "Kuniyamathur, Coimbatore",
	  employmentType: "Full Time",
	  imgSrc: icon,
	},
	{
	  title: "Fresher UI/UX Designer (3 Year Exp.)",
	  location: "Kuniyamathur, Coimbatore",
	  employmentType: "Full Time",
	  imgSrc: icon,
	},
	{
	  title: "Fresher UI/UX Designer (3 Year Exp.)",
	  location: "Kuniyamathur, Coimbatore",
	  employmentType: "Full Time",
	  imgSrc: icon,
	},
	{
	  title: "Fresher UI/UX Designer (3 Year Exp.)",
	  location: "Kuniyamathur, Coimbatore",
	  employmentType: "Full Time",
	  imgSrc: icon,
	},
	{
	  title: "Fresher UI/UX Designer (3 Year Exp.)",
	  location: "Kuniyamathur, Coimbatore",
	  employmentType: "Full Time",
	  imgSrc: icon,
	},
	{
	  title: "Fresher UI/UX Designer (3 Year Exp.)",
	  location: "Kuniyamathur, Coimbatore",
	  employmentType: "Full Time",
	  imgSrc: icon,
	},
	{
	  title: "Fresher UI/UX Designer (3 Year Exp.)",
	  location: "Kuniyamathur, Coimbatore",
	  employmentType: "Full Time",
	  imgSrc: icon,
	},
  ];
const Home=()=> {
	// useEffect(() => {
    //     const tl = gsap.timeline(timelineOptions);

    //     tl.from(elements, {
    //         opacity: 0,
    //         y: '100',
    //         skewY: 10,
    //         stagger: {
    //             amount: .4
    //         }
    //     });
    // }, [elements, timelineOptions]);
    // return null;
    return ( <>
	 <NavBar />
	 {/* <GsapAnim elements={siteContentRef.current} timelineOptions={{ ease: 'power3.out' }}> */}
<div class="home-banner margin-bottom-0 intro-bg intro-banner" data-overlay="5">
				<div class="container">
					
					<div class="row align-items-center justify-content-between">
						<div class="col-xl-5 col-lg-7 col-md-7 col-sm-12 col-12">
							<form class="bg-white rounded p-4">
								<div class="row">
									<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
										<div class="form-group mb-4">
											<h2 class="mb-0 ft-bold">Find your Job</h2>
											<p class="fs-md text-muted">Hire experts or be hired in sales & marketing</p>
										</div>
										
										<div class="form-group position-relative mb-3">
											<input type="text" class="form-control lg form-ico border rounded" placeholder="Job Title, Keyword or Company" />
											<i class="bnc-ico lni lni-search-alt"></i>
										</div>
										<div class="form-group position-relative mb-3">
											<input type="text" class="form-control lg form-ico rounded" placeholder="Location or Zip Code" />
											<i class="bnc-ico lni lni-target"></i>
										</div>
										<div class="form-group position-relative mb-3">
											<select class="form-select lg border">
											  <option value="1">Choose Categories</option>
											  <option value="2">Information Technology</option>
											  <option value="3">Cloud Computing</option>
											  <option value="4">Engineering Services</option>
											  <option value="5">Healthcare/Pharma</option>
											  <option value="6">Telecom/ Internet</option>
											  <option value="7">Finance/Insurance</option>
											</select>
										</div>
										<div class="form-group position-relative">
											<button class="btn full-width custom-height-lg theme-bg text-white fs-md" type="button">Find Job</button>
										</div>
									</div>
								</div>
							</form>
							<div class="top-searches-key">
								<ul class="p-0 mt-4 align-items-center d-flex">
									<li><span class="text-dark ft-medium medium">Top Searches:</span></li>
									<li><a href="javascript:void(0);" class="">WordPress</a></li>
									<li><a href="javascript:void(0);" class="">Magento</a></li>
									<li><a href="javascript:void(0);" class="">HTML5</a></li>
								</ul>
							</div>
						</div>
						
						<div class="col-xl-6 col-lg-5 col-md-5 col-sm-12 col-12">
							<div class="bnr_thumb position-relative">
								<img src={back} class="img-fluid bnr_img" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="sec_title position-relative text-center mb-5">
                <h6 className="text-muted mb-0">Recent Jobs</h6>
                <h2 className="ft-bold">Recent Active <span className="theme-cl">Listed jobs</span></h2>
              </div>
            </div>
          </div>

          <div className="row align-items-center g-xl-4 g-lg-3 g-md-3 g-3">
            {Jobs.map((job, index) => (
              <div key={index} className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="jbr-wrap text-left border rounded">
                  <div className="cats-box mlb-res rounded bg-white d-flex align-items-center justify-content-between px-3 py-3">
                    <div className="cats-box rounded bg-white d-flex align-items-center">
                      <div className="text-center"><img src={job.imgSrc} className="img-fluid" width="55" alt="" /></div>
                      <div className="cats-box-caption px-2">
                        <h4 className="fs-md mb-0 ft-medium">{job.title}</h4>
                        <div className="d-block mb-2 position-relative">
                          <span className="text-muted medium">
                            &nbsp;<FaLocationDot />&nbsp;{job.location}
                          </span>
                          <span className="muted medium ms-2 theme-cl">
                            &nbsp;<FaBriefcase />&nbsp;{job.employmentType}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-center mlb-last">
                      <a href="job-detail.html" className="btn gray ft-medium apply-btn fs-sm rounded">Apply Job
                        &nbsp;<FaArrowRight />
                        &nbsp;
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mt-5">
              <div className="position-relative text-center">
                <a href="job-search-v1.html" className="btn btn-md theme-bg rounded text-light hover-theme">Explore More Jobs&nbsp;
                  <FaArrowRight />
                  &nbsp;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

	  <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="sec_title position-relative text-center mb-5">
              <h6 className="text-muted mb-0">Trending Jobs</h6>
              <h2 className="ft-bold">All Popular Listed jobs</h2>
            </div>
          </div>
        </div>

        <div className="row align-items-center g-xl-3 g-lg-3 g-md-3 g-3">
          {Job_List.map((job, index) => (
            <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="job_grid border rounded ">
                <div className="position-absolute ab-left">
                  <button type="button" className="p-3 border circle d-flex align-items-center justify-content-center bg-white text-gray">
				  &nbsp;<FaHeart />&nbsp;
                  </button>
                </div>
                <div className="position-absolute ab-right">
                  <span className="medium theme-cl theme-bg-light px-2 py-1 rounded">{job.employmentType}</span>
                </div>
                <div className="job_grid_thumb mb-2 pt-5 px-3">
                  <a href="job-detail.html" className="d-block text-center m-auto">
                    <img src={job.imgSrc} className="img-fluid" width="70" alt="" />
                  </a>
                </div>
                <div className="job_grid_caption text-center pb-3 px-3">
                  <h4 className="mb-0 ft-medium medium">
                    <a href="job-detail.html" className="text-dark fs-md">
                      {job.title}
                    </a>
                  </h4>
                  <div className="jbl_location">
				  &nbsp;<FaLocationDot />&nbsp;
                    <span>{job.location}</span>
                  </div>
                </div>
                <div className="job_grid_footer pb-4 px-3">
                  <ul className="p-0 skills_tag text-center">
                    {['Java', 'React', 'GItVersion'].map((skill, index) => (
                      <li key={index}>
                        <span className="px-2 py-1 medium skill-bg rounded text-skill">{skill}</span>
                      </li>
                    ))}
                    <li><span className="px-2 py-1 medium theme-bg rounded text-light">+3 More</span></li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row justify-content-center">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mt-5">
            <div className="position-relative text-center">
              <a href="job-search-v1.html" className="btn btn-md theme-bg rounded text-white hover-theme">
                Explore More Jobs
				&nbsp;
                  <FaArrowRight />
                  &nbsp;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
	<AdminRev/>


	  <section>
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-xl-5 col-lg-7 col-md-9 col-sm-12">
							<div class="sec_title position-relative text-center mb-5">
								<h6 class="text-muted mb-0">Our Pricing</h6>
								<h2 class="ft-bold">Choose Your Package</h2>
							</div>
						</div>
					</div>
					
					<div class="row align-items-center  g-xl-4 g-lg-3 g-md-3 g-3">
						
						<div class="col-lg-4 col-md-4">
							<div class="pricing_wrap">
								<div class="prt_head">
									<h4 class="ft-medium">Basic</h4>
								</div>
								<div class="prt_price">
									<h2 class="ft-bold"><span>$</span>29</h2>
									<span class="fs-md">per user, per month</span>
								</div>
								<div class="prt_body">
									<ul>
										<li>99.5% Uptime Guarantee</li>
										<li>120GB CDN Bandwidth</li>
										<li>5GB Cloud Storage</li>
										<li class="none">Personal Help Support</li>
										<li class="none">Enterprise SLA</li>
									</ul>
								</div>
								<div class="prt_footer">
									<a href="#" class="btn choose_package">Start Basic</a>
								</div>
							</div>
						</div>
						
						<div class="col-lg-4 col-md-4">
							<div class="pricing_wrap">
								<div class="prt_head">
									<div class="recommended">Best Value</div>
									<h4 class="ft-medium">Standard</h4>
								</div>
								<div class="prt_price">
									<h2 class="ft-bold"><span>$</span>49</h2>
									<span class="fs-md">per user, per month</span>
								</div>
								<div class="prt_body">
									<ul>
										<li>99.5% Uptime Guarantee</li>
										<li>150GB CDN Bandwidth</li>
										<li>10GB Cloud Storage</li>
										<li>Personal Help Support</li>
										<li class="none">Enterprise SLA</li>
									</ul>
								</div>
								<div class="prt_footer">
									<a href="#" class="btn choose_package active">Start Standard</a>
								</div>
							</div>
						</div>
						
					
						<div class="col-lg-4 col-md-4">
							<div class="pricing_wrap">
								<div class="prt_head">
									<h4 class="ft-medium">Platinum</h4>
								</div>
								<div class="prt_price">
									<h2 class="ft-bold"><span>$</span>79</h2>
									<span class="fs-md">2 user, per month</span>
								</div>
								<div class="prt_body">
									<ul>
										<li>100% Uptime Guarantee</li>
										<li>200GB CDN Bandwidth</li>
										<li>20GB Cloud Storage</li>
										<li>Personal Help Support</li>
										<li>Enterprise SLA</li>
									</ul>
								</div>
								<div class="prt_footer">
									<a href="#" class="btn choose_package">Start Platinum</a>
								</div>
							</div>
						</div>
						
					</div>
					
				</div>
			</section>




			<section>
				<div class="container">
					
					<div class="row justify-content-center">
						<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
							<div class="sec_title position-relative text-center mb-4">
								<h6 class="text-muted mb-0">Latest News</h6>
								<h2 class="ft-bold">Pickup New Updates</h2>
							</div>
						</div>
					</div>
					
					<div class="row justify-content-center g-xl-3 g-lg-3 g-md-3 g-3">
						
						
						<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
							<div class="blg_grid_box">
								<div class="blg_grid_thumb">
									<a href="blog-detail.html"><img src={blog1} class="img-fluid" alt=""/></a>
								</div>
								<div class="blg_grid_caption">
									<div class="blg_tag"><span>Marketing</span></div>
									<div class="blg_title"><h4><a href="blog-detail.html">How To Register & with WorkPlex Step by Step?</a></h4></div>
									<div class="blg_desc"><p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p></div>
								</div>
								<div class="crs_grid_foot">
									<div class="crs_flex d-flex align-items-center justify-content-between br-top px-3 py-2">
										<div class="crs_fl_first">
											<div class="crs_tutor">
												<div class="crs_tutor_thumb"><a href="instructor-detail.html"><img src="assets/img/team-2.jpg" class="img-fluid circle" width="35" alt=""/></a></div>
											</div>
										</div>
										<div class="crs_fl_last">
											<div class="foot_list_info">
												<ul>
													<li><div class="elsio_ic"><i class="fa fa-eye text-success"></i></div><div class="elsio_tx">10k Views</div></li>
													<li><div class="elsio_ic"><i class="fa fa-clock text-warning"></i></div><div class="elsio_tx">10 July 2021</div></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						
						<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
							<div class="blg_grid_box">
								<div class="blg_grid_thumb">
									<a href="blog-detail.html"><img src={blog2} class="img-fluid" alt=""/></a>
								</div>
								<div class="blg_grid_caption">
									<div class="blg_tag"><span>Business</span></div>
									<div class="blg_title"><h4><a href="blog-detail.html">Let's Know How WorkPlex Work Fast and Secure?</a></h4></div>
									<div class="blg_desc"><p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p></div>
								</div>
								<div class="crs_grid_foot">
									<div class="crs_flex d-flex align-items-center justify-content-between br-top px-3 py-2">
										<div class="crs_fl_first">
											<div class="crs_tutor">
												<div class="crs_tutor_thumb"><a href="instructor-detail.html"><img src="assets/img/team-3.jpg" class="img-fluid circle" width="35" alt=""/></a></div>
											</div>
										</div>
										<div class="crs_fl_last">
											<div class="foot_list_info">
												<ul>
													<li><div class="elsio_ic"><i class="fa fa-eye text-success"></i></div><div class="elsio_tx">10k Views</div></li>
													<li><div class="elsio_ic"><i class="fa fa-clock text-warning"></i></div><div class="elsio_tx">10 July 2021</div></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
							<div class="blg_grid_box">
								<div class="blg_grid_thumb">
									<a href="blog-detail.html"><img src={blog3} class="img-fluid" alt=""/></a>
								</div>
								<div class="blg_grid_caption">
									<div class="blg_tag"><span>Accounting</span></div>
									<div class="blg_title"><h4><a href="blog-detail.html">How To Improove Digital Marketing for Fast SEO</a></h4></div>
									<div class="blg_desc"><p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p></div>
								</div>
								<div class="crs_grid_foot">
									<div class="crs_flex d-flex align-items-center justify-content-between br-top px-3 py-2">
										<div class="crs_fl_first">
											<div class="crs_tutor">
												<div class="crs_tutor_thumb"><a href="instructor-detail.html"><img src="assets/img/team-5.jpg" class="img-fluid circle" width="35" alt=""/></a></div>
											</div>
										</div>
										<div class="crs_fl_last">
											<div class="foot_list_info">
												<ul>
													<li><div class="elsio_ic"><i class="fa fa-eye text-success"></i></div><div class="elsio_tx">10k Views</div></li>
													<li><div class="elsio_ic"><i class="fa fa-clock text-warning"></i></div><div class="elsio_tx">10 July 2021</div></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						
					</div>
					
				</div>
			</section>
			{/* </GsapAnim>  */}
			<Footer /> 

    </> );
}

export default Home;