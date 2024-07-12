/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { List, Button, Input, Modal } from "antd";
import type { UploadFile, UploadFileStatus } from "antd/es/upload/interface";
interface CustomUploadFile extends UploadFile {
  comment?: string;
  status: UploadFileStatus;
}
interface ImageListProps {
  imageList: CustomUploadFile[];
  onAddComment: (image: CustomUploadFile, comment: string) => void;
}

const ImageList: React.FC<ImageListProps> = ({ imageList, onAddComment }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState<CustomUploadFile | null>(
    null
  );
  const [comment, setComment] = useState("");
  console.log(imageList);
  const showModal = (image: CustomUploadFile) => {
    setCurrentImage(image);
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    if (currentImage) {
      await onAddComment(currentImage, comment);
    }
    setIsModalVisible(false);
    setComment("");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setComment("");
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "30px",
        borderRadius: "12px",
        marginBottom: "30px",
        width: "35%",
        maxHeight: "400px",
        overflowY: "auto",
      }}
    >
      <List
        itemLayout="horizontal"
        dataSource={imageList}
        renderItem={(item) => (
          <List.Item>
            <div style={{ display: "flex", alignItems: "center", gap: "50px" }}>
              <img
                src={item.url || item.preview}
                alt={item.name}
                style={{
                  maxWidth: "200px",
                  maxHeight: "200px",
                  objectFit: "contain",
                  marginRight: "10px",
                }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Button
                  onClick={() => showModal(item)}
                  style={{ marginBottom: "10px" }}
                >
                  Add Comment
                </Button>
                <p style={{ textAlign: "center" }}>
                  {item.comment || "No comments yet!"}
                </p>
              </div>
            </div>
          </List.Item>
        )}
      />
      <Modal
        title="Add Comment"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          type="text"
          placeholder="Enter your comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </Modal>
    </div>
  );
};

export default ImageList;
