import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddRecord = () => {
    const [record, setRecord] = useState({
        name: '',
        date: '',
        task: '',
        completed: '',
        remark: '',
        salary: ''
    })
const navigate = useNavigate()

const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3000/auth/add_record', record)
    .then(result => {
        if (result.data.Status) {
            navigate('/dashboard/profile')
          } else {
            alert(result.data.Error);
          }
        })
    .catch(err => console.log(err))
}

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Employee Record</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="inputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputName"
              placeholder="Enter Name"
              onChange={(e) => setRecord({...record, name: e.target.value})}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputDate" className="form-label">
              Date
            </label>
            <input
              type="date"
              className="form-control rounded-0"
              id="inputDate"
              onChange={(e) => setRecord({...record, date: e.target.value})}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputText" className="form-label">
              Task
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputText"
              placeholder="Type..."
              onChange={(e) => setRecord({...record, task: e.target.value})}
            />
          </div>
          <div>
            <label htmlFor="inputText1" className="form-label">
              Completed
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputText1"
              placeholder="Type..."
              onChange={(e) => setRecord({...record, completed: e.target.value})}
              />
          </div>
          <div className="col-12">
            <label htmlFor="inputRemark" className="form-label">
              Remark
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputRemark"
              placeholder="Type..."
              onChange={(e) => setRecord({...record, remark: e.target.value})}
            />
            <label htmlFor="inputSalary" className="form-label">
              Salary
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputSalary"
              placeholder="Enter Salary"
              autoComplete="off"
              onChange={(e) => setRecord({...record, salary: e.target.value})}
            />
          </div>
          <button className="btn btn-success w-100 rounded-0 mb-2">
            Add Record
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecord;
