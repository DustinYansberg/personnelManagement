package com.pmt.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.pmt.models.Employee;
import com.pmt.repositories.EmployeeRepository;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository repo;

    public Iterable<Employee> getAllEmployees() {
	return repo.findAll();
    }

    public ResponseEntity<Employee> getEmployeeById(int id) {
	if (!repo.existsById(id)) {
	    return ResponseEntity.status(HttpStatus.NOT_FOUND).header("Error", "This Employee ID doesn't exist")
		    .body(null);
	}

	return ResponseEntity.status(HttpStatus.OK).body(repo.findById(id).get());
    }

    public Employee createEmployee(Employee employee) {
	return repo.save(employee);
    }
}
