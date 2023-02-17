import Project from '@/components/cards/Project';
import Banner from '@/components/general/Banner';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const Proyectos = () => {
  const { t } = useTranslation('common');
  const projects = [
    {
      title: 'Oleum Vitae',
      link: 'https://oleumvitae.com.mx/',
      img: '/img/OleumVitae.png',
    },
    {
      title: 'Qveggie',
      link: 'https://www.qveggie.com/',
      img: '/img/QVeggie.png',
    },
    {
      title: 'Crepini',
      link: 'https://crepiniplantbased.com/',
      img: '/img/Crepini.png',
    },
    {
      title: 'Deliver México',
      link: 'https://delivermexico.com.mx/',
      img: '/img/Deliver.png',
    },
  ];
  return (
    <>
      <div className=''>
        <Banner title={t('projects.title')} />
        <div className='grid grid-cols-1 md:grid-cols-2 md:px-10 my-16 md:my-24 gap-10'>
          {projects.map((project) => (
            <Project key={project.title} project={project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Proyectos;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ? locale : '', ['common'])),
    },
  };
};
