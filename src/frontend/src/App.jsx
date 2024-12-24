import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

const App = () => {


  return (
    <div className='flex justify-center bg-[#1c3378] text-white'>
      <div className='w-3/5'>
        <Navbar />
        <div className='h-screen'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
