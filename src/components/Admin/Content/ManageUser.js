import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FcPlus } from "react-icons/fc";
import { useState } from "react";

const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="content">
                <div className="btn-add-user">
                    <button
                        className="btn btn-danger"
                        onClick={() => setShowModalCreateUser(true)}><FcPlus /> Add new user</button>
                </div>
                <div className="table-container">
                    User table

                </div>
            </div>
            <ModalCreateUser
                show={showModalCreateUser}
                setShow={setShowModalCreateUser} />


        </div>
    );
}

export default ManageUser;