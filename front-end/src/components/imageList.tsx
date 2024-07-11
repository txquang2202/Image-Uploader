/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { List, Button, Input, Modal } from "antd";
import type { UploadFile } from "antd/es/upload/interface";

interface ImageListProps {
  imageList: UploadFile[];
}

const ImageList: React.FC<ImageListProps> = ({ imageList }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState<UploadFile | null>(null);
  const [comment, setComment] = useState<string>("");

  const showModal = (item: UploadFile) => {
    setCurrentImage(item);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    //hanlde
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
            <div>
              {/* <div>{item.comment || "No comments yet"}</div> */}
              <Button
                onClick={() => showModal(item)}
                style={{ marginTop: "10px" }}
              >
                Add Comment
              </Button>
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
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Enter your comment"
        />
      </Modal>
    </div>
  );
};

export default ImageList;
