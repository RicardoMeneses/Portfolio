import Link from 'next/link';
import { FaEllipsisV } from 'react-icons/fa';
import Image from 'next/image';

interface Props {
  project: ObjProject;
}

type ObjProject = {
  title: string;
  img: string;
  link: string;
  tech: string[];
};

const Project: React.FC<Props> = ({ project }) => {
  return (
    <Link
      href={project.link}
      target='_blank'
      className='group relative bg-white w-3/4 mx-auto rounded-2xl flex flex-col shadow hover:shadow-2xl group-hover:opacity-50 group-active:opacity-50'
    >
      <div className='bounce-top h-12 w-full bg-[#c6c4c4] rounded-t-2xl flex items-center p-5 gap-2 md:gap-3'>
        <div className='rounded-[50%] w-4 h-4 bg-red-700'></div>
        <div className='rounded-[50%] w-4 h-4 bg-yellow-400'></div>
        <div className='rounded-[50%] w-4 h-4 bg-green-500'></div>
        <div className='rounded-lg bg-white w-3/4 overflow-hidden h-4 px-2'>
          <p className=' text-xs text-gray-400 text-ellipsis overflow-hidden'>{project.link}</p>
        </div>
        <FaEllipsisV className='text-white' />
      </div>
      <Image
        src={project.img}
        className='bounce-top h-full rounded-b-2xl'
        alt={project.title}
        width={700}
        height={200}
      />
      <div className='transition-all transform duration-300 translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-active:opacity-100 group-active:translate-y-0 absolute h-full w-full flex flex-col text-white justify-center items-center rounded-2xl bg-black/50'>
        <p className='text-2xl'>{project.title}</p>
        <div className='flex gap-5 mt-5 w-full flex-wrap justify-center px-10'>
          {project.tech.map((tech, index) => (
            <p className='border-white border-2 rounded-md px-2' key={index}>
              {tech}
            </p>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default Project;
