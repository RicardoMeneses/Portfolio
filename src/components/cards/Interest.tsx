import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Props {
  icon: IconProp;
  text: string;
}

const Interest: React.FC<Props> = ({ icon, text }) => {
  return (
    <div className='text-white border-4 shadow-lg border-[#222F42] bg-[#131C30] rounded-2xl h-32 md:h-48 w-32 md:w-48 mx-auto flex flex-col justify-center items-center transition ease-in-out hover:scale-110'>
      <FontAwesomeIcon icon={icon} className=' text-3xl md:text-6xl' />
      <p className='mt-5 text-center'>{text}</p>
    </div>
  );
};

export default Interest;
