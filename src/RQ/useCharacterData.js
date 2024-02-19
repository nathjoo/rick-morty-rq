import axios from 'axios';
import { useQuery } from 'react-query';

const fetch = (pageNumber) => {
  return axios.get('https://rickandmortyapi.com/api/character?', {
    params: { page: pageNumber },
  });
};

export const UseCharacterData = (pageNumber) => {
  return useQuery(['super-heroes', pageNumber], () => fetch(pageNumber));
};
