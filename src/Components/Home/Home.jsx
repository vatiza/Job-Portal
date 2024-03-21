import { useEffect, useState } from 'react';
import userimg from '../../assets/images/user.png'
import JobCategories from '../JobCategories/JobCategories';

const Home = () => {
    const [cetegories, setCetegories] = useState([]);
    useEffect(() => {
        fetch('https://20b6a2a201344184921688f7618c57d4.api.mockbin.io/')
            .then(res => res.json())
            .then(data => setCetegories(data))
    }, [])

    return (
        <div>
            <div className='flex mr-3 ml-32 mt-12 font-semibold'>
                <div>
                    <h1 className='text-5xl font-bold'>One Step <br /> Closer To Your <br /> <span className='text-7xl text-violet-600 font-bold'>Dream Job</span></h1>
                    <p className='w-2/3 mt-1'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className=" mt-3 w4 bg-violet-600 font-semibold border p-2 text-white rounded-md hover:bg-violet-800">Get Started</button>
                </div>
                <div className=''>
                    <img className='w-4/6' src={userimg} alt="" />
                </div>
            </div>
            {/* Job cetegories section */}
            <div className='text-center mt-5' >
                <h1 className='text-5xl font-bold'>Job Category List</h1>
                <p className='mt-3'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='flex gap-5 justify-center'>

                {
                    cetegories.map(category => <JobCategories
                        key={category.id}
                        category={category}

                    ></JobCategories>)
                }
            </div>

        </div>
    );
};

export default Home;