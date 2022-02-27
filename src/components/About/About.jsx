import React from 'react'
import profilePic from '../../assets/images/profilePic.jpeg';
import wesworldfpv_logo from '../../assets/images/wesworldfpv_logo.png';

const About = () => {


    return (
        <div id="contact">
            <div className="" style={{ position: 'relative', zIndex: '1' }}>
                <div className="px-4 py-5 text-center text-white">
                    <h1 className="display-5 fw-bold">Follow Me</h1>
                    <div className="col-lg-6 mx-auto">
                        <h4 className="mb-4">Constantly posting new content for all my followers</h4>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/wesworldfpv/' className="btn btn-secondary btn-lg px-2 gap-3"><i className="bi bi-instagram px-2" style={{ fontSize: '1.5rem' }}></i>Instagram</a>
                            <a target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/user/Nestlequickk' className="btn btn-secondary btn-lg px-2"><i class="bi bi-youtube px-2" style={{ fontSize: '1.5rem' }}></i>Youtube</a>
                        </div>
                    </div>
                </div>

                <div className="container my-5" >
                    <div className="row align-items-center rounded-3">
                        <div className="col-lg p-3 p-lg-5 pt-lg-3 text-center text-white">
                            <h1 className="display-4 fw-bold lh-1">Wesley Christensen</h1>
                            <div className="mt-4 text-center">
                                <ul className="list-unstyled mb-0">
                                    <li><i className="bi bi-geo-alt-fill"></i>
                                        <h4>Charleston, SC USA</h4>
                                    </li>

                                    <li><i className="bi bi-telephone-fill"></i>
                                        <h4>+ 01 234 567 89</h4>
                                    </li>

                                    <li><i className="bi bi-envelope-fill"></i>
                                        <h4>contact@mdbootstrap.com</h4>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg text-center mb-3">
                            <img className="rounded-lg-3 img-fluid" src={profilePic} alt="" style={{ height: "220px", width: "450px" }} />
                        </div>
                    </div>
                </div>
                <div>

                </div>

            </div>
        </div>
    )
}

export default About