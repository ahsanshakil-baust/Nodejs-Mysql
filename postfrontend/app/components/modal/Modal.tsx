import React from "react";
import { useSelector } from "react-redux";

const Modal = ({ msg }: any) => {
    const modal = useSelector((state: any) => state.post.modal);
    if (modal.showModal)
        return (
            <div className="w-80 bg-white flex justify-center items-center px-2 py-1 h-40 ring-2 fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] z-10">
                {modal.msg}
            </div>
        );
};

export default Modal;
