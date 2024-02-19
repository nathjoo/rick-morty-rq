import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import { Home } from './components/Home';
import CharacterDetail from './components/CharacterDetail';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          {/* <div className=" w-screen h-[100px] text-black bg-[#3A4260]">
            <nav className="w-full h-full">
              <ul className="flex flex-row gap-4 h-full w-full justify-center items-center">
                <li className="font-medium text-white text-[20px]">
                  <Link to="/">Home</Link>
                </li>
                <li className="font-medium text-white text-[20px]">
                  <Link>Characters</Link>
                </li>
                <li className="font-medium text-white text-[20px]">
                  <Link>Locations</Link>
                </li>
              </ul>
            </nav>
          </div> */}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/:charId" element={<CharacterDetail />}></Route>
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
