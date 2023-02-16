interface Props {
  experience: Experience;
}

interface Experience {
  years: string;
  title: string;
  description: string;
}

const TimeLine: React.FC<Props> = ({ experience }) => {
  return (
    <div className='bg-[#dff6ff] h-auto rounded-lg relative hover:shadow-md'>
      <div className='absolute top-6 rounded-tr-md rounded-br-md bg-[#ffe7cc] w-1/2'>
        <p className=' ml-6'>{experience.years}</p>
      </div>
      <div className='relative pt-16 pb-10 px-10'>
        <p className='font-bold mb-3'>{experience.title}</p>
        <p>{experience.description}</p>
      </div>
    </div>
  );
};

export default TimeLine;
