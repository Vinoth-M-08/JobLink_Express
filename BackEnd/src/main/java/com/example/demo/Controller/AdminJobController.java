package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.AdminJob;
import com.example.demo.Service.JobPostService;
//@CrossOrigin(origins = "http://localhost:8080")
import org.springframework.web.bind.annotation.PutMapping;

@CrossOrigin("*")
@RestController
public class AdminJobController {

    @Autowired
    JobPostService service;

    @PostMapping("/postJob")
	public AdminJob add(@RequestBody AdminJob Jobpost ) {
		return service.addJob(Jobpost);
	}
	
	@GetMapping("/getJob")
	public java.util.List<AdminJob> read(){
		return service.getJob();
	}
	@DeleteMapping("/jobpost/{id}")
	public String delete(@PathVariable int id) {
		return service.DeleteJobById(id);
	}

	@PutMapping("/jobpost/update")
	public String putMethodName( @RequestBody AdminJob entity) {
		return service.updateJob(entity);
	}
	
	
}
