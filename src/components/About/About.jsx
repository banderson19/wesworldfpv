import React from 'react'
import wesworldfpv_logo from '../../assets/images/wesworldfpv_logo.png';

const About = () => {


    return (
        <div>
            <div>
                <img className="d-block mx-auto mb-4 img-fluid img-reponsive opacity-25 position-fixed" style={{ top: '1%', left: "25%" }} src={wesworldfpv_logo} alt="wesworldfpv_logo" />
            </div>
            

            <div className="" style={{ position: 'relative', zIndex: '1' }}>
                <div className="px-4 py-5 my-5 text-center">
                    {/* <div className="opacity-25 position-fixed" style={{top: "25%", left: "25%"}}> */}

                    {/* </div> */}
                    <h1 className="display-5 fw-bold">Follow Me</h1>
                    <div className="col-lg-6 mx-auto">
                        <h4 className="mb-4">Constantly posting new content for all my followers</h4>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/wesworldfpv/' className="btn btn-secondary btn-lg px-2 gap-3"><i className="bi bi-instagram px-2" style={{fontSize: '1.5rem'}}></i>Instagram</a>
                            <a target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/user/Nestlequickk' className="btn btn-secondary btn-lg px-2"><i class="bi bi-youtube px-2" style={{fontSize: '1.5rem'}}></i>Youtube</a>
                        </div>
                    </div>
                </div>

                <div className="b-example-divider"></div>
                <div className="container my-5">
                    <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                            <h1 className="display-4 fw-bold lh-1">Border hero with cropped image and shadows</h1>
                            <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Primary</button>
                                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
                            </div>
                        </div>
                        <div className="col-lg-4 offset-lg-1 text-center  p-0 overflow-hidden shadow-lg">
                            <img className="rounded-lg-3 img-fluid shadow-lg" src={wesworldfpv_logo} alt="" style={{ height: "220px", width: "450px" }} />
                        </div>
                    </div>
                </div>

                <div className="b-example-divider"></div>

                <div>

                </div>

            </div>
        </div>
    )
}

export default About