import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="mt-4 flex justify-between mr-28 ml-28">
            <Link className=" text-5xl font-bold " to='/'>CareerHub</Link>
            <div className="  text-xl flex gap-6 ">
                <Link className="hover:text-violet-600" to='/'>Statistics</Link>
                <Link className="hover:text-violet-600" to='/'>Applied Jobs</Link>
                <Link className="hover:text-violet-600" to='/'>Blogs</Link>
            </div>
            <button className="w4 bg-violet-600 font-semibold border p-2 text-white rounded-md hover:bg-violet-800">Start Applying</button>
        </div>
    );
};

export default Navbar;