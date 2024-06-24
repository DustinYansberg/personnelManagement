package com.pmt.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pmt.models.Office;
import com.pmt.services.OfficeService;

@RestController
@RequestMapping("/office")
@CrossOrigin(origins = "*")
public class OfficeController {

    @Autowired
    private OfficeService service;

    // get all
    @GetMapping
    public Iterable<Office> getAllOffices() {
	return service.getAllOffices();
    }

    // get by id
    @GetMapping("/{id}")
    public ResponseEntity<Office> getOfficeById(@PathVariable int id) {
	return service.getOfficeById(id);
    }

    // create
    @PostMapping
    public Office createOffice(@RequestBody Office office) {
	return service.createOffice(office);
    }

    // update by id

    // delete by id
}
