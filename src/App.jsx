/** @format */

// /** @format */

// // /** @format */

// // // /** @format */

// // // // /** @format */

// // // // // /** @format */

// // // // // // /** @format */

// // // // // // // /** @format */

// // // // // // // // /** @format */

// // // // // // // // // /** @format */

// // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // // // // // // // // import Login from './Login';
// // // // // // // // // import Signup from './Signup';
// // // // // // // // // import './App.css';
// // // // // // // // // import Ui from './Ui';
// // // // // // // // // import Anas from './Anas';
// // // // // // // // // import Cards from './Cards';
// // // // // // // // // const App = () => {
// // // // // // // // //   const [isLoggedIn, setIsLoggedIn] = useState(
// // // // // // // // //     !!localStorage.getItem('loggedInUser')
// // // // // // // // //   );

// // // // // // // // //   return (
// // // // // // // // //     <Router>
// // // // // // // // //       <Ui />
// // // // // // // // //       {isLoggedIn && <Anas onLogout={() => setIsLoggedIn(false)} />}
// // // // // // // // //       <Routes>
// // // // // // // // //         <Route
// // // // // // // // //           path="/login"
// // // // // // // // //           element={<Login onLogin={() => setIsLoggedIn(true)} />}
// // // // // // // // //         />
// // // // // // // // //         <Route path="/signup" element={<Signup />} />
// // // // // // // // //         <Route
// // // // // // // // //           path="/"
// // // // // // // // //           element={
// // // // // // // // //             isLoggedIn ? (
// // // // // // // // //               <Anas onLogout={() => setIsLoggedIn(false)} />
// // // // // // // // //             ) : (
// // // // // // // // //               <Login onLogin={() => setIsLoggedIn(true)} />
// // // // // // // // //             )
// // // // // // // // //           }
// // // // // // // // //         />
// // // // // // // // //       </Routes>
// // // // // // // // //       <Cards />
// // // // // // // // //     </Router>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default App;
// // // // // // // // /** @format */
// // // // // // // // import React, { useState } from 'react';
// // // // // // // // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // // // // // // // import Login from './Login';
// // // // // // // // import Signup from './Signup';
// // // // // // // // import './App.css';
// // // // // // // // import Ui from './Ui';
// // // // // // // // import Anas from './Anas';
// // // // // // // // import Cards from './Cards';
// // // // // // // // import Samsungglaxysix from './Samsunggalaxsix';
// // // // // // // // const App = () => {
// // // // // // // //   const [isLoggedIn, setIsLoggedIn] = useState(
// // // // // // // //     !!localStorage.getItem('loggedInUser')
// // // // // // // //   );

// // // // // // // //   return (
// // // // // // // //     <Router>
// // // // // // // //       <Ui />
// // // // // // // //       <Routes>
// // // // // // // //         <Route
// // // // // // // //           path="/login"
// // // // // // // //           element={<Login onLogin={() => setIsLoggedIn(true)} />}
// // // // // // // //         />
// // // // // // // //         <Route path="/signup" element={<Signup />} />
// // // // // // // //         <Route
// // // // // // // //           path="/"
// // // // // // // //           element={
// // // // // // // //             isLoggedIn ? (
// // // // // // // //               <Anas onLogout={() => setIsLoggedIn(false)} />
// // // // // // // //             ) : (
// // // // // // // //               <Login onLogin={() => setIsLoggedIn(true)} />
// // // // // // // //             )
// // // // // // // //           }
// // // // // // // //         />
// // // // // // // //         {isLoggedIn && <Route path="/cards" element={<Cards />} />}
// // // // // // // //       </Routes>
// // // // // // // //       <Samsungglaxysix />
// // // // // // // //     </Router>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default App;
// // // // // // // /** @format */
// // // // // // // import React, { useState } from 'react';
// // // // // // // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // // // // // // import Login from './Login';
// // // // // // // import Signup from './Signup';
// // // // // // // import './App.css';
// // // // // // // import Ui from './Ui';
// // // // // // // import Anas from './Anas';
// // // // // // // import Cards from './Cards';
// // // // // // // import Samsungglaxysix from './Samsunggalaxsix';

// // // // // // // const App = () => {
// // // // // // //   const [isLoggedIn, setIsLoggedIn] = useState(
// // // // // // //     !!localStorage.getItem('loggedInUser')
// // // // // // //   );

