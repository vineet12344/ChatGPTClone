import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <>
      <motion.div
        className="w-full mt-14"
        initial={{ opacity: 0, y: 70 }}
        animate={{ y: -30, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <span className="w-full text-center">
          <h1 className="hero-heading mt-40 text-white font-mono text-[5vw]">
            Introducing ChatGPT
          </h1>
        </span>
      </motion.div>

      <motion.span
        className="w-full flex justify-around"
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ y: -30, opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <div className="chatgpt-intro h-full w-[30vw]">
            <p className="text-white text-2xl p-3">
              ChatGPT is a state-of-the-art conversational AI model developed by
              OpenAI, designed to simulate human-like interactions and provide
              assistance in a wide range of tasks. Built on advanced natural
              language processing algorithms, it has the capability to
              understand and generate text in real-time, making it an incredibly
              versatile tool for both casual conversation and complex
              problem-solving.
            </p>
          </div>
        </motion.div>

        {/* Floating Image Div */}
        <motion.div
          initial={{ opacity: 1, y: 70 }}
          animate={{ y: [0, -20, 0], opacity: 1 }} // Floating effect
          transition={{
            duration: 2, // Time for one full cycle (up and down)
            repeat: Infinity, // Loop infinitely
            ease: 'easeInOut',
            repeatType: 'loop', // Repeats the floating loop
          }}
          className="shadow-lg"
        >
          <div className="chatgpt-intro w-[30vw]">
            <img
              src="/images/chatgpt-icon.svg"
              alt="ChatGPT icon"
              width={"300px"}
              height={"300px"}
            />
          </div>
        </motion.div>
      </motion.span>
    </>
  );
};

export default Hero;
