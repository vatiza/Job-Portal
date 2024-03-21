
const JobCategories = ({ category }) => {
    const { logo, category_name, availability } = category;
    console.log(category)

    return (
        <div className="border w-auto p-4 mt-3 bg-violet-100 rounded-lg">
            <img src={logo} alt="" />
            <h1 className="text-2xl">{category_name}</h1>
            <p className="mt-1">{availability}</p>
        </div>
    );
};

export default JobCategories;