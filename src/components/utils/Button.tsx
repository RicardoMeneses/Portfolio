import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Link from 'next/link';

interface Props {
  text: string;
  haveIcon?: boolean;
  icon?: IconProp;
}

const Button: React.FC<Props> = ({ text, haveIcon, icon }) => {
  return (
    <Link
      href='https://drive.google.com/file/d/1amghWvNoJJrCiAWk6G75jEArE9unplMU/view?usp=share_link'
      target='_blank'
      className='rounded-[29px] bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-white hover:to-white hover:text-cyan-500 transition-all duration-300 px-8 py-2 text-1xl flex w-3/4 md:w-1/3 justify-center mx-auto md:mx-0 items-center'
    >
      {text}
      {haveIcon && icon && <FontAwesomeIcon icon={icon} className='ml-2' />}
    </Link>
  );
};

export default Button;
