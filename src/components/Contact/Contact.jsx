import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_8rwbiui', 'template_h3aodbb', form.current, 'user_quMpabUl8g3DFCCR8Dwln')
        .then((result) => {
            console.log(result.text)
        }, (err)=> {
            console.log(err.text)
        });

        const frm = document.getElementsByName('contact-form')[0];
        frm.reset();
    }
    return (
        <div>
            <section className="container my-5">
                <div className="row">
                    <div className="col-md text-center text-white">
                        <h3>Contact</h3>
                        <p>To make a purchase or ask any questions, please fill in the form → </p>
                        <p>We will get back to you as soon as possible for further arrangements.</p>
                        <div className="mt-4 text-center">
                            <ul className="list-unstyled mb-0">
                                <li><i className="bi bi-geo-alt-fill"></i>
                                    <h5>Charleston, SC USA</h5>
                                </li>

                                <li><i className="bi bi-telephone-fill"></i>
                                    <h5>+1 (843) 327 - 6604</h5>
                                </li>

                                <li><i className="bi bi-envelope-fill"></i>
                                    <h5>wesleydchristensen@gmail.com</h5>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md">
                        <form ref={form} name='contact-form' onSubmit={sendEmail}>
                            <input type="text" className="form-control my-1" id="name" name="user_name" placeholder="Name" />
                            <input type="text" className="form-control my-1" id="phone" name="user_phone" placeholder="Phone" />
                            <input type="text" className="form-control my-1" id="email" name="user_email" placeholder="Email" />
                            <input type="text" className="form-control my-1" id="subject" name="user_subject" placeholder="Subject" />
                            <textarea type="text" className="form-control my-1" id="message" name="user_message" rows="5" placeholder="Message" />
                            <div>
                                <input className="btn btn-primary" type="submit" value="send"/>
                            </div>
                        </form>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact