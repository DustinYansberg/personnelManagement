package com.pmt.models;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "office")
public class Office {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "office_id")
    private int officeId;

    @Column(name = "office_name")
    private String name;

    @Column(name = "max_capacity")
    private int capacity;

    @OneToMany(mappedBy = "office", fetch = FetchType.EAGER)
    @JsonIgnoreProperties("office")
    private List<Employee> employees;

    public Office() {
	super();
    }

    public Office(int officeId, String name, int capacity, List<Employee> employees) {
	super();
	this.officeId = officeId;
	this.name = name;
	this.capacity = capacity;
	this.employees = employees;
    }

    public int getOfficeId() {
	return officeId;
    }

    public void setOfficeId(int officeId) {
	this.officeId = officeId;
    }

    public String getName() {
	return name;
    }

    public void setName(String name) {
	this.name = name;
    }

    public int getCapacity() {
	return capacity;
    }

    public void setCapacity(int capacity) {
	this.capacity = capacity;
    }

    public List<Employee> getEmployees() {
	return employees;
    }

    public void setEmployees(List<Employee> employees) {
	this.employees = employees;
    }

    @Override
    public String toString() {
	return "Office [officeId=" + officeId + ", name=" + name + ", capacity=" + capacity + ", employees=" + employees
		+ "]";
    }

}
