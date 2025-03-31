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

const putUpdateUser = (id, name, role, image) => {
    const formData = new FormData();
    formData.append('id', id);
    formData.append('username', name);
    formData.append('role', role);
    formData.append('userImage', image);
    return axios.put('/api/v1/participant', formData);
}

const getAllUser = () => {
    return axios.get('/api/v1/participant/all');
}

const deleteUser = (userId) => {
    return axios.delete('/api/v1/participant', { data: { id: userId } });
}

const getUserWithPaginate = (page, limit) => {
    return axios.get(`/api/v1/participant?page=${page}&limit=${limit}`);
}

const postLogin = (email, password) => {
    return axios.post(`/api/v1/login`, { email: email, password: password, delay: 5000 });
}
const postRegister = (email, password, username) => {
    return axios.post(`/api/v1/register`, { email: email, password: password, username: username });
}

const getQuizByUser = () => {
    return axios.get('/api/v1/quiz-by-participant');
}

const getDataQuiz = (id) => {
    return axios.get(`/api/v1/questions-by-quiz?quizId=${id}`);
}

export { postCreateNewUser, getAllUser, putUpdateUser, deleteUser, getUserWithPaginate, postLogin, postRegister, getQuizByUser, getDataQuiz };