// // // // // // //   return (
// // // // // // //     <Router>
// // // // // // //       <Ui />
// // // // // // //       <Routes>
// // // // // // //         <Route
// // // // // // //           path="/login"
// // // // // // //           element={<Login onLogin={() => setIsLoggedIn(true)} />}
// // // // // // //         />
// // // // // // //         <Route path="/signup" element={<Signup />} />
// // // // // // //         <Route
// // // // // // //           path="/"
// // // // // // //           element={
// // // // // // //             isLoggedIn ? (
// // // // // // //               <Anas onLogout={() => setIsLoggedIn(false)} />
// // // // // // //             ) : (
// // // // // // //               <Login onLogin={() => setIsLoggedIn(true)} />
// // // // // // //             )
// // // // // // //           }
// // // // // // //         />
// // // // // // //         {isLoggedIn && <Route path="/cards" element={<Cards />} />}
// // // // // // //         {isLoggedIn && (
// // // // // // //           <Route path="/samsungglaxysix" element={<Samsungglaxysix />} />
// // // // // // //         )}
// // // // // // //       </Routes>
// // // // // // //     </Router>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default App;
// // // // // // /** @format */
// // // // // // import React, { useState } from 'react';
// // // // // // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // // // // // import Login from './Login';
// // // // // // import Signup from './Signup';
// // // // // // import './App.css';
// // // // // // import Ui from './Ui';
// // // // // // import Anas from './Anas';
// // // // // // import Cards from './Cards';
// // // // // // import Samsungglaxysix from './Samsungglaxysix';

// // // // // // const App = () => {
// // // // // //   const [isLoggedIn, setIsLoggedIn] = useState(
// // // // // //     !!localStorage.getItem('loggedInUser')
// // // // // //   );

// // // // // //   return (
// // // // // //     <Router>
// // // // // //       <Ui />
// // // // // //       <Routes>
// // // // // //         <Route
// // // // // //           path="/login"
// // // // // //           element={<Login onLogin={() => setIsLoggedIn(true)} />}
// // // // // //         />
// // // // // //         <Route path="/signup" element={<Signup />} />
// // // // // //         <Route
// // // // // //           path="/"
// // // // // //           element={
// // // // // //             isLoggedIn ? (
// // // // // //               <Anas onLogout={() => setIsLoggedIn(false)} />
// // // // // //             ) : (
// // // // // //               <Login onLogin={() => setIsLoggedIn(true)} />
// // // // // //             )
// // // // // //           }
// // // // // //         />
// // // // // //         {isLoggedIn && <Route path="/cards" element={<Cards />} />}
// // // // // //         {isLoggedIn && (
// // // // // //           <Route path="/samsungglaxysix" element={<Samsungglaxysix />} />
// // // // // //         )}
// // // // // //       </Routes>
// // // // // //     </Router>
// // // // // //   );
// // // // // // };

// // // // // // export default App;
// // // // // /** @format */
// // // // // import React, { useState } from 'react';
// // // // // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // // // // import Login from './Login';
// // // // // import Signup from './Signup';
// // // // // import './App.css';
// // // // // import Ui from './Ui';
// // // // // import Anas from './Anas';
// // // // // import Cards from './Cards';
// // // // // import Samsungglaxysix from './Samsunggalaxsix';
// // // // // import Iphonethirteen from './Iphonethirteen';

// // // // // const App = () => {
// // // // //   const [isLoggedIn, setIsLoggedIn] = useState(
// // // // //     !!localStorage.getItem('loggedInUser')
// // // // //   );

// // // // //   return (
// // // // //     <Router>
// // // // //       <Ui />
// // // // //       <Routes>
// // // // //         <Route
// // // // //           path="/login"
// // // // //           element={<Login onLogin={() => setIsLoggedIn(true)} />}
// // // // //         />
// // // // //         <Route path="/signup" element={<Signup />} />
// // // // //         <Route
// // // // //           path="/"
// // // // //           element={
// // // // //             isLoggedIn ? (
// // // // //               <Anas onLogout={() => setIsLoggedIn(false)} />
// // // // //             ) : (
// // // // //               <Login onLogin={() => setIsLoggedIn(true)} />
// // // // //             )
// // // // //           }
// // // // //         />
// // // // //         {isLoggedIn && <Route path="/cards" element={<Cards />} />}
// // // // //         {isLoggedIn && (
// // // // //           <>
// // // // //             <Route path="/samsungglaxysix" element={<Samsungglaxysix />} />
// // // // //             <Route path="/iphonethirteen" element={<Iphonethirteen />} />
// // // // //           </>
// // // // //         )}
// // // // //       </Routes>
// // // // //     </Router>
// // // // //   );
// // // // // };

