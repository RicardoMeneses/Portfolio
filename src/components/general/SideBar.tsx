import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaWindowClose } from 'react-icons/fa';
import { useTranslation } from 'next-i18next';

interface Props {
  openMenu: boolean;
  handleOpen: () => void;
}

const SideBar: React.FC<Props> = ({ openMenu, handleOpen }) => {
  const router = useRouter();
  const activeClass = 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md py-1 px-2';
  const { t } = useTranslation('common');

  return (
    <div
      className={`${
        openMenu ? 'translate-x-0 ' : 'translate-x-full'
      } fixed w-3/4 bg-white/95 h-screen top-0 right-0 duration-700 ease-in-out`}
    >
      <FaWindowClose
        className='text-black absolute top-4 right-3 text-3xl cursor-pointer'
        onClick={handleOpen}
      />
      <div className='mt-20 text-center text-3xl flex flex-col gap-10'>
        <Link
          href='/'
          className={router.pathname === '/' ? activeClass : 'text-black'}
          onClick={handleOpen}
        >
          {t('header.home')}
        </Link>
        <Link
          href='/sobre-mi'
          className={router.pathname === '/sobre-mi' ? activeClass : 'text-black'}
          onClick={handleOpen}
        >
          {t('header.about')}
        </Link>
        <Link
          href='/proyectos'
          className={router.pathname === '/proyectos' ? activeClass : 'text-black'}
          onClick={handleOpen}
        >
          {t('header.projects')}
        </Link>
        <Link
          href='/resumen'
          className={router.pathname === '/resumen' ? activeClass : 'text-black'}
          onClick={handleOpen}
        >
          {t('header.resume')}
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
