import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const SingleColor = ({selectColor}) => {
  const { color } = useParams();

  const navigate = useNavigate();

  const colorNew = selectColor.filter(item => item.colorName === color)[0];

  return (
    <div
      style={{ backgroundColor: `${colorNew.colorValue}` }}
      className="flex justify-center items-center h-screen bg-red-500"
    >
      <div className="text-[3rem] text-center text-white">
        <p>THIS IS {colorNew.colorName.toUpperCase()}</p>
        <p className="my-[10rem]">ISNT IT BEAUTIFUL ?</p>
        <p className="underline" onClick={() => navigate("/")}>GO BACK</p>
      </div>
    </div>
  );
};

export default SingleColor;
