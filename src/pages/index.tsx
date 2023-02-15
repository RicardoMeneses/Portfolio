import Button from '@/components/utils/Button';
import IconLink from '@/components/utils/IconLink';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className='home-container__bg'>
        <div className='container mx-auto h-screen'>
          <div className='h-full flex flex-col md:flex-row items-center justify-center md:justify-start px-7 md:px-0'>
            <div className=' text-center md:text-start'>
              <p className='text-white text-3xl md:text-4xl mb-2'>Hola!</p>
              <p className='text-white text-6xl md:text-5xl font-bold mb-2'>Soy Ricardo Meneses</p>
              <p className='text-white text-2xl md:text-3xl mb-8'>Desarrollador Web Full Stack</p>
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
