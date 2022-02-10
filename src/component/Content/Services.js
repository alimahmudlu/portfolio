import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faVideo, faCode, faFilm, faDizzy } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const skillsItems = [
    {
        skillId: 1,
        skillName: "Front-end Development",
        skillContent: "HTML, CSS, JavaScript, React ilə 7 illik təcrübə və 100-lərlə iş",
        skillIcon: faCode,
        skillColor: "color_1"
    },
    {
        skillId: 2,
        skillName: "Mobile app Development",
        skillContent: "HTML, CSS, JavaScript, React ilə 7 illik təcrübə və 100-lərlə iş",
        skillIcon: faCode,
        skillColor: "color_1"
    },
    {
        skillId: 3,
        skillName: "Kinematoqraf (DoP)",
        skillContent: "10-larla qısa filmdə və reklamda kinematoqraf təcrübəsi",
        skillIcon: faVideo,
        skillColor: "color_2"
    },
    {
        skillId: 4,
        skillName: "Rejissor",
        skillContent: "4 qısa film və onlarla reklam rejissoru təcrübəsi",
        skillIcon: faFilm,
        skillColor: "color_3"
    },
    {
        skillId: 4,
        skillName: "Montajçı",
        skillContent: "Onlarla qısa film və onlarla reklam montajçısı təcrübəsi",
        skillIcon: faFilm,
        skillColor: "color_3"
    }
];

export default function Services() {
    return (
        <>
            <section className="skills" id="skills"  data-aos='fade-up'>
            <div className="">
                <div>
                    <span className="menu_header">Bacarıqlarım</span>
                    <h1 className="section_header">Nə bacarıram?</h1>
                    <div className="services">
                        <div className="row justify-content-center">
                            {skillsItems.length === 0 ?
                                <>
                                    <div className="col-lg-12 col-md-12 mb-lg-0 mb-md-7 mb-7" data-aos='fade-up'>
                                        <div className={["service_box service_color_1"].join("")}>
                                            <div className="service_box_icon">
                                                <FontAwesomeIcon icon={faDizzy}/>
                                            </div>
                                            <div className="service_desc">
                                                <div className="service_box_header">
                                                    <h1>There is no items here yet...</h1>
                                                </div>
                                                <div className="service_box_content">
                                                    <p>Please come back later</p>
                                                </div>
                                                <div className="service_box_footer">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                :
                                <>
                                    {skillsItems.map((item, index) => {
                                        return (
                                            <div className="col-lg-4 col-md-6 mb-lg-7 mb-md-7 mb-7" data-aos='fade-up'>
                                                <div className={["service_box service_", item.skillColor].join("")}>
                                                    <div className="service_box_icon">
                                                        <FontAwesomeIcon icon={item.skillIcon}/>
                                                    </div>
                                                    <div className="service_desc">
                                                        <div className="service_box_header">
                                                            <h1>{item.skillName}</h1>
                                                        </div>
                                                        <div className="service_box_content">
                                                            <p>{item.skillContent}</p>
                                                        </div>
                                                        <div className="service_box_footer">

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
