import React from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Week3.css";

const PropsComponent = (props) => {
  return (
    <div>
      <div>
        <div className="container-1">
          <h2 className="text-success">
            Hello,
            <span style={{ color: "blue" }}>{props.name}</span>
          </h2>
          <h2 className="text-success">
            Your Hall-ticket No. is :
            <span style={{ color: "blue" }}>{props.hallticket}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

const PropComponent = (props) => {
  const studentDetails = [
    {
      sid: "2211CS010462",
      sname: "Praharsha",
      email: "2211cs010462@mallareddyuniversity.ac.in",
    },
    {
      sid: "2211CS010463",
      sname: "Prajit",
      email: "2211cs010463@mallareddyuniversity.ac.in",
    },

    {
      sid: "2211CS010464",
      sname: "SaiNikhil",
      email: "2211cs010464@mallareddyuniversity.ac.in",
    },
    {
      sid: "2211CS010465",
      sname: "SaiNeeraj",
      email: "2211cs010465@mallareddyuniversity.ac.in",
    },
  ];
  return (
    <div>
      <div className="container-2">
        <div class="center">
          <h3>Displaying Using Function Component</h3>
          <h3>Student Details </h3>
          <Table bordered hover variant="warning">
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Student Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {studentDetails.map((student, index) => (
                <tr data-index={index}>
                  <td>{student.sid}</td>
                  <td>{student.sname}</td>
                  <td>{student.email}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};
{
 
}

class PropsClass extends React.Component {
  render() {
    const employeeDetails = [
      {
        eid: "1000",
        ename: "Prabhakar",
        ds: " Government Health Supervisor",
      },
      {
        eid: "1001",
        ename: "Madhukar",
        ds: "Doctor",
      },
      {
        eid: "1002",
        ename: "Sudhakar",
        ds: "Manager",
      },
      {
        eid: "1003",
        ename: "Bhaskar",
        ds: "Photographer",
      },
    ];
    return (
      <div>
        <div className="container-3">
          <div class="text-center center">
            <h3>Displaying using Class Component</h3>
            <h3>Employee Details </h3>
            <Table bordered hover variant="warning">
              <thead>
                <tr>
                  <th>Employee ID</th>
                  <th>Employee Name</th>
                  <th>Designation </th>
                </tr>
              </thead>
              <tbody>
                {employeeDetails.map((emp, index) => (
                  <tr data-index={index}>
                    <td>{emp.eid}</td>
                    <td>{emp.ename}</td>
                    <td>{emp.ds}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}
{
  
}
const StudentComponent = (props) => {
  console.log(props);
  const { student } = props;
  return (
    <div>
      <div className="container-4">
        <table className="table table-warning">
          <tbody>
            <tr>
              <td>Roll No.:</td>
              <td>{student.RollNo}</td>
            </tr>
            <tr>
              <td>Name:</td>
              <td>{student.Name}</td>
            </tr>
            <tr>
              <td>Mobile:</td>
              <td>{student.Mobile}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{student.Email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default function Week3() {
  const student = {
    RollNo: "2211CS010462",
    Name: "Praharsha",
    Mobile: "1234567890",
    Email: "2211cs010462@mallareddyuniversity.ac.in",
  };
  return (
    <div>
      <h1>Week 3: Create React App and Demonstrate Props</h1>
      <div class="container-1">
        <h1 style={{color:'red'}}>Question 1</h1>
        <h2>
          <b><u>Component based on props</u></b>
        </h2>
        <h3>Rendering single attribute using props</h3>
        <PropsComponent name="Praharsha" />
        <h3>Rendering multiple attributes using props</h3>
        <PropsComponent name="Praharsha" hallticket="2211CS010462" />
      </div>
      <hr></hr>
      <div class="container-2">
        <h1 style={{color:'red'}}>Question 2</h1>
        <h2>
          <b><u>Function based props</u></b>
        </h2>
        <PropComponent
          ID="2211CS010462"
          name="P Praharsha"
          email="2211cs010462@mallareddyuniversity.ac.in"
        />
      </div>
      <hr></hr>
      <div class="container-3">
        <h1 style={{color:'red'}}>Question 3</h1>
        <h2>
          <b><u>Class based props</u></b>
        </h2>
        <PropsClass eid="" ename="" edesig="" />
      </div>
      <hr></hr>
      <div class="container-4">
        <h1 style={{color:'red'}}>Question 4</h1>
        <h2>
          <b><u>Object destructing through props</u></b>
        </h2>
        <StudentComponent student={student} />
      </div>
    </div>
  );
}