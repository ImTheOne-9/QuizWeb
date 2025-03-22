import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";


const UserPaginateTable = (props) => {
    const { userList, pageCount, handleClickBtnView, handleClickBtnUpdate, handleClickBtnDelete } = props;
    const handlePageClick = (event) => {
        props.fetchUsersWithPaginate(+event.selected + 1);
        props.setCurrentPage(+event.selected + 1)
    };


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
                                        onClick={() => handleClickBtnView(item)}
                                    >
                                        Detail
                                    </button>
                                    <button
                                        className="btn btn-primary mx-2"
                                        onClick={() => handleClickBtnUpdate(item)}
                                    >
                                        Update
                                    </button>
                                    <button
                                        className="btn btn-danger mx-2"
                                        onClick={() => handleClickBtnDelete(item)}
                                    >
                                        Delete
                                    </button>
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
            <div className="user-paginate d-flex justify-content-center">
                <ReactPaginate
                    nextLabel="Next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="< Prev"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                    forcePage={props.currentPage - 1}
                />
            </div>

        </>
    )
}

export default UserPaginateTable;