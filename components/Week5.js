import React, { useState, useEffect } from 'react';
import './Week5.css';
// import EmployeeImage from './images/1869679.png';

const Week5 = () => {
  const [students, setStudents] = useState([]);
  // const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await fetch(
          'https://praharshap.github.io/excel-students-data_462/New%20Microsoft%20Excel%20Worksheet.json'
        );
        const data = await response.json();
        setStudents(data.slice(0, 5)); // Limit to 5 students
      } catch (error) {
        console.error('Error fetching student data:', error);
      }
    };

    // const fetchEmployeeData = async () => {
    //   try {
    //     const response = await fetch(
    //       'https://praharshap.github.io/excel-students-data_462/eeeellll%20[MConverter.eu].json'
    //     );
    //     const data = await response.json();
    //     setEmployees(data.slice(1,6)); // Limit to 5 employees
    //   } catch (error) {
    //     console.error('Error fetching employee data:', error);
    //   }
    // };

    fetchStudentData();
    // fetchEmployeeData();
  }, []);

  return (
    <div className='week_5'>
      <h1>Week-5: Creating a React Component and displaying the Student info using Bootstrap Card Layout</h1>
      
      <div className="cont_1">
        <h2>Student List - Bootstrap Card</h2>
        <div className="card-container">
          {students.map((student, index) => (
            <div className="card" key={index}>
              <div className="card-body">
                
                <h5 className="card-title"><b>{student.Name}</b></h5>
                <p className="card-text"><b>Roll No:</b> <b>{student["Roll.No"]}</b></p>
                <p className="card-text"><b>Email:</b> <b>{student["Email"]}</b></p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr></hr>

      {/* <h1>Exercise: Creating a React Component and displaying Employees info using Bootstrap Card Layout</h1>
      <div className="cont_2">
        <h2>Employee List - Bootstrap Card</h2>
        <div className="card-container">
          
          {employees.map((employee, index) => (
            <div className="card" key={index}>
              <div className="card-body">
                <div className="image-container">
                  <img
                    src={EmployeeImage}
                    className="card-img-top"
                    alt={`Employee ${index + 1}`}
                    style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '10px', border: '2px solid #ccc' }}
                  />
                </div>
                <h5 className="card-title"><b>{employee.name}</b></h5>
                <p className="card-text"><b>EmpID:</b> {employee.EmpID}</p>
                <p className="card-text"><b>Designation:</b> {employee.Designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Week5;
