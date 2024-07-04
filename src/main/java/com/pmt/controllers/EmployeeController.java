package com.pmt.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pmt.models.Employee;
import com.pmt.services.EmployeeService;

@RestController
@RequestMapping("/employee")
@CrossOrigin(origins = "*")
public class EmployeeController {

    @Autowired
    private EmployeeService service;

    // get all
    @GetMapping
    public Iterable<Employee> getAllEmployees() {
	return service.getAllEmployees();
    }

    // get by id
    @GetMapping("/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable int id) {
	return service.getEmployeeById(id);
    }

    // create
    @PostMapping
    public ResponseEntity<Employee> createEmployee(@RequestBody Employee employee) {
	return service.createEmployee(employee);
    }

    // update by id
    @PutMapping("/{id}")
    public ResponseEntity<Employee> updateById(@PathVariable int id, Employee employee) {
	return service.updateEmployee(id, employee);
    }

    // delete by id
    @DeleteMapping("/{id}")
    public ResponseEntity<Employee> deleteById(@PathVariable int id) {
	return service.deleteEmployee(id);
    }

}
