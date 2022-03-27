import React from 'react'

const About = () => {


    return (
        <div id="contact" className="container" style={{ paddingTop: '7rem', height: '25rem', position: 'relative', zIndex: '1'}}>
            <div className="my-auto text-center text-white">
                <h1 className="display-5 fw-bold">Follow for more content and deals!!</h1>
                <div className="col-lg-6 mx-auto">
                    <h4 className="mb-4" >New videos uploaded weekly</h4>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/wesworldfpv/' className="btn btn-primary btn-lg px-2 gap-3"><i className="bi bi-instagram px-2" style={{ fontSize: '1.5rem' }}></i>Instagram</a>
                        <a target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/user/Nestlequickk' className="btn btn-danger btn-lg px-2"><i class="bi bi-youtube px-2" style={{ fontSize: '1.5rem' }}></i>Youtube</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About