import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import estro from "../public/assets/projects/estro.jpg";
import pro from '../public/assets/projects/pro.jpg'
import diligent from '../public/assets/projects/diligent.jpg'
import keylogger from '../public/assets/projects/keylogger.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What Ive Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Estro Gadget'
            backgroundImg={estro}
            projectUrl='/property'
          />
          <ProjectItem
            title='Pro Tech Gear'
            backgroundImg={pro}
            projectUrl='/crypto'
          />
          <ProjectItem
            title='Diligent Developer'
            backgroundImg={diligent}
            projectUrl='/netflix'
          />
          <ProjectItem
            title='KeyLogger Zone'
            backgroundImg={keylogger}
            projectUrl='/twitch'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
