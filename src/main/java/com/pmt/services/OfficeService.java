package com.pmt.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.pmt.models.Office;
import com.pmt.repositories.OfficeRepository;

@Service
public class OfficeService {

    @Autowired
    private OfficeRepository repo;

    // get all
    public Iterable<Office> getAllOffices() {
	return repo.findAll();
    }

    // get by id
    public ResponseEntity<Office> getOfficeById(int id) {
	if (!repo.existsById(id)) {
	    // return response entity with error message and null body
	    return ResponseEntity.status(HttpStatus.NOT_FOUND)
		    .header("Error", "This is a dream. Wake up before it finds you.").body(null);

	}

	// return response entity with success code and office as body
	return ResponseEntity.status(HttpStatus.OK).body(repo.findById(id).get());
    }

    // create
    public Office createOffice(Office office) {
	return repo.save(office);
    }

    // update by id

    // delete by id

}
