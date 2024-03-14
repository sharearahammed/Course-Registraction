import { useState } from "react";
import Course from "./Course";
import { useEffect } from "react";
import PropTypes from 'prop-types';


const Courses = ({handleCharts}) => {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-3 gap-5">
            {
                courses.map((course) => <Course key={course.ID}
                course={course}
                handleCharts={handleCharts}></Course>)
            }
        </div>
    );
};
Courses.propTypes = {
    handleCharts: PropTypes.func.isRequired
}
export default Courses;