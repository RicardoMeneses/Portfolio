import Project from '@/components/cards/Project';
import Banner from '@/components/general/Banner';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const Proyectos = () => {
  const { t } = useTranslation('common');
  const projects = [
    {
      title: 'RaccoonDev Studio',
      link: 'https://raccoondev.studio/',
      img: '/img/RaccoonDev.webp',
      tech: ['NextJS', 'ReactJS', 'NodeJS', 'Bootstrap'],
    },
    {
      title: 'Oleum Vitae',
      link: 'https://oleumvitae.com.mx/',
      img: '/img/OleumVitae.webp',
      tech: ['NuxtJS', 'VueJS', 'Shopify', 'NodeJS', 'Bootstrap'],
    },
    {
      title: 'Qveggie',
      link: 'https://www.qveggie.com/',
      img: '/img/QVeggie.webp',
      tech: ['NuxtJS', 'VueJS', 'Worpdress', 'NodeJS', 'Vuetify'],
    },
    {
      title: 'Crepini',
      link: 'https://crepiniplantbased.com/',
      img: '/img/Crepini.webp',
      tech: ['NuxtJS', 'VueJS', 'Worpdress', 'NodeJS', 'Vuetify'],
    },
    {
      title: 'Deliver México',
      link: 'https://delivermexico.com.mx/',
      img: '/img/Deliver.webp',
      tech: ['NuxtJS', 'VueJS', 'GraphQl', 'Bootstrap'],
    },
    {
      title: 'Colectivo Ahuejote',
      link: 'https://www.colectivoahuejote.mx/',
      img: '/img/Ahuejote.webp',
      tech: ['NuxtJS', 'VueJS', 'Worpdress', 'NodeJS', 'Vuetify'],
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
