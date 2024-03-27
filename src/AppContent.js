import React, { useState } from 'react';
import './App.css';

import { useNavigate }      from 'react-router-dom';
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdFileUpload }     from "react-icons/md";
import { FaFileImage }      from "react-icons/fa";
import { MdDelete }         from "react-icons/md";

function AppContent() {
  const [image, setImage] = useState(null)
  const [fileName, setFileName] = useState("No selected file")
  const navigate = useNavigate();
  const handleUploadButtonClick = () => {
    navigate('/show', { state: { image } });
  };
  return (
    <main>
      <form action=""
        onClick={() => document.querySelector(".input-field").click()}
      >
        <input type='file' accept='image/*' className='input-field' hidden
          onChange={({ target: { files } }) => {
            files[0] && setFileName(files[0].name)
            if (files) {
              setImage(URL.createObjectURL(files[0]))
            }
          }}
        />
        {image ?
          <img className='img' src={image} alt={fileName} />
          :
          <>
            <FaCloudUploadAlt color='#1475cf' size={60} />
            <p>Browse Files to upload</p>
          </>
        }
      </form>
      <section className='uploaded-row'>
        <FaFileImage color='#1475cf' />
        <span className='upload-content'>
          {fileName} -
          <MdDelete
            onClick={() => {
              setFileName("No selected File")
              setImage(null)
            }}
          />
        </span>
      </section>
      <button onClick={handleUploadButtonClick} className='bt-show'>
        Upload <MdFileUpload className='icon-upload' />
      </button>
    </main>
  );
}
export default AppContent;