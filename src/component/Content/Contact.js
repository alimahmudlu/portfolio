import React from "react";

export default function Contact() {
    return (
        <section id="contact" className="contact_section">
            <div className="">
                <span className="menu_header">Contact</span>
                <h1 className="section_header">DROP A MESSAGE</h1>
                <div className="">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <form  class="needs-validation" novalidate>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="full_name" className="inp">
                                    <input type="text" id="full_name" placeholder="&nbsp;" required/>
                                    <span className="label">Your Name</span>
                                    <span className="border"></span>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="email" className="inp">
                                    <input type="email" id="email" placeholder="&nbsp;" required/>
                                    <span className="label">E-mail</span>
                                    <span className="border"></span>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="phone_number" className="inp">
                                    <input type="text" id="phone_number" placeholder="&nbsp;" required/>
                                    <span className="label">Phone Number</span>
                                    <span className="border"></span>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="subject" className="inp">
                                    <input type="text" id="subject" placeholder="&nbsp;" required/>
                                    <span className="label">Phone Number</span>
                                    <span className="border"></span>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="message" className="inp textarea">
                                    <textarea id="message" placeholder="&nbsp;" required></textarea>
                                    <span className="label">Text</span>
                                    <span className="border"></span>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <button className="btn btn-custom d-block ml-auto" type="submit">Göndər</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}
