import Project from '@/components/cards/Project';
import Banner from '@/components/general/Banner';

const Proyectos = () => {
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
        <Banner title='Proyectos' />
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
