import React, { useEffect, useState } from "react";
import courseData from "./data";
import "./CourseList.css";
function CourseList({ searchInput }) {
  console.log(searchInput);
  console.log();
  const [data, setData] = useState([]);
  useEffect(() => {
    let filterData = courseData.filter(
      (el) => el.title.toLowerCase().indexOf(searchInput.toLowerCase()) > -1
    );
    setData(filterData);
  }, [searchInput]);

  console.log("data :", data);

  const filterBy = (filterVal) => {
    let prevData = courseData;
    let filterData = prevData.filter((el) => el.category == filterVal);
    setData(filterData);
  };
  const sortBy = () => {
    let sortData = [];
    sortData = data.sort((a, z) => {
      return z.id - a.id;
    });
    console.log(data);
    setData([...sortData]);
    console.log(sortData);
  };

  return (
    <>
      <div className="filter_by">
        Filter By :
        <button onClick={() => filterBy("javascript")}>JavaScript</button>
        <button onClick={() => filterBy("cpp")}>C++</button>
        <button onClick={() => filterBy("python")}>Python</button>
        <button onClick={() => sortBy()}>Sort</button>
      </div>
      <div>
        {data &&
          data.map((el) => (
            <div key={el.id} className="courseListCard">
              <img src={el.image} alt={el.title} />
              <div className="courseDetails">
                <div className="course_title">{el.title}</div>
                <div className="course_desc">{el.desdcription}</div>
                <div className="course_author">
                  <b>Author</b> : {el.author}
                </div>
                <div className="course_price">
                  <b>Price</b> : {el.price}
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default CourseList;
