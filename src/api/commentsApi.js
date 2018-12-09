import apis from './apis';
import axios from 'axios';

const fetchComments = (id) => axios.get(`${apis.episodes}/${id}/comments`);
const postComment = (id, payload) => axios.post(`${apis.episodes}/${id}/comments`, payload);

export { fetchComments, postComment };