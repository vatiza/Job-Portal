import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollar, faMapLocationDot } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const Jobs = ({ job }) => {
    const { company_name, job_type, id, logo, job_title, location, remote_or_onsite, salary } = job;

    return (
        <div className="border m-5 rounded-lg p-3 ">
            <img src={logo} alt="" />
            <h1 className="text-2xl font-bold">{job_title}</h1>
            <p className="text-sm">{company_name}</p>
            <div className="flex gap-2">
                <p className="border p-1 rounded mt-3 border-violet-600 text-violet-600">{remote_or_onsite}</p>
                <p className="border p-1 rounded mt-3 border-violet-600 text-violet-600">{job_type}</p>
            </div>
            <div className="flex gap-2 mt-2 mb-6">
                <p><FontAwesomeIcon icon={faMapLocationDot} /> {location}</p>
                <p> <FontAwesomeIcon icon={faDollar} /> {salary}</p>
            </div>
            <Link className="mt-12 w-4 bg-violet-600 font-semibold border p-2 text-white rounded-md hover:bg-violet-800" to={`/jobs/${id}`}>View Details</Link>


        </div>
    );
};

export default Jobs;