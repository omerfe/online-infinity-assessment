import classNames from "classnames"
import NextImage from "../elements/image"
import Video from "../elements/video"
import CustomLink from "../elements/custom-link"

const FeatureRowsGroup = ({ data }) => {
  return (
    <div className="container relative top-40 flex flex-col gap-12 py-80">
      {data.features.map((feature, index) => (
        <div
          className={classNames(
            // Common classes
            "flex flex-col justify-start md:justify-between md:items-center gap-10",
            {
              "lg:flex-row": index % 2 === 0,
              "lg:flex-row-reverse": index % 2 === 1,
            }
          )}
          key={feature.id}
        >
          {/* Media section */}
          <div className="w-full sm:9/12 max-h-full">
            {/* Images */}
            {feature.media.data.attributes.mime.startsWith("image") && (
              <div className="w-full h-auto">
                <NextImage media={feature.media} />
              </div>
            )}
            {/* Videos */}
            {feature.media.data.attributes.mime.startsWith("video") && (
              <Video
                media={feature.media}
                className="w-full h-auto"
                autoPlay
                controls={false}
              />
            )}
          </div>
          {/* Text section */}
          <div className="w-full items-center lg:pr-6 text-lg">
            <h3 className="text-[#27C1CB] text-7xl font-extrabold">{feature.title}</h3>
            <p className="my-6 text-[#27C1CB] text-base">{feature.description}</p>
            <CustomLink link={feature.link}>
              <div className="text-blue-600 with-arrow hover:underline">
                {feature.link.text}
              </div>
            </CustomLink>
          </div>
          
        </div>
      ))}
    </div>
  )
}

export default FeatureRowsGroup
