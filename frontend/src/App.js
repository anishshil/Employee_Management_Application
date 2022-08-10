import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddEmployee from "./components/AddEmployee";
import EmployeesList from "./components/EmployeesList";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<EmployeesList/>}/>
          <Route path="/add" element={<AddEmployee/>}/>
          <Route path="/employee/edit/:id" element={<AddEmployee/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;