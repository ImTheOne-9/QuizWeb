import axios from '../Utils/axiosCustomize';
const postCreateNewUser = (email, password, name, role, image) => {
    const formData = new FormData();
    formData.append('username', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('role', role);
    formData.append('userImage', image);
    return axios.post('/api/v1/participant', formData);
}

const getAllUser = () => {
    return axios.get('/api/v1/participant/all');
}

export { postCreateNewUser, getAllUser };