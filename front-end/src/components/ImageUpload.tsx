import React from "react";
import { Upload, Button } from "antd";
import type { UploadFile, UploadProps } from "antd/es/upload/interface";
import axios from "axios";

interface ImageUploadProps {
  fileList: UploadFile[];
  onPreview: (file: UploadFile) => void;
  onChange: UploadProps["onChange"];
  onAddImages: () => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  fileList,
  onPreview,
  onChange,
  onAddImages,
}) => {
  const handleUpload = async () => {
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append("image", file.originFileObj as File);
    });

    try {
      const response = await axios.post(
        "http://localhost:8080/api/add-images",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {
        onAddImages();
      } else {
        console.error("Failed to upload images");
      }
    } catch (error) {
      console.error("Error uploading images:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Upload
        listType="picture-card"
        fileList={fileList}
        onPreview={onPreview}
        onChange={onChange}
        style={{ marginBottom: "30px", fontSize: "1.5em" }}
      >
        {fileList.length == 1 ? null : <div>Upload</div>}
      </Upload>
      <Button
        onClick={handleUpload}
        style={{
          marginTop: "15px",
          backgroundColor: "black",
          color: "white",
          fontSize: "1.5em",
          padding: "12px 24px",
        }}
      >
        Add
      </Button>
    </div>
  );
};

export default ImageUpload;
