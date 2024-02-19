import React from 'react';
import { useCharacterDetailData } from '../RQ/useCharacterDetailData';
import { useParams } from 'react-router';

const CharacterDetail = () => {
  const { charId } = useParams();
  const { isLoading, data, isError, error } = useCharacterDetailData(charId);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div className="w-screen p-20 flex flex-col items-center">
      <div className="flex flex-col w-[400px] bg-[#3A4260] justify-center p-8 rounded-2xl text-white gap-4">
        <div className="flex flex-col items-center">
          <img
            src={data?.data.image}
            className="rounded-full flex w-[300px]"
          ></img>
          <p className="font-semibold text-[32px] m-auto">{data?.data.name}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-[14px] font-medium text-slate-400">Status:</p>
          <p className="text-[20px] font-semibold">{data?.data.status}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-[14px] font-medium text-slate-400">Species:</p>
          <p className="text-[20px] font-semibold">{data?.data.species}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-[14px] font-medium text-slate-400">Location:</p>
          <p className="text-[20px] font-semibold">
            {data?.data.location.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
