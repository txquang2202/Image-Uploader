/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Modal } from "antd";

interface ImagePreviewModalProps {
  visible: boolean;
  image: string;
  onCancel: () => void;
}

const ImagePreviewModal: React.FC<ImagePreviewModalProps> = ({
  visible,
  image,
  onCancel,
}) => (
  <Modal open={visible} footer={null} onCancel={onCancel}>
    <img alt="example" style={{ width: "90%", height: "auto" }} src={image} />
  </Modal>
);

export default ImagePreviewModal;
