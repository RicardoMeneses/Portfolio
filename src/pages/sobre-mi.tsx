import Banner from '@/components/general/Banner';
import Interest from '@/components/cards/Interest';
import Image from 'next/image';
import {
  faTableTennis,
  faPlane,
  faCode,
  faGamepad,
  faBook,
  faMusic,
  faFutbol,
  faFilm,
} from '@fortawesome/free-solid-svg-icons';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';

const SobreMi = () => {
  const { t } = useTranslation('common');
  const interests = [
    {
      icon: faCode,
      text: t('about.programming'),
    },
    {
      icon: faTableTennis,
      text: t('about.pingPong'),
    },
    {
      icon: faPlane,
      text: t('about.travel'),
    },
    {
      icon: faGamepad,
      text: t('about.games'),
    },
    {
      icon: faBook,
      text: t('about.read'),
    },
    {
      icon: faMusic,
      text: t('about.music'),
    },
    {
      icon: faFutbol,
      text: t('about.soccer'),
    },
    {
      icon: faFilm,
      text: t('about.cinema'),
    },
  ];
  return (
    <>
      <Banner title={t('about.title')} />
      <div className='grid grid-cols-2 justify-center items-center text-white p-10 md:p-0'>
        <div className=' col-span-2 md:col-span-1 relative w-full h-[28rem] flex justify-center items-center'>
          <div className='bounce-top border-4 rounded-2xl border-[#222F42] absolute top-[5rem] right-[3rem] md:right-[6rem] lg:right-[16rem] h-80 w-64'></div>
          <Image
            className='bounce-top h-80 w-64 rounded-2xl object-cover z-10 shadow-md'
            src='/img/me.png'
            alt='Ricardo Meneses'
            width={300}
            height={200}
          />
        </div>
        <div className='col-span-2 md:col-span-1 text-center md:text-left text-focus-in'>
          <p className='font-bold text-3xl'>Ricardo Meneses Morales</p>
          <p>{t('about.developer')}</p>
          <p className='md:w-3/4 mt-8'>{t('about.me')}</p>
        </div>
        <div className='col-span-2'>
          <p className='text-center text-3xl mt-5 md:mt-0 md:text-5xl font-bold'>
            {t('about.interests')}
          </p>
        </div>
        <div className='col-span-2 my-10 md:px-10'>
          <div className='grid gap-7 grid-cols-2 md:grid-cols-4 justify-center items-center'>
            {interests.map((interest) => (
              <Interest icon={interest.icon} text={interest.text} key={interest.text} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SobreMi;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ? locale : '', ['common'])),
    },
  };
};
