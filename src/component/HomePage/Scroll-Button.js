import React, { Component } from "react";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class ScrollButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            is_visible: false
        };
    }

    componentDidMount() {
        var scrollComponent = this;
        document.addEventListener("scroll", function() {
            scrollComponent.toggleVisibility();
        });
    }

    toggleVisibility() {
        if (window.pageYOffset > 300) {
            this.setState({
                is_visible: true
            });
        } else {
            this.setState({
                is_visible: false
            });
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    render() {
        const { is_visible } = this.state;
        return (
            <>
                {is_visible && (
                    <div onClick={() => this.scrollToTop()} className="scrolltotop">
                        <FontAwesomeIcon icon={faArrowUp} />
                    </div>
                )}
            </>
        );
    }
}

export default ScrollButton
