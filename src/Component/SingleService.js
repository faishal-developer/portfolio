// import React from 'react';
// import { useParams } from 'react-router';
// import data from './portfolioData';

// const SingleService = () => {
//     const { serviceId } = useParams()

//     const findData = data.find( ( v ) => v.id == serviceId )
//     console.log( findData );
//     return (
//         <div className="container">
//             <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
//                 <div className="col">
//                     <img className="w-50" src={findData.image} alt="data" />
//                 </div>
//                 <div className="col">
//                     <img className="w-50" src={findData.image1} alt="data" />
//                 </div>
//                 <div className="col">
//                     <img className="w-50" src={findData.image2} alt="data" />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SingleService;