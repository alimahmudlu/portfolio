import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAlignCenter} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function Timeline() {
    return (
        <section id="timeline" className="timeline_section"  data-aos='fade-up'>
            <div className="pb-4">
                <span className="menu_header">Timeline</span>
                <h1 className="section_header">highlights</h1>
                <div className="timeline">
                    <div className="timeline_item color_1" data-aos='fade-up'>
                        <div className="timeline_item_icon bg_c">
                            <FontAwesomeIcon icon={faAlignCenter} />
                        </div>
                        <div className="timeline_item_desc">
                            <div className="timeline_item_head">
                                <h1>Internship at Juniper <span>2019-present</span></h1>
                            </div>
                            <div className="timeline_item_content">
                                <p>I recently have joined the Juniper Networs as a Software Developer-Intern in the DevOps team. My major part of the work has been into the field of creating sustainable and flexible CI/CD (Continuous Integration & Continuous Development) pipelines which enables developers at Juniper to do rapid development. I am also exploring the role of container technology like Docker and container-orchrastation technologies like K8s, Swarm to create industry standard production environments.</p>
                            </div>
                        </div>
                    </div>
                    <div className="timeline_item color_2" data-aos='fade-up'>
                        <div className="timeline_item_icon">
                            <FontAwesomeIcon icon={faAlignCenter} />
                        </div>
                        <div className="timeline_item_desc">
                            <div className="timeline_item_head">
                                <h1>Internship at Juniper <span>2019-present</span></h1>
                            </div>
                            <div className="timeline_item_content">
                                <p>I recently have joined the Juniper Networs as a Software Developer-Intern in the DevOps team. My major part of the work has been into the field of creating sustainable and flexible CI/CD (Continuous Integration & Continuous Development) pipelines which enables developers at Juniper to do rapid development. I am also exploring the role of container technology like Docker and container-orchrastation technologies like K8s, Swarm to create industry standard production environments.</p>
                            </div>
                        </div>
                    </div>
                    <div className="timeline_item color_2" data-aos='fade-up'>
                        <div className="timeline_item_icon">
                            <FontAwesomeIcon icon={faAlignCenter} />
                        </div>
                        <div className="timeline_item_desc">
                            <div className="timeline_item_head">
                                <h1>Internship at Juniper <span>2019-present</span></h1>
                            </div>
                            <div className="timeline_item_content">
                                <p>I recently have joined the Juniper Networs as a Software Developer-Intern in the DevOps team. My major part of the work has been into the field of creating sustainable and flexible CI/CD (Continuous Integration & Continuous Development) pipelines which enables developers at Juniper to do rapid development. I am also exploring the role of container technology like Docker and container-orchrastation technologies like K8s, Swarm to create industry standard production environments.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
