import Link from 'next/link';
import React from 'react';
import { Wave } from 'react-animated-text';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn, FaFacebook } from 'react-icons/fa';
import TextTransition, { presets } from "react-text-transition";
const TEXTS = [
  "MERN Stack",
  "Front-End",
  "Full Stack"
];
const Main = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            LETS BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I&apos;m <span className='text-[#067DE7] inline-block'> <Wave text="Saifullah Mansur" effect="verticalFadeIn" effectDirection="up" iterations={1}/></span>
          </h1>
          <h1 className='py-2 text-gray-700'>A <span className="inline-block text-[#0EC8E5]"><TextTransition
        text={ TEXTS[index % TEXTS.length] }
        springConfig={ presets.stiff }
      /></span> Developer</h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
          I&apos;m a MERN Stack Developer in Bangladesh. My specialties include designing Interactive websites with CRUD application. I love what I do and truly take pride in producing high-quality work as well as great customer service to my clients.
          </p>
          <a href="https://drive.google.com/file/d/1KkfeLfSQGejRE_ZPg3Jzz44iLDt0PR3E/view?usp=sharing" target="_blank" rel="noreferrer">
          <button className="block mx-auto px-4 py-2 rounded-full">Download Resume</button>
          </a>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/saifullah-mansur/'
              target='_blank' rel="noreferrer"
            >
          
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:bg-[#0A66C2] hover:text-white ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a href='https://github.com/saikot-cse' target='_blank' rel="noreferrer">
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:bg-[#BABBBD] hover:text-black ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:bg-gradient-to-r from-[#067DE7] to-[#0EC8E5] hover:text-white ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <a href='https://www.facebook.com/saifullahmansursaikot' target='_blank' rel="noreferrer">
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:bg-[#067DE7] hover:text-white ease-in duration-300'>
                <FaFacebook />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
