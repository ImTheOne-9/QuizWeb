
const UserTable = (props) => {

    const { userList, handleClickBtnUpdate, handleClickBtnView } = props;
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
                                <td>{item.id}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.role}</td>
                                <td>
                                    <button
                                        className="btn btn-success mx-2"
                                        onClick={() => handleClickBtnView(item)}>
                                        Detail
                                    </button>
                                    <button
                                        className="btn btn-primary mx-2"
                                        onClick={() => handleClickBtnUpdate(item)}>
                                        Update
                                    </button>
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
            </table >
        </>
    )
}

export default UserTable;