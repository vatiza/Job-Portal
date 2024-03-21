

const Jobs = ({ job }) => {
    const { company_name, job_type, logo, job_title, location, remote_or_onsite, salary } = job;

    return (
        <div className="border rounded-lg grid grid-cols-2 gap-2 w-80 p-4">
            <img src={logo} alt="" />
            <h1>{job_title}</h1>
            <p>{company_name}</p>
            <div>
                <p>{remote_or_onsite}</p>
                <p>{job_type}</p>
            </div>
            <div>
                <p>{location}</p>
                <p>{salary}</p>
            </div>
            <button className="mt-3 w4 bg-violet-600 font-semibold border p-2 text-white rounded-md hover:bg-violet-800">View Details</button>


        </div>
    );
};

export default Jobs;