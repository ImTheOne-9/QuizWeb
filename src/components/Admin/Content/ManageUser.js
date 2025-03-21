import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FcPlus } from "react-icons/fc";
import UserTable from "./UserTable";
import { useState, useEffect } from "react";
import { getAllUser, getUserWithPaginate } from "../../../Services/apiService"
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUser";
import UserPaginateTable from "./UserPaginateTable";
const ManageUser = (props) => {
    const USERS_LIMIT = 4;
    const [pageCount, setPageCount] = useState(0);

    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [showModalViewUser, setShowModalViewUser] = useState(false);
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);


    const [dataUpdate, setDataUpdate] = useState({});
    const [dataDelete, setDataDelete] = useState({});
    const [userList, setuserList] = useState([])

    useEffect(() => {
        // fetchUsers();
        fetchUsersWithPaginate(1);
    }, []);

    const fetchUsers = async () => {
        const res = await getAllUser();
        if (res && res.DT) {
            setuserList(res.DT);
        }
    }
    const fetchUsersWithPaginate = async (page) => {
        const res = await getUserWithPaginate(page, USERS_LIMIT);
        if (res && res.DT) {
            console.log(res.DT.totalPages);
            setuserList(res.DT.users);
            setPageCount(res.DT.totalPages);
        }
    }

    const handleClickBtnUpdate = (user) => {
        setShowModalUpdateUser(true);
        setDataUpdate(user);
    }

    const handleClickBtnView = (user) => {
        setShowModalViewUser(true);
        setDataUpdate(user);
    }
    const handleClickBtnDelete = (user) => {
        setShowModalDeleteUser(true);
        setDataDelete(user);
    }

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
                    {/* <UserTable
                        userList={userList}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnView={handleClickBtnView}
                        handleClickBtnDelete={handleClickBtnDelete} /> */}
                    <UserPaginateTable
                        userList={userList}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnView={handleClickBtnView}
                        handleClickBtnDelete={handleClickBtnDelete}
                        fetchUsersWithPaginate={fetchUsersWithPaginate}
                        pageCount={pageCount} />

                </div>
            </div>
            <ModalCreateUser
                show={showModalCreateUser}
                setShow={setShowModalCreateUser}
                fetchUsers={fetchUsers} />

            <ModalUpdateUser
                show={showModalUpdateUser}
                setShow={setShowModalUpdateUser}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                fetchUsers={fetchUsers} />

            <ModalViewUser
                show={showModalViewUser}
                setShow={setShowModalViewUser}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate} />

            <ModalDeleteUser
                show={showModalDeleteUser}
                setShow={setShowModalDeleteUser}
                dataDelete={dataDelete}
                fetchUsers={fetchUsers} />

        </div>
    );
}

export default ManageUser;