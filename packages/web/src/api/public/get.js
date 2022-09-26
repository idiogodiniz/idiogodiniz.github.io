import axios from 'axios';

const KNOWLEDGE_FROM_PUBLIC =
    '/json/knowledge.json';

export const getKnowledge = async _ => {
    const response = await axios.get(KNOWLEDGE_FROM_PUBLIC);
    return response.data;
}