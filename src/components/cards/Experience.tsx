import TimeLine from './TimeLine';

interface Props {
  title: string;
  timeLine: TimeLineI[];
}

interface TimeLineI {
  id: string;
  years: string;
  title: string;
  name?: string;
  description: string;
}

const Experience: React.FC<Props> = ({ title, timeLine }) => {
  return (
    <div className='bg-white drop-shadow-[-10px_15px_3px_rgba(0,0,0,0.25)] h-auto w-3/4 mx-auto'>
      <div className='h-32 bg-gradient-to-r from-cyan-500 to-blue-500 text-white flex justify-center items-center drop-shadow-[0px_5px_3px_rgba(0,0,0,0.25)]'>
        <p className='text-3xl'>{title}</p>
      </div>
      <div className='p-5 md:p-11 flex flex-col gap-5'>
        {timeLine.map((experience) => (
          <TimeLine experience={experience} key={experience.id} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
