"use client";
import { use } from "react";
import Modal from "./Modal";
import useUploadModal from "@/hooks/useUploadModal copy";

const UpLoadModal = () => {
    const uploadModel = useUploadModal();
    const onChange=(open: boolean) => {
        if (!open) {
            uploadModel.onClose();
        }
    }

  return (
    <Modal
      title="Upload modal title"
      description="Upload modal description"
      isOpen={uploadModel.isOpen}
      onChange={onChange}
    >
    Upload Content 
    </Modal>
  );
}

export default UpLoadModal;