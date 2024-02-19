import { useState } from 'react';
import { UseCharacterData } from '../RQ/useCharacterData';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo 3.png';

export const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const { isLoading, isError, error, data } = UseCharacterData(pageNumber);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div className="flex flex-col w-screen px-20 py-16 gap-8 font-body">
      <div className="flex flex-row items-center">
        <img src={Logo} className="flex w-[200px]"></img>
        <h1 className="text-[72px] font-black text-[#3A4260]">
          Rick and Morty Database
        </h1>
      </div>
      <div className="flex flex-wrap w-full gap-3 gap-y-8 justify-between">
        {data?.data.results.map((character) => {
          return (
            <Link to={'/' + character.id} key={character.id}>
              <div className="w-[300px] h-[400px] rounded-xl shadow-lg flex flex-col justify-between overflow-hidden hover:scale-105 duration-300 transition ease-in-out">
                <div>
                  <img src={character.image} alt="Character"></img>
                </div>
                <div className="w-full h-full flex flex-col justify-between p-2">
                  <p className="font-bold text-[20px]">{character.name}</p>
                  <p className="text-[16px]">
                    <span className="text-slate-400 text-[14px]">
                      Species:{' '}
                    </span>
                    {character.species}
                  </p>
                  <p className="text-[16px]">
                    <span className="text-slate-400 text-[14px]">Status: </span>
                    {character.status}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="flex gap-4 w-full justify-center items-center">
        <button
          onClick={() => setPageNumber((page) => page - 1)}
          disabled={!data.data.info.prev}
          className="p-2 bg-[#3A4260] rounded-lg w-[100px] font-medium text-white"
        >
          Previous
        </button>
        <button
          onClick={() => setPageNumber((page) => page + 1)}
          disabled={!data.data.info.next}
          className="p-2 bg-[#3A4260] rounded-lg w-[100px] font-medium text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};
