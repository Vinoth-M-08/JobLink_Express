import React, { useEffect, useState } from 'react';
import axios from 'axios';

const YourComponent = () => {
  const [jobData, setJobData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8081/getJob');
        setJobData(response.data);
      } catch (error) {
        console.error('Error fetching job data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {jobData ? (
        <div>
          <h2>Job Data</h2>
          {jobData.map(job => (
            <div key={job.jobId}>
              <h3>{job.jobTitle}</h3>
              <p><strong>Job ID:</strong> {job.jobId}</p>
              <p><strong>Career Level:</strong> {job.carrerLevel}</p>
              <p><strong>Email:</strong> {job.email}</p>
              <p><strong>Job Description:</strong> {job.jobDescription}</p>
              <p><strong>Industry:</strong> {job.industry}</p>
              <p><strong>User Name:</strong> {job.userName}</p>
              <p><strong>Job Type:</strong> {job.jobType}</p>
              <p><strong>Experience:</strong> {job.experience}</p>
              <p><strong>Qualification:</strong> {job.qualification}</p>
              <p><strong>Deadline:</strong> {job.deadLine}</p>
              <p><strong>City:</strong> {job.city}</p>
              <p><strong>Salary:</strong> {job.salary}</p>
              <p><strong>Specialisms:</strong> {job.specialisms}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default YourComponent;