// // // // // export default App;
// // // // /** @format */
// // // // import React, { useState } from 'react';
// // // // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // // // import Login from './Login';
// // // // import Signup from './Signup';
// // // // import './App.css';
// // // // import Ui from './Ui';
// // // // import Anas from './Anas';
// // // // import Cards from './Cards';
// // // // import Samsungglaxysix from './Samsunggalaxsix';
// // // // import Iphonethirteen from './Iphonethirteen';
// // // // import Samsungsixty from './Samsungsixty';

// // // // const App = () => {
// // // //   const [isLoggedIn, setIsLoggedIn] = useState(
// // // //     !!localStorage.getItem('loggedInUser')
// // // //   );

// // // //   return (
// // // //     <Router>
// // // //       <Ui />
// // // //       <Routes>
// // // //         <Route
// // // //           path="/login"
// // // //           element={<Login onLogin={() => setIsLoggedIn(true)} />}
// // // //         />
// // // //         <Route path="/signup" element={<Signup />} />
// // // //         <Route
// // // //           path="/"
// // // //           element={
// // // //             isLoggedIn ? (
// // // //               <Anas onLogout={() => setIsLoggedIn(false)} />
// // // //             ) : (
// // // //               <Login onLogin={() => setIsLoggedIn(true)} />
// // // //             )
// // // //           }
// // // //         />
// // // //         {isLoggedIn && <Route path="/cards" element={<Cards />} />}
// // // //         {isLoggedIn && (
// // // //           <>
// // // //             <Route path="/samsungglaxysix" element={<Samsungglaxysix />} />
// // // //             <Route path="/iphonethirteen" element={<Iphonethirteen />} />
// // // //             <Route path="/samsungsixty" element={<Samsungsixty />} />
// // // //           </>
// // // //         )}
// // // //       </Routes>
// // // //     </Router>
// // // //   );
// // // // };

// // // // export default App;
// // // /** @format */
// // // import React, { useState } from 'react';
// // // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // // import Login from './Login';
// // // import Signup from './Signup';
// // // import './App.css';
// // // import Ui from './Ui';
// // // import Anas from './Anas';
// // // import Cards from './Cards';
// // // import Samsungglaxysix from './Samsunggalaxsix';
// // // import Iphonethirteen from './Iphonethirteen';
// // // import Samsungsixty from './Samsungsixty';
// // // import Motrolla from './Motrolla';
// // // import Iphonepromax from './Iphonepromax';

// // // const App = () => {
// // //   const [isLoggedIn, setIsLoggedIn] = useState(
// // //     !!localStorage.getItem('loggedInUser')
// // //   );

// // //   return (
// // //     <Router>
// // //       <Ui />
// // //       <Routes>
// // //         <Route
// // //           path="/login"
// // //           element={<Login onLogin={() => setIsLoggedIn(true)} />}
// // //         />
// // //         <Route path="/signup" element={<Signup />} />
// // //         <Route
// // //           path="/"
// // //           element={
// // //             isLoggedIn ? (
// // //               <Anas onLogout={() => setIsLoggedIn(false)} />
// // //             ) : (
// // //               <Login onLogin={() => setIsLoggedIn(true)} />
// // //             )
// // //           }
// // //         />
// // //         {isLoggedIn && <Route path="/cards" element={<Cards />} />}
// // //         {isLoggedIn && (
// // //           <>
// // //             <Route path="/samsungglaxysix" element={<Samsungglaxysix />} />
// // //             <Route path="/iphonethirteen" element={<Iphonethirteen />} />
// // //             <Route path="/samsungsixty" element={<Samsungsixty />} />
// // //             <Route path="/motrolla" element={<Motrolla />} />
// // //             <Route path="/iphonepromax" element={<Iphonepromax />} />
// // //           </>
// // //         )}
// // //       </Routes>
// // //     </Router>
// // //   );
// // // };

// // // export default App;
// // /** @format */
// // import React, { useState } from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import Login from './Login';
// // import Signup from './Signup';
// // import './App.css';
// // import Ui from './Ui';
// // import Anas from './Anas';
// // import Cards from './Cards';
// // import Samsungglaxysix from './Samsunggalaxsix';
// // import Iphonethirteen from './Iphonethirteen';
// // import Samsungsixty from './Samsungsixty';
// // import Motrolla from './Motrolla';
// // import Iphonepromax from './Iphonepromax';

