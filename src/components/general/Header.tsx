import Link from 'next/link';
import SideBar from './SideBar';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { useRouter } from 'next/router';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const router = useRouter();

  const activeClass = 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md py-1 px-2';

  const handleOpen = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <header>
      <nav className='bg-[#000]/50 text-white w-full fixed flex justify-between px-10 md:px-20 py-3 items-center z-50'>
        <Link href='/' className='text-4xl'>
          RM
        </Link>
        <div className='hidden md:flex gap-20 font-bold items-center'>
          <Link href='/' className={router.pathname === '/' ? activeClass : ''}>
            Inicio
          </Link>
          <Link href='/sobre-mi' className={router.pathname === '/sobre-mi' ? activeClass : ''}>
            Sobre mí
          </Link>
          <Link href='/proyectos' className={router.pathname === '/proyectos' ? activeClass : ''}>
            Proyectos
          </Link>
          <Link href='/resumen' className={router.pathname === '/resumen' ? activeClass : ''}>
            Resumen
          </Link>
        </div>
        <div className='block md:hidden text-3xl'>
          <FaBars onClick={handleOpen} />
        </div>
        <SideBar openMenu={openMenu} handleOpen={handleOpen} />
      </nav>
    </header>
  );
};

export default Header;
