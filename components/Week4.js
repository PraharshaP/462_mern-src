import React, { useState, useEffect } from "react";
import "./Week4.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
function UseStateExample() {
  const name = null;
  const rno = null;
  const [details, setDetails] = useState(
    <div>
      <b><h3 style={{color:'blue'}}>Name: {name}</h3></b>
      <h3 style={{color:'blue'}}>Roll No: {rno}</h3>
    </div>
  );
  const getDetails = () => {
    const name = "Praharsha";
    const rno = "2211CS010462";
    setDetails(
      <div>
        <h3 style={{color:'green'}}>Name: {name}</h3>
        <h3 style={{color:'green'}}>Roll No: {rno}</h3>
      </div>
    );
  };
  return (
    <div className="">
      <h2 style={{color:'red'}}>
        1. Create a React Component, Display initial State of Student
        Hall-ticket and Name and change its State by using useState().
      </h2>
      <h2 style={{ textDecorationLine: "underline" }}>Use State Example</h2>
      <div className="">
        <h3>{details}</h3>

        <button onClick={getDetails}>Click to get Details</button>
      </div>
    </div>
  );
}
function UseEffectExample() {
  const headings = ["SNO", "Name of the student", "Roll No", "Email ID"];
  const [Details, setDetails] = useState([]);
  useEffect(() => {
    const fetchStudentDetails = async () => {
      const response = await fetch(
        "https://sindhuravuri666.github.io/StudentList/StudentList.json"
      );

      const data = await response.json();

      console.log(data);

      setDetails(data);
    };

    fetchStudentDetails();
  }, []);
  const [details, sliceDetails] = useState();
  return (
    <div className="">
        <hr></hr>
      <h2 style={{color:'red'}}>
    
        2. Create a React Component, Display student Hall-ticket, Name and
        Email-Id using useEffect() fetch student info from student.json.
      </h2>

      <h2 style={{ textDecorationLine: "underline" }}>
        Use effect example by fetching data from student.json
      </h2>
      <div>
        <Table striped bordered hover variant="warning">
          <thead><tr>
            {headings.map((h, index) => (
              
                
                <th key={h}>{h}</th>
              
            ))}</tr>
          </thead>
          <tbody>
            {Details.slice(12, 17).map((student, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{student.Name}</td>
                <td>{student.RollNo}</td>
                <td>{student.EmailID}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
function Week4() {
  return (
    <div className="">
      <h2>
        <b>Week 4 - Create React App and Implement API Calls using React Hooks</b>
      </h2>
      <hr />
      <UseStateExample />
      <br />
      <UseEffectExample />
    </div>
  );
}
export default Week4;