import apis from './apis';
import axios from 'axios';

const fetchEpisodes = (page, name = "") => axios.get(`${apis.episodes}?page=${page}&name=${name}`);
const fetchEpisode = (id) => axios.get(`${apis.episodes}/${id}`);

export { fetchEpisodes, fetchEpisode };