package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.AddPreimumJobs;
import com.example.demo.Service.AddPremiumJobsService;

@RestController
public class AddPremiumJobController {
     @Autowired
    AddPremiumJobsService service;

    @PostMapping("/admin/premium/postJob")
	public AddPreimumJobs add(@RequestBody AddPreimumJobs Jobpost ) {
		System.out.println(Jobpost);
		return service.addPremiumJob(Jobpost);
	}
	
	@GetMapping("/admin/premium/getJob")
	public java.util.List<AddPreimumJobs> read(){
		return service.getPremiumJob();
	}
	@DeleteMapping("/admin/premium/deletejob/{id}")
	public String delete(@PathVariable int id) {
		return service.DeleteJobById(id);
	}
	@PutMapping("/admin/premium/update")
	public String putMethodName( @RequestBody AddPreimumJobs entity) {
		return service.updateJob(entity);
	}
}
