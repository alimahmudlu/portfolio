import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCode, faCogs, faUserCog, faVideo} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const timelineItems = [
    {
        timelineId: 1,
        timelineName: "Edumedia-Azerbaijan",
        timelineContent: "Frontend Developer",
        timelineStartDate: "10.2019",
        timelineEndDate: "indiyədək",
        timelineIcon: faCode
    },
    {
        timelineId: 2,
        timelineName: "Embawood",
        timelineContent: "Praktika",
        timelineStartDate: "02.2018",
        timelineEndDate: "06.2018",
        timelineIcon: faUserCog
    },
    {
        timelineId: 3,
        timelineName: "D-Tech",
        timelineContent: "Frontend Developer",
        timelineStartDate: "01.2018",
        timelineEndDate: "06.2018",
        timelineIcon: faCode
    },
    {
        timelineId: 4,
        timelineName: "Satıcı/Təmirci/İnvestor",
        timelineContent: "2Əl",
        timelineStartDate: "09.2017",
        timelineEndDate: "01.2018",
        timelineIcon: faCogs
    },
    {
        timelineId: 5,
        timelineName: "DevCenter",
        timelineContent: "Frontend Developer",
        timelineStartDate: "10.2016",
        timelineEndDate: "05.2017",
        timelineIcon: faCode
    },
    {
        timelineId: 6,
        timelineName: "Freelance",
        timelineContent: "Frontend Developer",
        timelineStartDate: "09.2014",
        timelineEndDate: "indiyədək",
        timelineIcon: faCode
    },
    {
        timelineId: 7,
        timelineName: "Freelance",
        timelineContent: "Videoqraf",
        timelineStartDate: "2015",
        timelineEndDate: "indiyədək",
        timelineIcon: faVideo
    }
]

export default function Timeline() {
    return (
        <section id="timeline" className="timeline_section"  data-aos='fade-up'>
            <div className="pb-4">
                <span className="menu_header">Timeline</span>
                <h1 className="section_header">highlights</h1>
                <div className="timeline">
                    {timelineItems.map((item, index) => {
                        return (
                            <div className="timeline_item color_1" data-aos='fade-up'>
                                <div className="timeline_item_icon bg_c">
                                    <FontAwesomeIcon icon={item.timelineIcon} />
                                </div>
                                <div className="timeline_item_desc">
                                    <div className="timeline_item_head">
                                        <h1>{item.timelineName} <span>{item.timelineStartDate}-{item.timelineEndDate}</span></h1>
                                    </div>
                                    <div className="timeline_item_content">
                                        <p>{item.timelineContent}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </section>
    )
}
