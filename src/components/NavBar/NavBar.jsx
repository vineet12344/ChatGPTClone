import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="flex justify-center ">
      <nav className="bg-zinc-700 flex justify-center mt-4 gap-9 w-[40vw] h-[10vh] rounded-2xl backdrop-blur-xl">
        <div className=" NavbarLogo  h-full w-[10vw]  flex justify-center  items-center ">
          <img  className=' hover:scale-[103%] cursor-pointer ' src="/public/images/chatgpt-icon.svg" width={'60px'} alt=" Icon" />
        </div>
        <div className='NavOptins  w-full flex '>
            <ul className='text-2xl w-full flex gap-8 text-white items-center'>
                <li className='hover:underline'><Link to='/Chat '>Try</Link></li>
                <li className='hover:underline'><Link to='/ImageAi '>ImageAI</Link></li>
                <li className='hover:underline'><Link to='/Purchase '>Purchase</Link></li>
            </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar