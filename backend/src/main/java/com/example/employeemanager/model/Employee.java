package com.example.employeemanager.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Employee implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long id;
    private String empName;
    private String email;
    private String jobTitle;
    private String phone;
    private String imageUrl;
    @Column(nullable = false, updatable = false)
    private String empCode;

    public Employee() {
    }

    public Employee(String empName, String email, String jobTitle, String phone, String imageUrl, String empCode) {
        this.empName = empName;
        this.email = email;
        this.jobTitle = jobTitle;
        this.phone = phone;
        this.imageUrl = imageUrl;
        this.empCode = empCode;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmpName() {
        return empName;
    }

    public void setEmpName(String empName) {
        this.empName = empName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getEmpCode() {
        return empCode;
    }

    public void setEmpCode(String empCode) {
        this.empCode = empCode;
    }

    @Override
    public String toString() {
        return "Employee {" + "id=" + id + ", name='" + empName + "'" + ", email='" + email +
                ", jobTitle='" + jobTitle + ", phone='" + phone + ", imageUrl='" + imageUrl + "'" + "}";
    }
}
