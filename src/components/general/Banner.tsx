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
      <p className='text-white text-4xl md:text-6xl font-bold'>{title}</p>
    </div>
  );
};

export default Banner;
