import React from "react";
import Table from "react-bootstrap/Table";
import "./Week2.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from 'react';

function ComponentWithoutJSX() {
  return (
    <div>
        <h4 style={{color:'red'}}> <b> <u> Q1</u></b> </h4>
      <h3>Displaying of Component without using JSX</h3>
      <p>This is the component without using JSX</p>
    </div>
  );
}
function ComponentWithJSX() {
  //let asl = React.createElement(
  //  "h3",
   // null,
  //  "Displaying Components using JSX"
 // );
 // return <div>{asl}</div>;
 return(
    <div>
    <h4 style={{color:'red'}}> <b> <u> Q2 </u></b></h4>
  <h3>Displaying Components by using JSX</h3>
  <h6> <b> <u> Example-1 : Basic attribute syntax </u></b></h6>
  <h2 style={{ color:'green'}}>Department of CSE</h2>
  </div>
  );
}
function Exampletwo() {
    return(
      <div>
      <h6> <b> <u> Example-2 : Expressions </u></b></h6>
      <h2 style={{color:'blue'}}> Hello,I'm Praharsha.</h2>
      <p>I am Praharsha from Group 8D accomplishing Week2 Assignment.</p>
      </div>
    
    )
    }
    function Examplethree() {
        const [currentTime, setCurrentTime] = useState('');
      
        useEffect(() => {
          const interval = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString([], {hour12: false}));
          }, 1000);
      
          return () => clearInterval(interval);
        }, []);
      
        return (
          <div className="container">
            <h6><b><u>Example-3: Functions</u></b></h6>
            <h4>The current time in 24hrs format is:</h4>
            <p className="font-weight-bold">{currentTime} ( GMT=0530 (IST))</p>
          </div>
        );
        }
        function ExampleFour() {
            // Define isLoggedIn variable outside of JSX
            const isLoggedIn = true;
          
            return (
              <div>
                <h6><b><u>Example-4: Conditional Rendering</u></b></h6>
                {/* <h2 style={{color:'blue'}}> Hello I'm Sanyu</h2> */}
                {/* <p>You are eligible for doing Mern stack developments</p> */}
                {/* Render content conditionally based on isLoggedIn variable */}
                <h2>{isLoggedIn ? 'Please sign up.' : 'Please log in...'}</h2>
              </div>
            );
          }
          function ExampleFive() {
            // Define a JSX fragment
            const element = (
              <>
                <h1>Heading 2</h1>
                <p>Paragraph 2</p>
              </>
            );
          
            return (
              <div>
                <h6><b><u>Example-5: Fragments</u></b></h6>
                {/* Render the JSX fragment */}
                {element}
              </div>
            );
          }
          function ExampleSix() {
            return (
              <div>
                <h6><b><u>Example-6: Nested Elements</u></b></h6>
                <h1>My First Heading</h1>
                <h2>My First Heading</h2>
                <p>Welcome to MERN Stack Classes and Assignments</p>
              </div>
            );
          }
          function ExampleSeven(){
            return(
            <div> 
              <h6><b><u>Example-7: Basic HTML tags</u></b></h6>
              <h5>This is a h5 tag</h5>
              <p><b> This is a 'b' tag</b></p>
            </div>
            );
          }

function StudentInfo() {
  const studentDetails = [
    {
      sid: "2211CS010459",
      sname: "Charan Sai",
      gender: "Male",
      group: "G-8(D)",
    },
    {
      sid: "2211CS010462",
      sname: "Praharsha",
      gender: "Male",
      group: "G-8(D)",
    },

    {
      sid: "2211CS010463",
      sname: "Manideep",
      gender: "Male",
      group: "G-1",
    },
    {
      sid: "2211CS010464",
      sname: "Anirudh",
      gender: "Male",
      group: "G-1",
    },
  ];
  return (
    <div class="center">
      <h3 style={{color:'red'}}> <b> <u> Q3</u></b></h3>
      <h3><u>Displaying Using Function Component</u></h3>
      <h3 style={{color:'green'}}>Student Details </h3>
      <Table striped bordered hover variant="warning">
        <thead>
          <tr>
            <th>Student id</th>
            <th>Student name</th>
            <th>Gender</th>
            <th>Group</th>
          </tr>
        </thead>
        <tbody>
          {studentDetails.map((student, index) => (
            <tr data-index={index}>
              <td>{student.sid}</td>
              <td>{student.sname}</td>
              <td>{student.gender}</td>
              <td>{student.group}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
function myname(){
    return(
      <div>
  
        <h1 id="unin"> Malla Reddy University </h1>
        
        <h2> style={{color:'red'}} Department of CSE </h2>
        
        <p>Welcome to MERN Stack Classes!!!!!</p>
        
        </div>
    )
  }
  
class EmpDetails extends React.Component {
  render() {
    const employeeDetails = [
      {
        ename: "Prabhakar",
        ds: "Designer",
        gender: "Male",
        company: "Google",
      },
      {
        ename: "Prajit",
        ds: "Front-end Developer",
        gender: "Male",
        company: "Twitter",
      },
      {
        ename: "Sai Nikhil",
        ds: "Designer",
        gender: "Male",
        company: "Microsoft",
      },
      {
        ename: "Shailaja",
        ds: "Back-end Developer",
        gender: "Female",
        company: "Netflix",
      },
    ];
    return (
      <div class="text-center center">
        <h3 style={{color:'red'}}> <b> <u> Q4 </u></b></h3>
        <h3><u>Displaying using Class Component</u></h3>
        <h3 style={{color:'green'}}>Employee Details </h3>
        <Table striped bordered hover variant="warning">
          <thead>
            <tr>
              <th>Name of the Employee</th>
              <th>Designation </th>
              <th>Gender</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {employeeDetails.map((emp, index) => (
              <tr data-index={index}>
                <td>{emp.ename}</td>
                <td>{emp.ds}</td>
                <td>{emp.gender}</td>
                <td>{emp.company}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
export default function Week2() {
  return (
    <div>
    <h2 style={{ color:'green'}}> WEEK-2 Create React App with Components</h2>
    <hr />
    <ComponentWithoutJSX />
    <hr />
    <ComponentWithJSX />
    <hr />
    <Exampletwo/>
     <hr/> 
     <Examplethree/>
     <hr/>
     <ExampleFour/>
     <hr/>
     <ExampleFive/>
     <hr/>
     <ExampleSix/>
     <hr/>
     <ExampleSeven/>
     <hr/>
    <StudentInfo />
    <hr />
    <EmpDetails />
    <hr>
    </hr>
    
</div>
  );
}
