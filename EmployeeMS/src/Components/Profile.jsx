import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [record, setRecord] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/auth/profile')
    .then(result => {
        if(result.data.Status) {
            setRecord(result.data.Result)
        } else {
            alert(result.data.Error)
        }
    })
    .catch(err => console.log(err))
  }, [])
  
  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        <h3>Employee Record</h3>
      </div>
      <Link to="/dashboard/add_record" className="btn btn-success">
        Add New Record
      </Link>
      <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Task</th>
              <th>Completed</th>
              <th>Remark</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {record.map((r) => (
                <>
                <tr>
                  <td>{r.name}</td>
                  <td>{r.date}</td>
                  <td>{r.task}</td>
                  <td>{r.completed}</td>
                  <td>{r.remark}</td>
                  <td>{r.salary}</td>
                  <td>
                    <button className="btn btn-info btn-sm me-2">Edit</button>
                    <button className="btn btn-warning btn-sm">Delete</button>
                  </td>
                </tr>
                </>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
