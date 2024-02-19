import axios from 'axios';
import { useQuery } from 'react-query';

const fetch = ({ queryKey }) => {
  return axios.get('https://rickandmortyapi.com/api/character/' + queryKey[1]);
};

export const useCharacterDetailData = (charId) => {
  return useQuery(['character-detail', charId], fetch);
};
