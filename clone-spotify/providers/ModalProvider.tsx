"use client";

import AuthModal from "@/components/AuthModal";
import Modal from "@/components/Modal";
import UpLoadModal from "@/components/UploadModal";
import { useEffect, useState } from "react";

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    },[]);
    if (!isMounted) {
        return null;
    }
    return (
    <>
    <AuthModal />
    <UpLoadModal />
    </>
  );
};

export default ModalProvider;