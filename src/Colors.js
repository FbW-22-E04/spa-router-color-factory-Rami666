import { Routes, Route } from "react-router-dom";
import AddNewColor from "./components/AddNewColor";
import HomePage from "./components/HomePage";
import SingleColor from "./components/SingleColor";
import { useState } from "react";

function Colors() {

  const [selectColor, setSelectColor] = useState([
    { colorName: "red", colorValue: "#FF0000" },
    { colorName: "green", colorValue: "#0000FF" },
    { colorName: "blue", colorValue: "00FF00" }
  ]);

  return (
    <Routes>
      <Route path="/" element={<HomePage selectColor={selectColor}/ >} />
      <Route path="/colors/new" element={<AddNewColor selectColor={selectColor} setSelectColor={setSelectColor} />}/>
      <Route path="/colors/:color" element={<SingleColor selectColor={selectColor} />} />
    </Routes>
  );
}

export default Colors;

