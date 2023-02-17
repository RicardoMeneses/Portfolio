import Link from 'next/link';
import SideBar from './SideBar';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { MenuItem } from '@szhsin/react-menu';
import MyMenu from '../utils/Menu';
import { useTranslation } from 'next-i18next';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const router = useRouter();
  const { asPath, locale, push } = useRouter();
  const { t } = useTranslation('common');

  const activeClass = 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md py-1 px-2';

  const handleOpen = () => {
    setOpenMenu(!openMenu);
  };

  const changeLanguage = (newLanguage: string) => {
    push(asPath, asPath, { locale: newLanguage });
  };
  return (
    <header>
      <nav className='bg-[#000]/50 text-white w-full fixed flex justify-between px-10 md:px-20 py-3 items-center z-50'>
        <Link href='/' className='text-4xl'>
          RM
        </Link>
        <div className='hidden md:flex gap-20 font-bold items-center'>
          <Link href='/' className={router.pathname === '/' ? activeClass : ''}>
            {t('header.home')}
          </Link>
          <Link href='/sobre-mi' className={router.pathname === '/sobre-mi' ? activeClass : ''}>
            {t('header.about')}
          </Link>
          <Link href='/proyectos' className={router.pathname === '/proyectos' ? activeClass : ''}>
            {t('header.projects')}
          </Link>
          <Link href='/resumen' className={router.pathname === '/resumen' ? activeClass : ''}>
            {t('header.resume')}
          </Link>
          <div className='flex justify-center items-center cursor-pointer'>
            <MyMenu content={locale}>
              {locale !== 'es' && <MenuItem onClick={() => changeLanguage('es')}>Español</MenuItem>}
              {locale !== 'en' && <MenuItem onClick={() => changeLanguage('en')}>English</MenuItem>}
            </MyMenu>
          </div>
        </div>
        <div className='flex md:hidden text-3xl items-center gap-3'>
          <div className='flex justify-center items-center cursor-pointer'>
            <MyMenu content={locale}>
              {locale !== 'es' && (
                <MenuItem className='text-xl' onClick={() => changeLanguage('es')}>
                  Español
                </MenuItem>
              )}
              {locale !== 'en' && (
                <MenuItem className='text-xl' onClick={() => changeLanguage('en')}>
                  English
                </MenuItem>
              )}
            </MyMenu>
          </div>
          <FaBars onClick={handleOpen} />
        </div>
        <SideBar openMenu={openMenu} handleOpen={handleOpen} />
      </nav>
    </header>
  );
};

export default Header;
