import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className=' relative bg-[#131C30] h-auto flex flex-col gap-5 md:flex-row text-white px-10 md:px-20 items-center justify-between py-8'>
        <p className='text-center md:text-left mb-3 md:mb-0 order-last md:order-1'>
          Hecho con ❤️ por <span>Ricardo Meneses</span>
        </p>
        <div className='flex items-center gap-3 md:gap-10 md:order-2'>
          <Link href='https://github.com/RicardoMeneses' target='_blank'>
            <FaGithub className='text-3xl' />
          </Link>
          <Link href='https://www.linkedin.com/in/ricardo-meneses-morales/' target='_blank'>
            <FaLinkedin className='text-3xl' />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
