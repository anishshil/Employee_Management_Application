import React, { useEffect, useState } from 'react';
import employeeService from '../services/employee-service';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

const EmployeesList = () => {

    const [employees, setEmployees] = useState([]);
    const [currentEmployee, setCurrentEmployee] = useState({});

    useEffect(() => {
        init();
    }, [])

    const init = () => {
        employeeService.getAll().then(response => {
            console.log('Employee data: ', response.data);
            setEmployees(response.data);
        }).catch(error => {
            console.log('An unexpected error occurred: ', error);
        })
    }

    const handleDelete = (id) => {
        employeeService.remove(id).then(response => {
            console.log('Deleted employee with id', id);
            //close dialog
            handleClose();
            //re-populate employee list
            init();
        }).catch(error => {
            console.log('An unexpected error occurred: ', error);
        })
    }

    const [show, setShow] = useState(false)

    const handleClose = () => {
        setShow(false);
    }

    const handleShow = (employee) => {
        setShow(true);
        setCurrentEmployee(employee);
    }

    return (
        <div className='container mt-2'>
            <h3>Employee List</h3>
            <hr />
            <div>
                <Link to='/add' className='btn btn-primary mb-3'>Add Employee</Link>
                <table className='table table-bordered table-striped'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>Name</th>
                            <th>Job Title</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map(employee => (
                                <tr key={employee.id}>
                                    <td>{employee.empName}</td>
                                    <td>{employee.jobTitle}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.phone}</td>
                                    <td>
                                        <Link className='btn btn-info' to={`/employee/edit/${employee.id}`}>Update</Link>
                                        <button className='btn btn-danger ml-2' onClick={(e) => {
                                            handleShow(employee)
                                        }}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                        <Modal.Title>Confirm Delete Employee</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Are you sure you want to delete the employee {currentEmployee.empName}?
                    </Modal.Body>
                    <Modal.Footer>
                        <button className='btn btn-primary' onClick={(e) => {
                            handleDelete(currentEmployee.id)
                        }}>Delete</button>
                        <button className='btn btn-secondary' onClick={handleClose}>Cancel</button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

export default EmployeesList;