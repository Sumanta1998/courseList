import React, { useEffect, useState } from "react";
import courseData from "./data";
import "./CourseList.css";
import Pagination from "./Pagination";
function CourseList({ searchInput }) {
  console.log(searchInput);
  console.log();
  const [buttonStyle, setButtonStyle] = useState("");
  const [paginationStyle, setPaginationStyle] = useState(1);

  const [data, setData] = useState([]);
  const [sortOrder, setSortOrder] = useState(-1);
  const [currentPage, setCurrentPage] = useState(1);
  const [coursePerPage] = useState(4);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    let filterData = courseData.filter(
      (el) => el.title.toLowerCase().indexOf(searchInput.toLowerCase()) > -1
    );
    setData(filterData);
    setCurrentPage(1);
    setPaginationStyle(1);
    setButtonStyle("");
  }, [searchInput]);

  console.log("data :", data);

  const filterBy = (filterVal) => {
    let prevData = courseData;
    let filterData = prevData.filter((el) => el.category === filterVal);
    setCurrentPage(1);
    setPaginationStyle(1);
    setData(filterData);
    setButtonStyle(filterVal);
  };
  const sortBy = () => {
    let sortData = [];
    sortData = data.sort((a, z) => {
      return sortOrder === -1 ? z.price - a.price : a.price - z.price;
    });
    setSortOrder(sortOrder === -1 ? 1 : -1);
    console.log(data);
    setData([...sortData]);
    console.log(sortData);
  };

  // Get Current Post
  const indexOfLastPost = currentPage * coursePerPage;
  const indexOfFirstPost = indexOfLastPost - coursePerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <>
      <div className="filter_by">
        Filter By :
        <button
          onClick={() => filterBy("javascript")}
          className={buttonStyle === "javascript" ? "buttonStyle" : ""}
        >
          JavaScript
        </button>
        <button
          onClick={() => filterBy("cpp")}
          className={buttonStyle === "cpp" ? "buttonStyle" : ""}
        >
          C++
        </button>
        <button
          onClick={() => filterBy("python")}
          className={buttonStyle === "python" ? "buttonStyle" : ""}
        >
          Python
        </button>
        <button onClick={() => sortBy()}>Sort</button>
      </div>
      <div className="courseListContainer">
        {currentPosts &&
          currentPosts.map((el) => (
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
      <Pagination
        coursePerPage={coursePerPage}
        totalCourse={data.length}
        paginate={paginate}
        paginationStyle={paginationStyle}
        setPaginationStyle={setPaginationStyle}
      />
    </>
  );
}

export default CourseList;
