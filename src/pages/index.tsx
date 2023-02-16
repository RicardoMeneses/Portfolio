import Button from '@/components/utils/Button';
import IconLink from '@/components/utils/IconLink';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    <>
      <div className='home-container__bg'>
        <div className='container mx-auto h-screen'>
          <div className='h-full flex flex-col md:flex-row items-center justify-center md:justify-start px-7 md:px-0'>
            <div className=' text-center md:text-start'>
              <p className='text-white text-3xl md:text-4xl mb-2'>Hola Mundo! 👋🏻</p>
              <p className='text-white text-5xl md:text-6xl font-bold mb-2'>
                Soy{' '}
                <span className='bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text'>
                  Ricardo Meneses
                </span>
              </p>
              <div className='flex flex-col md:flex-row justify-center md:justify-start items-center mb-5 gap-3'>
                <p className='text-white text-2xl md:text-3xl'>Desarrollador Web Full Stack</p>
                <TypeAnimation
                  sequence={['Front-end', 1000, 'Back-end', 1000]}
                  //  Replacing previous Text
                  style={{
                    fontSize: '1.875rem',
                    color: '#fff',
                  }}
                  wrapper='p'
                  repeat={Infinity}
                />
              </div>
              <Button text='Descargar CV' haveIcon icon={faDownload} />
              <div className='flex gap-4 mt-7 w-full md:w-2/6 justify-center md:justify-start'>
                <IconLink
                  icon={faLinkedin}
                  href='https://www.linkedin.com/in/ricardo-meneses-morales/'
                />
                <IconLink icon={faGithub} href='https://github.com/RicardoMeneses' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
