import { useState, useEffect } from "react";
import { getAllUser } from "../../../Services/apiService"
const UserTable = (props) => {
    const [userList, setuserList] = useState([])

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const res = await getAllUser();
        console.log(res);
        if (res && res.DT) {
            setuserList(res.DT);
        }
    }

    return (
        <>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {userList && userList.length > 0 && userList.map((item, index) => {
                        return (
                            <tr key={`user-data-${index}`}>
                                <td>{index + 1}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.role}</td>
                                <td>
                                    <button className="btn btn-success mx-2">Detail</button>
                                    <button className="btn btn-primary mx-2">Edit</button>
                                    <button className="btn btn-danger mx-2">Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                    {userList && userList.length === 0 && (
                        <tr>
                            <td colSpan="4">No user data found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}

export default UserTable;