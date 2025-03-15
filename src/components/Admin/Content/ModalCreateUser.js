import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalCreateUser() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal
                backdrop={'static'}
                centered
                show={show}
                onHide={handleClose}
                size='xl'>
                <Modal.Header closeButton>
                    <Modal.Title>Add new User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form class="row g-3">
                        <div class="col-6">
                            <label for="inputEmail4" class="form-label">Email</label>
                            <input type="email" class="form-control" id="inputEmail4" />
                        </div>
                        <div class="col-6">
                            <label for="inputPassword4" class="form-label">Password</label>
                            <input type="password" class="form-control" id="inputPassword4" />
                        </div>
                        <div class="col-6">
                            <label for="inputAddress" class="form-label">Username</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div class="col-md-4">
                            <label for="inputState" class="form-label">Role</label>
                            <select id="inputState" class="form-select">
                                <option value={"user"} selected>USER</option>
                                <option value={"admin"}>ADMIN</option>
                            </select>
                        </div>

                        <div class="col-6">
                            <input type='file' class="form-control" id="inputFile"></input>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ModalCreateUser