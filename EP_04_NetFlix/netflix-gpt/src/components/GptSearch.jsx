import GptMovieSuggestions from "./GptMovieSuggestions"
import GptSearchBar from "./GptSearchBar"

const GptSearch = () => {
  return (
    <div className="h-[100vh]  bg-cover bg-center"
      style={{ backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_large.jpg')" }}>
      <GptSearchBar />
      <GptMovieSuggestions />

    </div>
  )
}

export default GptSearch