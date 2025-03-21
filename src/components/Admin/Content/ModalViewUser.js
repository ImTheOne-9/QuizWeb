import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ManageUser.scss';
import { FcPlus } from "react-icons/fc";
import { ToastContainer, toast } from 'react-toastify';
import { putUpdateUser } from '../../../Services/apiService.js';
import { data } from 'react-router-dom';
import _ from 'lodash'
function ModalViewUser(props) {
    const { show, setShow, dataUpdate, setDataUpdate } = props;

    const handleClose = () => {
        setShow(false);
        setName("");
        setEmail("");
        setPassword("");
        setRole("USER");
        setImagePreview("");
        setDataUpdate("");
    };


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [role, setRole] = useState("USER");
    const [image, setImage] = useState("");
    const [imagePreview, setImagePreview] = useState("");

    useEffect(() => {
        if (!_.isEmpty(dataUpdate)) {
            setName(dataUpdate.username);
            setEmail(dataUpdate.email);
            setPassword(dataUpdate.password);
            setRole(dataUpdate.role);
            setImage("");
            if (dataUpdate.image) {
                setImagePreview(`data:image/jpeg;base64,${dataUpdate.image}`);
            }
        }

    }, [dataUpdate])



    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

            <Modal
                backdrop={'static'}
                centered
                show={show}
                onHide={handleClose}
                size='xl'
                className='modal-manage-user'>
                <Modal.Header closeButton>
                    <Modal.Title>User Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                            <input
                                disabled
                                type="email"
                                className="form-control"
                                id="inputEmail4"
                                value={email} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label">Password</label>
                            <input
                                disabled
                                type="password"
                                className="form-control"
                                id="inputPassword4"
                                value={password} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputAddress" className="form-label">Username</label>
                            <input
                                disabled
                                type="text"
                                className="form-control"
                                id="inputAddress"
                                value={name} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputState" className="form-label">Role</label>
                            <select
                                disabled
                                id="inputState"
                                className="form-select"
                                value={role}>
                                <option value={"USER"}>USER</option>
                                <option value={"ADMIN"}>ADMIN</option>
                            </select>
                        </div>

                        <div className="col-md-12 img-preview">
                            {imagePreview ?
                                <img src={imagePreview}></img>
                                :
                                <span>Preview Image</span>
                            }
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ModalViewUser