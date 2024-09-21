const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute bottom-20 left-4 sm:left-8 md:left-12 lg:left-16 text-white z-10">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">{title}</h1>
      <p className="py-6 w-full sm:w-3/4 md:w-1/2 lg:w-1/3">{overview}</p>
      <div className="flex sm:flex-row items-start sm:items-center">
        <button className="bg-white hover:bg-slate-300 text-black px-6 py-2 md:py-4 md:text-xl rounded-lg mb-2 sm:mb-0">
          ► Play
        </button>
        <button className="bg-gray-800 text-white hover:bg-gray-700 px-6 py-2 md:py-4 text-base sm:text-lg md:text-xl rounded-lg mx-2">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
