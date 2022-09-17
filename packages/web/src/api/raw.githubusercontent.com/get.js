import axios from 'axios';
const RAW_GITHUB_CONTENT =
    'https://raw.githubusercontent.com';
const REPOS_STORAGE_JSON_CONHECIMENTO =
    '/zedeogo/storage/master/zedeogo.github.io/json/conhecimento.json';

const api = axios.create({
    baseURL: RAW_GITHUB_CONTENT
});

export const getConhec = async _ => api
    .get(REPOS_STORAGE_JSON_CONHECIMENTO);