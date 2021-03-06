import React from 'react'

const Footer = () => {
    return (
        <div>
        <div className="bg-dark text-center text-white">
            <div className="container p-4 pb-0">
                <section className="mb-4">
                    <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/wesworldfpv/" role="button"><i class="bi bi-instagram"></i></a>
                    <a className="btn btn-outline-light btn-floating m-1" href="https://www.youtube.com/user/Nestlequickk" role="button"><i class="bi bi-youtube"></i></a>

                </section>
            </div>
            <div className="text-center p-3" style={{backgroundColor: "#00000033"}}> © 2022 Copyright:  <a className="text-white" href="">weskraft.com</a>
            </div>
        </div>
        </div>
    )
}

export default Footer;