/** @format */

// /** @format */

// import React from 'react';

// const Samsungsixty = () => {
//   return (
//     <>
//       <div className="Mobileparent">
//         <div className="samsungleft"></div>
//         <div className="samsungright">
//           <p>
//             The S6 and S6 Edge were unveiled on March 1, 2015, during the
//             Samsung Unpacked press event at MWC Barcelona, and released April
//             10, 2015, marking a counter-utilitarian and fashion-oriented course
//             in the Galaxy S series. The S6 and S6 Edge were unveiled on March 1,
//             2015, during the Samsung Unpacked press event at MWC Barcelona, and
//             released April 10, 2015, marking a counter-utilitarian and
//             fashion-oriented course in the Galaxy S series.
//           </p>
//         </div>
//         <button className="Return" onClick={handleReturn}>
//           Return
//         </button>
//       </div>
//     </>
//   );
// };
// export default Samsungsixty;
/** @format */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Samsungsixtyimageone from './samsungssixty.jfif';
const Samsungsixty = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate('/cards'); // Navigate back to the Cards component
  };

  return (
    <>
      <div className="Mobileparent">
        <div
          className="samsungsixleft"
          style={{ backgroundImage: `url(${Samsungsixtyimageone})` }}
        ></div>
        <div className="samsungright">
          <p>
            The S6 and S6 Edge were unveiled on March 1, 2015, during the
            Samsung Unpacked press event at MWC Barcelona, and released April
            10, 2015, marking a counter-utilitarian and fashion-oriented course
            in the Galaxy S series. The S6 and S6 Edge were unveiled on March 1,
            2015, during the Samsung Unpacked press event at MWC Barcelona, and
            released April 10, 2015, marking a counter-utilitarian and
            fashion-oriented course in the Galaxy S series.
          </p>
        </div>
        <button className="Return" onClick={handleReturn}>
          Return
        </button>
      </div>
    </>
  );
};

export default Samsungsixty;
