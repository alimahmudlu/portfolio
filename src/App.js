import React, {useEffect, useState, Component} from 'react';
import './App.css';
import HomePage from "./component/HomePage/HomePage";
import AOS from "aos";

function App() {
    AOS.init()
    return (
        <HomePage />
    );
}

export default App;

// //
// export default function App() {
//     const [lol, setLol] = useState("1");
//     const [lola, setLola] = useState("1");
//     return (
//         <>
//             <input value={lol} onChange={event => setLol(event.target.value)}/>{lol}
//             <input value={lola} onChange={event => setLola(event.target.value)}/>
//             {lola}
//         </>
//     )
// };
//
// export default class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {lol: '', lola: ''};
//
//         this.handleChange = this.handleChange.bind(this);
//         this.handleChangea = this.handleChangea.bind(this);
//     }
//
//     handleChange(event) {
//         this.setState({lol: event.target.value});
//     }
//     handleChangea(event) {
//         this.setState({lol: event.target.value});
//     }
//
//
//     render() {
//         return (
//             <form>
//                 <label>
//                     Name:
//                     <input type="text" value={this.state.lol} onChange={this.handleChange} />
//                     {this.state.lol}
//                     <input type="text" value={this.state.lola} onChange={this.handleChangea} />
//                     {this.state.lola}
//                 </label>
//             </form>
//         );
//     }
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// //
// //
// //
// //
// // class App extends React.Component {
// //     constructor(props) {
// //         super(props);
// //         this.state = {
// //             lol: ''
// //         }
// //
// //         this.handleChange = this.handleChange.bind(this)
// //     }
// //     handleChange(event) {
// //         this.setState({lol: event.target.value})
// //     }
// //
// //     render() {
// //         return (
// //             <>
// //                 {/*<input type="text" onChange={this.handleChange} value={this.state.lol} />*/}
// //                 <span contentEditable onChange={this.handleChange} value={this.state.lol} className={this.state.lol == "aa" ? "salam" : "sagol"}>as</span>
// //                 <Lol a={this.state.lol}/>
// //             </>
// //         )
// //     }
// //
// // }
// //
// //
// //
// //
// //
// //
// // export default App
// //
// //
// // function Lol(props) {
// //     return (
// //         <div contentEditable className={["content", props.a == "aa" ? "salam" : "lola"].join(" ")} >{props.a}</div>
// //     )
// // }
