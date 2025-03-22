import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ManageUser.scss';
import { FcPlus } from "react-icons/fc";
import { ToastContainer, toast } from 'react-toastify';
import { putUpdateUser } from '../../../Services/apiService.js';
import { data } from 'react-router-dom';
import _ from 'lodash'
function ModalUpdateUser(props) {
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

    const handleUploadImage = (event) => {
        console.log('Uploading image');
        setImage(event.target.files[0]);
        setImagePreview(URL.createObjectURL(event.target.files[0]));
    }


    const handleSubmit = async () => {

        const data = await putUpdateUser(dataUpdate.id, name, role, image);
        if (data && data.EC == 0) {
            toast.success(data.EM);
            handleClose();
            await props.fetchUsersWithPaginate(props.currentPage);
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
                    <Modal.Title>Update User</Modal.Title>
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
export default ModalUpdateUser