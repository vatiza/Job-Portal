import { useLoaderData } from "react-router-dom";


const JobDetails = () => {
    const jobsDetails = useLoaderData();
    console.log(jobsDetails)
    return (
        <div>
            <h1>Job Detalis comming soon</h1>
        </div>
    );
};

export default JobDetails;