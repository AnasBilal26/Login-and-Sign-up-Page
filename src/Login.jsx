/** @format */

// /** @format */

// // /** @format */

// // const Login = () => {
// //   return (
// //     <div className="login">
// //       <div className="forloginheading">
// //         <h1>Login</h1>
// //       </div>
// //       <div className="foremailandpassword">
// //         <input type="text" placeholder="Email" />
// //         <input type="text" placeholder="Password" />
// //       </div>
// //       <div className="donthaveaccountandandsignupdiv">
// //         <p className="firsp">Don't have account ?</p>
// //         <span className="span">
// //           <p>Signup</p>
// //         </span>
// //       </div>
// //       <div className="buttondiv">
// //         <button>Login</button>
// //       </div>
// //     </div>
// //   );
// // };
// // export default Login;
// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';

// // const Login = () => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const navigate = useNavigate();

// //   const handleLogin = () => {
// //     // Your login logic here

// //     // Navigate to signup page if needed
// //     navigate('/signup');
// //   };

// //   return (
// //     <div className="login">
// //       <div className="forloginheading">
// //         <h1>Login</h1>
// //       </div>
// //       <div className="foremailandpassword">
// //         <input
// //           type="text"
// //           placeholder="Email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //         />
// //         <input
// //           type="password"
// //           placeholder="Password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //         />
// //       </div>
// //       <div className="donthaveaccountandandsignupdiv">
// //         <p className="firsp">Don't have an account?</p>
// //         <span className="span" onClick={() => navigate('/signup')}>
// //           Signup
// //         </span>
// //       </div>
// //       <div className="buttondiv">
// //         <button onClick={handleLogin}>Login</button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;
// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';

// // const Login = () => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const navigate = useNavigate();

// //   const handleLogin = () => {
// //     // Your login logic here

// //     // For demonstration, navigating to signup page on login button click
// //     navigate('/signup');
// //   };

// //   return (
// //     <div className="login">
// //       <div className="forloginheading">
// //         <h1>Login</h1>
// //       </div>
// //       <div className="foremailandpassword">
// //         <input
// //           type="text"
// //           placeholder="Email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //         />
// //         <input
// //           type="password"
// //           placeholder="Password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //         />
// //       </div>
// //       <div className="donthaveaccountandandsignupdiv">
// //         <p className="firsp">Don't have an account?</p>
// //         <span className="span" onClick={() => navigate('/signup')}>
// //           Signup
// //         </span>
// //       </div>
// //       <div className="buttondiv">
// //         <button>Login</button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;
// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';

// // const Login = () => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const navigate = useNavigate();

// //   const handleLogin = () => {
// //     // Regex patterns for validation
// //     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// //     const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Minimum eight characters, at least one letter and one number

// //     // Validate email
// //     if (!emailPattern.test(email)) {
// //       alert('Please enter a valid email address.');
// //       return;
// //     }

// //     // Validate password
// //     if (!passwordPattern.test(password)) {
// //       alert(
// //         'Password must be at least 8 characters long and contain at least one letter and one number.'
// //       );
// //       return;
// //     }

// //     // Your login logic here
// //     alert('You are logging in');

// //     // For demonstration, navigating to signup page on login button click
// //     navigate('/signup');
// //   };

// //   return (
// //     <div className="login">
// //       <div className="forloginheading">
// //         <h1>Login</h1>
// //       </div>
// //       <div className="foremailandpassword">
// //         <input
// //           type="text"
// //           placeholder="Email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //         />
// //         <input
// //           type="password"
// //           placeholder="Password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //         />
// //       </div>
// //       <div className="donthaveaccountandandsignupdiv">
// //         <p className="firsp">Don't have an account?</p>
// //         <span className="span" onClick={() => navigate('/signup')}>
// //           Signup
// //         </span>
// //       </div>
// //       <div className="buttondiv">
// //         <button onClick={handleLogin}>Login</button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(email)) {
//       alert('Please enter a valid email address.');
//       return;
//     }

//     const storedUser = JSON.parse(localStorage.getItem('user'));
//     if (!storedUser) {
//       alert("You don't have an account, first sign up.");
//       return;
//     }

//     if (storedUser.email === email && storedUser.password === password) {
//       alert('Login successful!');
//       navigate('/'); // Navigate to the desired page after successful login
//     } else {
//       alert('Invalid email or password.');
//     }
//   };

//   return (
//     <div className="login">
//       <div className="forloginheading">
//         <h1>Login</h1>
//       </div>
//       <div className="foremailandpassword">
//         <input
//           type="text"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>
//       <div className="donthaveaccountandandsignupdiv">
//         <p className="firsp">Don't have an account?</p>
//         <span className="span" onClick={() => navigate('/signup')}>
//           Signup
//         </span>
//       </div>
//       <div className="buttondiv">
//         <button onClick={handleLogin}>Login</button>
//       </div>
//     </div>
//   );
// };

// export default Login;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(email)) {
//       alert('Please enter a valid email address.');
//       return;
//     }

//     const storedUser = JSON.parse(localStorage.getItem('user'));
//     if (!storedUser) {
//       alert("You don't have an account, please sign up first.");
//       return;
//     }

//     if (storedUser.email === email && storedUser.password === password) {
//       alert('Login successful!');
//       // Storing login data in local storage
//       localStorage.setItem('loggedInUser', JSON.stringify({ email }));
//       navigate('/'); // Navigate to the desired page after successful login
//     } else {
//       alert('Invalid email or password.');
//     }
//   };

//   return (
//     <div className="login">
//       <div className="forloginheading">
//         <h1>Login</h1>
//       </div>
//       <div className="foremailandpassword">
//         <input
//           type="text"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>
//       <div className="donthaveaccountandandsignupdiv">
//         <p className="firsp">Don't have an account?</p>
//         <span className="span" onClick={() => navigate('/signup')}>
//           Signup
//         </span>
//       </div>
//       <div className="buttondiv">
//         <button className="buttonone" onClick={handleLogin}>
//           Login
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (!storedUser) {
      alert("You don't have an account, please sign up first.");
      return;
    }

    if (storedUser.email === email && storedUser.password === password) {
      alert('Login successful!');
      localStorage.setItem('loggedInUser', JSON.stringify({ email }));
      onLogin(); // Call the callback to update login state
      navigate('/'); // Navigate to the desired page after successful login
    } else {
      alert('Invalid email or password.');
    }
  };

  return (
    <div className="login">
      <div className="forloginheading">
        <h1>Login</h1>
      </div>
      <div className="foremailandpassword">
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="donthaveaccountandandsignupdiv">
        <p className="firsp">Don't have an account?</p>
        <span className="span" onClick={() => navigate('/signup')}>
          Signup
        </span>
      </div>
      <div className="buttondiv">
        <button className="buttonone" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