// // const App = () => {
// //   const [isLoggedIn, setIsLoggedIn] = useState(
// //     !!localStorage.getItem('loggedInUser')
// //   );

// //   return (
// //     <Router>
// //       <Ui />
// //       <Routes>
// //         <Route
// //           path="/login"
// //           element={<Login onLogin={() => setIsLoggedIn(true)} />}
// //         />
// //         <Route path="/signup" element={<Signup />} />
// //         <Route
// //           path="/"
// //           element={
// //             isLoggedIn ? (
// //               <Anas onLogout={() => setIsLoggedIn(false)} />
// //             ) : (
// //               <Login onLogin={() => setIsLoggedIn(true)} />
// //             )
// //           }
// //         />
// //         {isLoggedIn && <Route path="/cards" element={<Cards />} />}
// //         {isLoggedIn && (
// //           <>
// //             <Route path="/samsungglaxysix" element={<Samsungglaxysix />} />
// //             <Route path="/iphonethirteen" element={<Iphonethirteen />} />
// //             <Route path="/samsungsixty" element={<Samsungsixty />} />
// //             <Route path="/motrolla" element={<Motrolla />} />
// //             <Route path="/iphonepromax" element={<Iphonepromax />} />
// //           </>
// //         )}
// //       </Routes>
// //     </Router>
// //   );
// // };

// // export default App;
// /** @format */
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './Login';
// import Signup from './Signup';
// import './App.css';
// import Ui from './Ui';
// import Anas from './Anas';
// import Cards from './Cards';
// import Samsungglaxysix from './Samsunggalaxsix';
// import Iphonethirteen from './Iphonethirteen';
// import Samsungsixty from './Samsungsixty';
// import Motrolla from './Motrolla';
// import Iphonepromax from './Iphonepromax';
// import Htc from './Htc';

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(
//     !!localStorage.getItem('loggedInUser')
//   );

//   return (
//     <Router>
//       <Ui />
//       <Routes>
//         <Route
//           path="/login"
//           element={<Login onLogin={() => setIsLoggedIn(true)} />}
//         />
//         <Route path="/signup" element={<Signup />} />
//         <Route
//           path="/"
//           element={
//             isLoggedIn ? (
//               <Anas onLogout={() => setIsLoggedIn(false)} />
//             ) : (
//               <Login onLogin={() => setIsLoggedIn(true)} />
//             )
//           }
//         />
//         {isLoggedIn && <Route path="/cards" element={<Cards />} />}
//         {isLoggedIn && (
//           <>
//             <Route path="/samsungglaxysix" element={<Samsungglaxysix />} />
//             <Route path="/iphonethirteen" element={<Iphonethirteen />} />
//             <Route path="/samsungsixty" element={<Samsungsixty />} />
//             <Route path="/motrolla" element={<Motrolla />} />
//             <Route path="/iphonepromax" element={<Iphonepromax />} />
//             <Route path="/htc" element={<Htc />} />
//           </>
//         )}
//       </Routes>
//     </Router>
//   );
// };

// export default App;
/** @format */
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import './App.css';
import Ui from './Ui';
import Anas from './Anas';
import Cards from './Cards';
import Samsungglaxysix from './Samsunggalaxsix';
import Iphonethirteen from './Iphonethirteen';
import Samsungsixty from './Samsungsixty';
import Motrolla from './Motrolla';
import Iphonepromax from './Iphonepromax';
import Htc from './Htc';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem('loggedInUser')
  );

  return (
    <Router>
      <Ui />
      <Routes>
        <Route
          path="/login"
          element={<Login onLogin={() => setIsLoggedIn(true)} />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Anas onLogout={() => setIsLoggedIn(false)} />
            ) : (
              <Login onLogin={() => setIsLoggedIn(true)} />
            )
          }
        />
        {isLoggedIn && <Route path="/cards" element={<Cards />} />}
        {isLoggedIn && (
          <>
            <Route path="/samsungglaxysix" element={<Samsungglaxysix />} />
            <Route path="/iphonethirteen" element={<Iphonethirteen />} />
            <Route path="/samsungsixty" element={<Samsungsixty />} />
            <Route path="/motrolla" element={<Motrolla />} />
            <Route path="/iphonepromax" element={<Iphonepromax />} />
            <Route path="/htc" element={<Htc />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
