alter table  JobHistory
add job_id int not null constraint fk_job_id  FOREiGN key REFERENCES jobs(Job_ID)
select * from JobHistory