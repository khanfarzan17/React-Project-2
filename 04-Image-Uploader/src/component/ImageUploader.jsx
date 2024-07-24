import { useState } from "react";
import "../component/ImageUploader.css";

const ImageUploader = () => {
  const [file, setFile] = useState(null);

  const handleFileUpload = (e) => {
    const selectedfile = e.target.files[0];
    setFile(selectedfile);
  };
  const handleclearUpload = () => {
    setFile("");
  };

  return (
    <div className="file-upload-container">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileUpload}
        className="input-filed"
      />
      {file && (
        <button onClick={handleclearUpload} className="clear-btn">
          Clear
        </button>
      )}
      {file && <img src={URL.createObjectURL(file)} alt={file.name} />}
    </div>
  );
};

export default ImageUploader;
