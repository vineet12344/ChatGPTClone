import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex justify-center cursor-pointer"
    >
      <motion.nav
        whileHover={{ scale: 1.02 }}
        transition={{duration: 1}}
        className="bg-white bg-opacity-10 backdrop-blur-md shadow-lg  flex justify-center mt-4 gap-9 w-[40vw] h-[10vh] rounded-2xl backdrop-blur-xl"
      >
        <div className=" NavbarLogo  h-full w-[10vw]  flex justify-center  items-center ">
          <img
            className=" hover:scale-[103%] cursor-pointer "
            src="/public/images/chatgpt-icon.svg"
            width={"60px"}
            alt=" Icon"
          />
        </div>
        <div className="NavOptins  w-full flex ">
          <ul className="text-2xl w-full flex gap-8 text-white items-center">
            <li className="hover:underline">
              <Link to="/Chat ">Try</Link>
            </li>
            <li className="hover:underline">
              <Link to="/ImageAi ">ImageAI</Link>
            </li>
            <li className="hover:underline">
              <Link to="/Purchase ">Purchase</Link>
            </li>
          </ul>
        </div>
      </motion.nav>
    </motion.div>
  );
}

export default NavBar