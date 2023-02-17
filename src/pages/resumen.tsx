import Experience from '@/components/cards/Experience';
import Interest from '@/components/cards/Interest';
import Banner from '@/components/general/Banner';
import {
  faComment,
  faPeopleArrows,
  faGear,
  faPeopleGroup,
  faDatabase,
} from '@fortawesome/free-solid-svg-icons';

import {
  faReact,
  faVuejs,
  faNodeJs,
  faAws,
  faShopify,
  faWordpress,
  faBootstrap,
  faGithub,
  faHtml5,
  faCss3,
  faJs,
} from '@fortawesome/free-brands-svg-icons';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';

const Resumen = () => {
  const { t } = useTranslation('common');
  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return fecha + random;
  };

  const education = [
    {
      id: generarId(),
      years: '2013-2019',
      title: 'Escuela Superior de Cómputo (ESCOM-IPN)',
      description: t('resume.engineer'),
    },
    {
      id: generarId(),
      years: '2018',
      title: 'DevF',
      description: t('resume.red'),
    },
    {
      id: generarId(),
      years: '2018',
      title: 'DevF',
      description: t('resume.black'),
    },
  ];
  const labor = [
    {
      id: generarId(),
      years: '2018-2019',
      title: t('resume.seo'),
      name: 'Sube Agencia Digital',
      description: t('resume.seoDescription'),
    },
    {
      id: generarId(),
      years: '2019-2022',
      title: t('home.developer'),
      name: 'Raccoon Studio',
      description: t('resume.raccoon'),
    },
  ];
  const softSkills = [
    {
      icon: faComment,
      text: t('resume.communication'),
    },
    {
      icon: faPeopleArrows,
      text: t('resume.teamwork'),
    },
    {
      icon: faGear,
      text: t('resume.adaptability'),
    },
    {
      icon: faPeopleGroup,
      text: t('resume.leadership'),
    },
  ];
  const technicalSkills = [
    {
      icon: faReact,
      text: 'ReactJS',
    },
    {
      icon: faVuejs,
      text: 'VueJS',
    },
    {
      icon: faNodeJs,
      text: 'NodeJS',
    },
    {
      icon: faAws,
      text: 'AWS',
    },
    {
      icon: faShopify,
      text: 'Shopify',
    },
    {
      icon: faWordpress,
      text: 'Wordpress',
    },
    {
      icon: faBootstrap,
      text: 'Bootstrap',
    },
    {
      icon: faDatabase,
      text: 'MongoDB',
    },
    {
      icon: faGithub,
      text: 'Github',
    },
    {
      icon: faHtml5,
      text: 'Html5',
    },
    {
      icon: faCss3,
      text: 'Css3',
    },
    {
      icon: faJs,
      text: 'JS',
    },
  ];
  return (
    <>
      <Banner title={t('resume.title')} />
      <div className='grid grid-cols-2 my-20 justify-center gap-10 md:gap-0'>
        <div className='col-span-2'>
          <p className='text-center text-white md:pb-20 text-3xl md:text-5xl font-bold'>
            {t('resume.experience')}
          </p>
        </div>
        <div className=' col-span-2 md:col-span-1'>
          <Experience title={t('resume.education')} timeLine={education} />
        </div>
        <div className='col-span-2 md:col-span-1'>
          <Experience title={t('resume.work')} timeLine={labor} />
        </div>
        <div className='col-span-2 mt-20'>
          <p className='text-center text-white text-3xl md:mt-0 md:text-5xl font-bold'>
            {t('resume.softSkills')}
          </p>
        </div>
        <div className='col-span-2 my-10 px-10'>
          <div className='grid gap-7 grid-cols-2 md:grid-cols-4 justify-center items-center'>
            {softSkills.map((skill) => (
              <Interest icon={skill.icon} text={skill.text} key={skill.text} />
            ))}
          </div>
        </div>
        <div className='col-span-2 mt-0 md:mt-20'>
          <p className='text-center text-white text-3xl md:mt-0 md:text-5xl font-bold'>
            {t('resume.technicalSkills')}
          </p>
        </div>
        <div className='col-span-2 my-10 px-10'>
          <div className='grid gap-7 grid-cols-2 md:grid-cols-4 justify-center items-center'>
            {technicalSkills.map((skill) => (
              <Interest icon={skill.icon} text={skill.text} key={skill.text} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Resumen;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ? locale : '', ['common'])),
    },
  };
};
