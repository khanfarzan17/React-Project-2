import React, { useState } from "react";
import "../styles/FileUploader.css";

const FileUploader = () => {
  const [file, setFile] = useState(null);

  const handleFileUpload = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleClearUpload = () => {
    setFile(null);
    setFile("");
  };

  // Function to check if the uploaded file is an image
  const isImageFile = (file) => {
    return file && file.type.startsWith("image/");
  };

  return (
    <div className="file-upload-container">
      <input
        type="file"
        accept=".pdf, .ppt, .pptx, .txt, image/*"
        onChange={handleFileUpload}
        className="input-filed"
      />
      {file && (
        <button onClick={handleClearUpload} className="clear-btn">
          Clear
        </button>
      )}
      {file && isImageFile(file) && (
        <img src={URL.createObjectURL(file)} alt={file.name} />
      )}
      {file && !isImageFile(file) && <p>Uploaded file: {file.name}</p>}
    </div>
  );
};

export default FileUploader;
