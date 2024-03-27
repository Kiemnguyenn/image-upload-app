import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoArrowBackOutline } from "react-icons/io5";
import './show.css'

function Show() {
  const location = useLocation();
  const navigate = useNavigate();
  const image = location.state ? location.state.image : null;
  const handleReturnButtonClick = () => {
    navigate('/', { replace: true });
  };
  return (
    <>
    <div>
        {image && <img src={image} alt="Uploaded" style={{ width: 700, height: 400 }}/>}
    </div>
    <div>
        <button onClick={handleReturnButtonClick}
                className='bt-back'> <IoArrowBackOutline className='icon-back'/> Back </button>
    </div>
    </>
  );
}
export default Show;