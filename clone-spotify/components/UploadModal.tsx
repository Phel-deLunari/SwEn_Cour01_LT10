"use client";
import { use } from "react";
import Modal from "./Modal";
import useUploadModal from "@/hooks/useUploadModal";

const UpLoadModal = () => {
    const uploadModel = useUploadModal();

    const onChange=(open: boolean) => {
        if (!open) {
            uploadModel.onClose();
        }
    }

  return (
    <Modal
      title="Add a song"
      description="Upload an mp3 file"
      isOpen={uploadModel.isOpen}
      onChange={onChange}
    >
    Form
    </Modal>
  );
}

export default UpLoadModal;