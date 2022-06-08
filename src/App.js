import "./App.css";
import Header from "./Components/Header";
import CourseList from "./Components/CourseList";
import { useState } from "react";
function App() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="App">
      <Header searchInput={searchInput} setSearchInput={setSearchInput} />
      <CourseList searchInput={searchInput} />
    </div>
  );
}

export default App;
