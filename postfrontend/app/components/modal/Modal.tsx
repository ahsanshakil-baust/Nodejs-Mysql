import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "@/app/store/slice";
import { Button } from "@mui/material";

const Modal = () => {
    const dispatch = useDispatch();
    const modal = useSelector((state: any) => state.post.modal);
    const handleClose = () => {
        dispatch(showModal({}));
    };
    if (modal.showModal)
        return (
            <div className="w-80 bg-white flex justify-center items-center px-2 py-1 h-40 ring-1 ring-[#25a025] fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] z-10 rounded-sm flex-col">
                <div className="text-[#25a025]">{modal.msg}</div>

                <Button
                    sx={{
                        color: "#25a025",
                        border: "1px solid #25a025",
                    }}
                    className="mt-5"
                    variant="outlined"
                    onClick={handleClose}
                >
                    Ok
                </Button>
            </div>
        );
};

export default Modal;
