package com.pmt.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.pmt.models.Office;

@Repository
public interface OfficeRepository extends CrudRepository<Office, Integer>{

}
