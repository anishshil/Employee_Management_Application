import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import employeeService from "../services/employee-service";

const AddEmployee = () => {

    const [empName, setEmpName] = useState('')
    const [jobTitle, setJobTitle] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const navigate = useNavigate()
    const { id } = useParams()

    const saveEmployee = (e) => {
        e.preventDefault();

        const employee = { id, empName, jobTitle, email, phone };

        if (id) {
            // update the employee record
            employeeService.update(employee).then(response => {
                console.log('Updated employee', response.data);
                navigate('/');
            }).catch(error => {
                console.log('An error occurred', error);
            })

        } else {
            // create new employee record
            employeeService.create(employee).then(response => {
                console.log('Created employee', response.data);
                navigate('/');
            }).catch(error => {
                console.log('An error occurred', error);
            })
        }
    }

    useEffect(() => {
        if (id) {
            // get details of the employee with the given id
            employeeService.get(id).then(response => {
                setEmpName(response.data.empName)
                setJobTitle(response.data.jobTitle)
                setEmail(response.data.email)
                setPhone(response.data.phone)
            }).catch(error => {
                console.log('An error occurred', error);
            })
        }
    }, [])

    const EmployeeHeader = () => {
        if (id) {
            return <h3>Update Employee</h3>;
        } else {
            return <h3>Add New Employee</h3>;
        }
    }

    return (
        <div className="container mt-2">
            <EmployeeHeader />
            <hr />
            <form>
                <div className="form-group">
                    <input type="text" className="form-control col-4" id="name"
                        value={empName} onChange={(e) => setEmpName(e.target.value)}
                        placeholder="Enter Name" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control col-4" id="jobTitle"
                        value={jobTitle} onChange={(e) => setJobTitle(e.target.value)}
                        placeholder="Enter Job Title" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control col-4" id="email"
                        value={email} onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Email" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control col-4" id="phone"
                        value={phone} onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter Phone" />
                </div>
                <div>
                    <button className="btn btn-primary"
                        onClick={(e) => saveEmployee(e)}>Save</button>
                </div>
            </form>
            <hr />
            <Link to='/'>Back to Employee List</Link>
        </div>
    );
}

export default AddEmployee;