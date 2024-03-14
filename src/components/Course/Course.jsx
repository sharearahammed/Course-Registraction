import { FaDollarSign } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import PropTypes from 'prop-types';


const Course = ({course,handleCharts}) => {
    const {Name,Description,Photo,Price,Credit} = course;
    return (

    <div className="">
    <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img className="lg:h-[250px] lg:w-[400px]" src={Photo} alt="" /></figure>
        <div className="card-body">
            <h2 className="text-lg font-bold">{Name}</h2>
            <p>{Description}</p>
            <div className="flex justify-around items-center text-xl">
            <div className="flex justify-around items-center gap-4">
            <FaDollarSign />
            <p>Price: {Price}</p>
            </div>
            <div className="flex justify-around items-center gap-4">
            <IoBookOutline />
            <p>Credit: {Credit}</p>
            </div>
            </div>
        <div className="card-actions">
            <button onClick={() =>handleCharts(course)} className="btn btn-primary w-full text-lg">Select</button>
        </div>
      </div>
    </div>

    </div>
    );
};
Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleCharts: PropTypes.func.isRequired
}

export default Course;