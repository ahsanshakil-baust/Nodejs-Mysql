import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "@/app/store/slice";
import { Alert } from "@mui/material";

const Modal = () => {
    const dispatch = useDispatch();
    const modal = useSelector((state: any) => state.post.modal);

    if (modal.showModal)
        return (
            <Alert onClose={() => dispatch(showModal({}))}>{modal.msg}</Alert>
        );
};

export default Modal;
