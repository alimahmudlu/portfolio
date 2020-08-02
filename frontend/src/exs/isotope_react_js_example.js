// import React, {useState, useEffect} from 'react';
// import Isotope from "isotope-layout"
//
// function Portfolio()  {
//     const [isotope, setIsotope] = useState(null);
//     const [filterKey, setFilterKey] = useState("*");
//
//     useEffect(() => {
//         setIsotope(
//             new Isotope(".filter-container", {
//                 itemSelector: ".filter-item",
//                 layoutMode: "fitRows"
//             })
//         );
//     }, []);
//
//     React.useEffect(
//         () => {
//             if (isotope) {
//                 filterKey === "*"
//                     ? isotope.arrange({ filter: `*` })
//                     : isotope.arrange({ filter: `.${filterKey}` });
//             }
//         },
//         [isotope, filterKey]
//     );
//
//     return (
//         <>
//             <ul>
//                 <li onClick={() => setFilterKey("*")}>Show Both</li>
//                 <li onClick={() => setFilterKey("vege")}>Show Veges</li>
//                 <li onClick={() => setFilterKey("fruit")}>Show Fruits</li>
//             </ul>
//             <ul className="filter-container">
//                 <div className="filter-item vege">
//                     <span>Cucumber</span>
//                 </div>
//                 <div className="filter-item fruit">
//                     <span>Apple</span>
//                 </div>
//                 <div className="filter-item fruit">
//                     <span>Orange</span>
//                 </div>
//                 <div className="filter-item fruit vege">
//                     <span>Tomato</span>
//                 </div>
//             </ul>
//         </>
//     );
// }
// export default Portfolio;
