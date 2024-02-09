package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.AdminJob;
import com.example.demo.Repository.JobPostRepo;

@Service
public class JobPostService {

    @Autowired
    JobPostRepo repository;
    
    public AdminJob addJob(AdminJob Jobpost) {
		return repository.save(Jobpost);
		
	}
    public List<AdminJob> getJob(){
		return repository.findAll();
	}
    public String DeleteJobById(int id) {
		repository.deleteById(id);;
		return "deleted";
	}
	public String updateJob(AdminJob adminJob){
		Optional<AdminJob> admin = repository.findById(adminJob.getJobId());
		if(admin.isEmpty()){
			return "No user Exist";
		}
		admin.get().setCarrerLevel(adminJob.getCarrerLevel());
		admin.get().setJobTitle(adminJob.getJobTitle());
		admin.get().setJobDescription(adminJob.getJobDescription());
		admin.get().setEmail(adminJob.getEmail());
		admin.get().setUserName(adminJob.getUserName());
		admin.get().setIndustry(adminJob.getIndustry());
		admin.get().setJobType(adminJob.getJobType());
		admin.get().setExperience(adminJob.getExperience());
		admin.get().setCity(adminJob.getCity());
		admin.get().setQualification(adminJob.getQualification());
		admin.get().setSpecialisms(adminJob.getSpecialisms());
		admin.get().setSalary(adminJob.getSalary());
		admin.get().setDeadLine(adminJob.getDeadLine());
		repository.save(admin.get());
		return "Updated Successfully";
	}
    

}
