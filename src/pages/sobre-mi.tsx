import Banner from '@/components/general/Banner';
import Interest from '@/components/cards/Interest';
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

const sobreMi = () => {
  const interests = [
    {
      icon: faTableTennis,
      text: 'Ping Pong',
    },
    {
      icon: faPlane,
      text: 'Viajar',
    },
    {
      icon: faCode,
      text: 'Programación',
    },
    {
      icon: faGamepad,
      text: 'Video juegos',
    },
    {
      icon: faBook,
      text: 'Leer',
    },
    {
      icon: faMusic,
      text: 'Música',
    },
    {
      icon: faFutbol,
      text: 'Fútbol',
    },
    {
      icon: faFilm,
      text: 'Cine',
    },
  ];
  return (
    <>
      <Banner title='Sobre mí' />
      <div className='grid grid-cols-2 justify-center items-center text-white p-10 md:p-0'>
        <div className=' col-span-2 md:col-span-1 relative w-full h-[28rem] flex justify-center items-center'>
          <div className='bounce-top border-4 rounded-2xl border-[#222F42] absolute top-[5rem] right-[3rem] md:right-[16rem] h-80 w-64'></div>
          <img
            className='bounce-top h-80 w-64 rounded-2xl object-cover z-10 shadow-md'
            src='/img/ricardo.png'
            alt='Ricardo Meneses'
          />
        </div>
        <div className='col-span-2 md:col-span-1 text-center md:text-left text-focus-in'>
          <p className='font-bold text-3xl'>Ricardo Meneses Morales</p>
          <p>Desarrollador Web Full Stack</p>
          <p className='md:w-3/4 mt-8'>
            Desarrollador Web con más de tres años de experiencia en backend y frontend, en
            constante aprendizaje de habilidades y crecimiento profesional.
          </p>
        </div>
        <div className='col-span-2'>
          <p className='text-center text-3xl mt-5 md:mt-0 md:text-5xl font-bold'>
            Intereses y Hobbies
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

export default sobreMi;
