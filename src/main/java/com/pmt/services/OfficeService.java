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
    public ResponseEntity<Iterable<Office>> getAllOffices() {
	return ResponseEntity.status(HttpStatus.OK).body(repo.findAll());
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
    public ResponseEntity<Office> createOffice(Office office) {
	if (repo.existsById(office.getOfficeId())) {
	    return ResponseEntity.status(HttpStatus.BAD_REQUEST)
		    .header("error", "A Department with this ID already exists.").body(office);
	}

	return ResponseEntity.status(HttpStatus.OK).body(repo.save(office));
    }

    // update by id
    public ResponseEntity<Office> updateOfficeById(int id, Office office) {
	if (!repo.existsById(id)) {
	    // return response entity with error message and null body
	    return ResponseEntity.status(HttpStatus.NOT_FOUND)
		    .header("Error", "This is a dream. Wake up before it finds you.").body(null);
	}
	return ResponseEntity.status(HttpStatus.OK).body(repo.save(office));
    }

    // delete by id
    public ResponseEntity<Office> deleteOfficeById(int id) {
	if (!repo.existsById(id)) {
	    // return response entity with error message and null body
	    return ResponseEntity.status(HttpStatus.NOT_FOUND)
		    .header("Error", "This is a dream. Wake up before it finds you.").body(null);
	}
	// actually delete it
	repo.deleteById(id);
	// return an HTTP Response
	return ResponseEntity.status(HttpStatus.OK)
		.header("Success", "Wow. I didn't think you had it in you. Well done").body(null);
    }
}
