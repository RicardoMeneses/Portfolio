import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Link from 'next/link';

interface Props {
  icon: IconProp;
  href: string;
}

const IconLink: React.FC<Props> = ({ icon, href }) => {
  return (
    <Link
      className='rounded-[50%] w-[50px] h-[50px] bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white hover:from-white hover:to-white hover:text-cyan-500 hover:scale-110 transition-all duration-200 cursor-pointer'
      href={href}
      target='_blank'
      aria-label='social-link'
    >
      <FontAwesomeIcon icon={icon} className='text-2xl' />
    </Link>
  );
};

export default IconLink;
