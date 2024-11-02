/** @format */

// /** @format */

// // /** @format */

// // import React from 'react';

// // const Anas = () => {
// //   return (
// //     <div className="parentdiv">
// //       <div className="parentleft">
// //         <div className="mineinfo">
// //           <h4 className="one">
// //             I'm Muhammad Anas Bilal <br></br>
// //             Web Developer
// //           </h4>
// //           <p className="two">
// //             As a dedicated front-end developer, I am passionate about creating
// //             engaging and user-friendly web interfaces.
// //           </p>
// //         </div>
// //         <div className="imgparent"></div>
// //       </div>
// //       <button className="buttontwo">Logout</button>
// //     </div>
// //   );
// // };

// // export default Anas;
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import backgroundImage from '../src/anas.png';
// const Anas = ({ onLogout }) => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('loggedInUser');
//     onLogout(); // Call the callback to update login state
//     navigate('/login'); // Navigate to the login page
//   };

//   return (
//     <div className="parentdiv">
//       <div
//         className="parentleft"
//         style={{ backgroundImage: `url(${backgroundImage})` }}
//       >
//         <div className="mineinfo">
//           <h4 className="one">
//             I'm Muhammad Anas Bilal <br />
//             Web Developer
//           </h4>
//           <p className="two">
//             As a dedicated front-end developer, I am passionate about creating
//             engaging and user-friendly web interfaces.
//           </p>
//         </div>
//         <div className="imgparent"></div>
//       </div>
//       <button className="buttontwo" onClick={handleLogout}>
//         Card Section
//       </button>
//     </div>
//   );
// };

// export default Anas;
/** @format */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../src/anas.png';

const Anas = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    onLogout(); // Call the callback to update login state
    navigate('/login'); // Navigate to the login page
  };

  const goToCards = () => {
    navigate('/cards'); // Navigate to the Cards section
  };

  return (
    <div className="parentdiv">
      <div
        className="parentleft"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="mineinfo">
          <h4 className="one">
            I'm Muhammad Anas Bilal <br />
            Web Developer
          </h4>
          <p className="two">
            As a dedicated front-end developer, I am passionate about creating
            engaging and user-friendly web interfaces.
          </p>
        </div>
        <div className="imgparent"></div>
      </div>
      <button className="buttontwo" onClick={goToCards}>
        Card Section
      </button>
      <button className="buttontwo" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Anas;
