import apis from './apis';
import axios from 'axios';

const fetchEpisodes = (page, name = "") => axios.get(`${apis.episodes}?page=${page}&name=${name}`);

export default fetchEpisodes;