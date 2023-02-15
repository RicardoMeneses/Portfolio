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

const resumen = () => {
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
      description: 'Ing. en Sistemas Computacionales (Completé 178 créditos)',
    },
    {
      id: generarId(),
      years: '2018',
      title: 'DevF',
      description: 'Cinta roja en diseño de arquitecturas para crearaplicaciones Web',
    },
    {
      id: generarId(),
      years: '2018',
      title: 'DevF',
      description: 'Cinta negra en diseño de arquitecturas para crearaplicaciones Web',
    },
  ];
  const labor = [
    {
      id: generarId(),
      years: '2018-2019',
      title: 'Becario SEO',
      description: 'Posicionamiento WEB, Desarrollo Web, Revisión y corrección de metadatos.',
    },
    {
      id: generarId(),
      years: '2019-2022',
      title: 'Raccoon Studio',
      description:
        'Creación, implementación y administración de sitios Web desde cero, backend y frontend, E-Commerce, Uso de servicios en la nube con AWS, administración y gestión de servidores EC2',
    },
  ];
  const softSkills = [
    {
      icon: faComment,
      text: 'Comunicación',
    },
    {
      icon: faPeopleArrows,
      text: 'Trabajo en equipo',
    },
    {
      icon: faGear,
      text: 'Adaptabilidad',
    },
    {
      icon: faPeopleGroup,
      text: 'Liderazgo',
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
      <Banner title='Resumen' />
      <div className='grid grid-cols-2 my-20 justify-center gap-10 md:gap-0'>
        <div className='col-span-2'>
          <p className='text-center text-white pb-20 text-3xl mt-5 md:mt-0 md:text-5xl font-bold'>
            Experiencia
          </p>
        </div>
        <div className=' col-span-2 md:col-span-1'>
          <Experience title='Educación' timeLine={education} />
        </div>
        <div className='col-span-2 md:col-span-1'>
          <Experience title='Laboral' timeLine={labor} />
        </div>
        <div className='col-span-2 mt-20'>
          <p className='text-center text-white text-3xl md:mt-0 md:text-5xl font-bold'>
            Habilidades Blandas
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
            Habilidades Técnicas
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

export default resumen;
