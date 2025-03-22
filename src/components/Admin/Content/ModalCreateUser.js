import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ManageUser.scss';
import { FcPlus } from "react-icons/fc";
import { ToastContainer, toast } from 'react-toastify';
import { postCreateNewUser } from '../../../Services/apiService.js';
import { data } from 'react-router-dom';
function ModalCreateUser(props) {
    const { show, setShow } = props;

    const handleClose = () => {
        setShow(false);
        setName("");
        setEmail("");
        setPassword("");
        setRole("USER");
        setImagePreview("");
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [role, setRole] = useState("USER");
    const [image, setImage] = useState("");
    const [imagePreview, setImagePreview] = useState("");

    const handleUploadImage = (event) => {
        console.log('Uploading image');
        setImage(event.target.files[0]);
        setImagePreview(URL.createObjectURL(event.target.files[0]));
    }

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleSubmit = async () => {
        const isValidateEmail = validateEmail(email);
        if (!isValidateEmail) {
            toast.error('Invalid email');
            return;
        }
        if (!password) {
            toast.error('Password is required');
            return;
        }
        if (!name) {
            toast.error('Name is required');
            return;
        }
        const data = await postCreateNewUser(email, password, name, role, image);
        if (data && data.EC == 0) {
            toast.success(data.EM);
            handleClose();
            props.setCurrentPage(1)
            await props.fetchUsersWithPaginate(1);
        } else {
            toast.error(data.EM);
        }
    }

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
                    <Modal.Title>Add new User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="inputEmail4"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="inputPassword4"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputAddress" className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputAddress"
                                value={name}
                                onChange={(event) => setName(event.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputState" className="form-label">Role</label>
                            <select
                                id="inputState"
                                className="form-select"
                                value={role}
                                onChange={(event) => setRole(event.target.value)} >
                                <option value={"USER"}>USER</option>
                                <option value={"ADMIN"}>ADMIN</option>
                            </select>
                        </div>

                        <div className="col-md-12 ">
                            <label className="form-label label-upload" htmlFor='labelUpload'><FcPlus />Upload your image</label>
                            <input
                                type='file'
                                className="form-control"
                                id='labelUpload'
                                hidden
                                onChange={(event) => handleUploadImage(event)} />
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
                    <Button variant="primary" onClick={handleSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ModalCreateUser