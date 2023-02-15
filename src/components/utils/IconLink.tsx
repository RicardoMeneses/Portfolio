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
      className='rounded-[50%] w-[50px] h-[50px] bg-[#1F2A42] flex items-center justify-center text-cyan-500 cursor-pointer drop-shadow-[-2px_10px_3px_rgba(0,0,0,0.25)]'
      href={href}
      target='_blank'
    >
      <FontAwesomeIcon icon={icon} className='text-2xl' />
    </Link>
  );
};

export default IconLink;
