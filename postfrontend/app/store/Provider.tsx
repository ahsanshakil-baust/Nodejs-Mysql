"use client";
import { Provider } from "react-redux";
import store from "./store";
import Modal from "../components/modal/Modal";

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <Provider store={store}>
            <Modal />
            {children}
        </Provider>
    );
};

export default ReduxProvider;
