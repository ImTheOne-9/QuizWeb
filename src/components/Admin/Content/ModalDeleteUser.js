import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteUser } from '../../../Services/apiService';
import { toast } from 'react-toastify';
function ModalDeleteUser(props) {
    const { show, setShow, dataDelete } = props;
    const handleClose = () => setShow(false);

    const handleComfirmDeleteUser = async () => {
        const data = await deleteUser(dataDelete.id);
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
            <Modal
                show={show}
                onHide={handleClose}
                backdrop={'static'}>
                <Modal.Header closeButton>
                    <Modal.Title>Comfirm delete this user</Modal.Title>
                </Modal.Header>
                <Modal.Body>Delete this user: <b>{dataDelete && dataDelete.email ? dataDelete.email : ""}</b></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleComfirmDeleteUser()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDeleteUser;