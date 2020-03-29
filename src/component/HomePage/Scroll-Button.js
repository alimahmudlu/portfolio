// import React from "react";
// import {faAlignCenter} from "@fortawesome/free-solid-svg-icons";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
//
// class ScrollButton extends React.Component {
//     constructor() {
//         super();
//
//         this.state = {
//             intervalId: 0
//         };
//     }
//
//     scrollStep() {
//         if (window.pageYOffset === 0) {
//             clearInterval(this.state.intervalId);
//         }
//         window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
//     }
//
//     scrollToTop() {
//         let intervalId = setInterval(this.scrollStep.bind(this), "0");
//         this.setState({ intervalId: intervalId });
//     }
//
//
//
//     render () {
//         return <button title='Back to top' className='scrolltotop' onClick={ () => { this.scrollToTop(); }}>
//             <span className=''>
//                 <FontAwesomeIcon icon={faAlignCenter} />
//             </span>
//         </button>;
//     }
// }
//
// export default ScrollButton
//

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
        document.addEventListener("scroll", function(e) {
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
