import Markdown from "react-markdown"
import { getButtonAppearance } from "utils/button"
import ButtonLink from "../elements/button-link"
import NextImage from "../elements/image"

const Hero = ({ data }) => {
  return (
    
    <main className="flex">
      <div className="w-full h-screen absolute top-0 overflow-hidden">
        <NextImage media={data.picture} />
      </div>
      {/* Left column for content */}
      <div className="container relative pl-40 pt-56 w-full overflow-hidden">
        {/* Big title */}
        <h1 className="text-9xl font-bold text-white">{data.title}</h1>
        {/* Hero section label */}
        <p className="uppercase text-9xl font-bold text-white">{data.label}</p>
        {/* Description paragraph */}
        <p className="text-xl mb-6 mt-6 text-white">{data.description}</p>
        {/* Buttons row */}
        <div className="flex flex-row flex-wrap gap-4">
          {data.buttons.map((button) => (
            <ButtonLink
              button={button}
              appearance={getButtonAppearance(button.type, "white-outline")}
              key={button.id}
            />
          ))}
        </div>
        {/* Small rich text */}
        {/* <div className="text-base md:text-sm mt-4 sm:mt-3 rich-text-hero">
          <Markdown>{data.smallTextWithLink}</Markdown>
        </div> */}
      </div>
      
    </main>
  )
}

export default Hero