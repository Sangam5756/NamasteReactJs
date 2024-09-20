const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute aspect-video  pt-[15%] text-white   px-20  bg-gradient-to-r from-black">      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">{title}</h1>
      <p className="py-6 w-full sm:w-3/4 md:w-1/2 lg:w-1/4">{overview}</p>
      <div className="">
        <button className="bg-white text-black px-6  py-2 md:py-4 md:text-xl  rounded-lg">
          ► Play
        </button>
        <button className="bg-white text-black px-6 sm:px-8  py-2 md:py-4 text-base  md:text-xl rounded-lg mx-2">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
