import React,{ useState } from 'react';
import './Week6.css';

const Week6 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState('guest');

  const handleToggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  const WelcomeComponent = () => 
    <div className="welcome">
      <h5>This is Welcome Component</h5> 
      <h5> Hello!! You are now loggedin into Welcome Component</h5>
    </div>;
  const LoginComponent = () => <div className="login"></div>;
  const UserTypeComponent = ({ type }) => <div className="user-type">{`User type: ${type}`}</div>;


  let outputComponent;
  switch (userType) {
    case 'admin':
      outputComponent = <div><b><h4>Displaying Admin component</h4></b></div>;
      break;
    case 'user':
      outputComponent = <div><b><h4>Displaying User component</h4></b></div>;
      break;
    case 'default':
      outputComponent = <div><b><h4>Displaying Default component</h4></b></div>;
      break;
    default:
      outputComponent = <div><b><h4>No content available</h4></b></div>;
  };

  // Define the student details
  const students = [
    {
      rollNo: '2211CS010462',
      group: 'G8D',
      name: 'Praharsha',
      subjects: ['Mern Stack', 'DM', 'ADS', 'P&S', 'OOSE', 'COA']
    },
    {
      rollNo: '2211CS010463',
      group: 'G8D',
      name: 'Prajit',
      subjects: ['Mern Stack', 'DM', 'ADS', 'P&S', 'OOSE', 'COA']
    }
  ];

  // StudentDetails component to render student information in cards
  const StudentDetails = () => (
    <div className="student-details">
      {/* <h2>Student Details</h2> */}
      {/* Map through the students array and render each student as a card */}
      {students.map((student, index) => (
        <div key={index} className="student-card">
              <h2><b>{student.name}</b></h2>
          <p><b><h4>Roll No:</h4></b> <b><h3>{student.rollNo}</h3></b></p>
          <p><b><h4>Group:</h4></b> <b><h3>{student.group}</h3></b></p>
          <p><b><h4>Subjects:</h4></b> <b><h3>{student.subjects.join(', ')}</h3></b></p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="parent-container">
      <h3> Week6: Creating a React Component and showing Multiple Components using ConditionalRendering and List</h3>
      <div className="container1">
        <div className="output">
          <h2>Displaying using Ternary Operator:</h2>
          {isLoggedIn ? <WelcomeComponent /> : <LoginComponent />}
          <button onClick={isLoggedIn ? handleLogout : handleToggleLogin}>
            {isLoggedIn ? 'Logout' : 'Login'}
          </button>

          <hr />

          <h2>Displaying using Logical Operator:</h2>
          {isLoggedIn && <div className="user-info">
            <h5>You are now loggedin to the Praharsha's account</h5>
          </div>}

          <hr />

          <h2>Displaying using If-Else Condition:</h2>
          {isLoggedIn && <div>
            <h5>You are now loggedin</h5>
          </div>}

          <hr />
          

          <h2>Displaying using Switch-Case Condition:</h2>
          
          {/* Output based on selected user type */}
          {outputComponent}
          {/* Buttons for Switch-Case Condition */}
          <div>
            <button onClick={() => setUserType('admin')}>Switch Admin</button>
            <button onClick={() => setUserType('user')}>Switch User</button>
            <button onClick={() => setUserType('default')}>Switch Default</button>
          </div>
        </div>
      </div>
      
      {/* Render the StudentDetails component */}
      <hr></hr>
      <h2> Student Details using map() method</h2>
      <div className="cont2">
       
        <StudentDetails />
      </div>
    </div>
  );
};

export default Week6;