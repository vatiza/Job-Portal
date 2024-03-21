import userimg from '../../assets/images/user.png'

const Home = () => {
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
            

        </div>
    );
};

export default Home;