interface Props {
  title: string;
}

const Banner: React.FC<Props> = ({ title }) => {
  return (
    <div
      className={
        'bg-[url("/img/bg-home.jpg")] h-80 bg-cover bg-right flex justify-center items-center'
      }
    >
      <p className='bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text text-4xl md:text-6xl md:leading-loose font-bold'>
        {title}
      </p>
    </div>
  );
};

export default Banner;
