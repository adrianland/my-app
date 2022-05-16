import React from "react";
import "./Modal.css";

function Modal({ setOpenModal }) {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                    >
                        X
                    </button>
                </div>
                <div className="title">
                    <h1>Login</h1>
                </div>
                <div className="body">
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" required />
                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" required></input>
                    <p> <input type="checkbox" checked="checked" />Remember me</p>

                </div>
                <div className="footer">
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                        id="cancelBtn"
                    >
                        Cancel
                    </button>
                    <button>Login</button>

                </div>
            </div>
        </div>
    );
}

export default Modal;