import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

const App = () => {


  return (
    <div className='flex justify-center bg-[#1c3378] text-white'>
      <div className='lg:w-3/5 md:w-[80%] w-full h-screen md:h-auto'>
        <Navbar />
        <div className='h-auto p-4 md:px-20'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
