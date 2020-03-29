import React from "react";

export default function Subscribe() {
    return (
        <section id="subscribe" className="subscribe_section" data-aos='fade-up'>
            <div className="">
                <span className="menu_header">Subscribe</span>
                <h1 className="section_header">SUBSCRIBE TO SITE</h1>
                <div className="">
                    <p>By subscribing to the site you will be first notified of all the updates and new article</p>
                </div>
                <form  className="needs-validation" noValidate>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="full_name" className="inp">
                                    <input type="email" id="subscribe_email" placeholder="&nbsp;" required autoComplete="true"/>
                                    <span className="label">Your Email</span>
                                    <span className="border"></span>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <button className="btn btn-custom d-block ml-auto" type="submit">Subscribe</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}
