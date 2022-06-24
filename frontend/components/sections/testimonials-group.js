import classNames from "classnames";
import NextImage from "../elements/image";
import { getButtonAppearance } from "../../utils/button";
import Button from "../elements/button";

const TestimonialsGroup = ({ data }) => {

  return (
    <section className="text-center text-lg bg-gray-100 py-36">
      <h1 className="text-6xl font-bold mb-4">{data.title}</h1>
      <p className="text-gray-400 mt-12 mb-4">{data.description}</p>

      {data.testimonials.length > 1 && (
        <div className="flex flex-row gap-4 mt-10 justify-center">
          {data.testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="px-8 py-8 bg-white sm:px-12 sm:pt-12 sm:pb-4 flex flex-col items-center"
            >
              <NextImage width="150" height="130" media={testimonial.logo} />
              <p className="mt-2 font-bold text-3xl text-[#27C1CB]">
                {testimonial.text}
              </p>
              <ul className="mt-10">
                {data.feature.map((feature) => (
                  <div
                    key={feature.id}
                    className="flex flex-row items-center gap-3 mb-3"
                  >
                    <div className="rounded-full px-2 bg-[#42b0c4] justify-center items-center">
                      ✓
                    </div>
                    <li>{feature.name}</li>
                  </div>
                ))}
              </ul>
              <div className="mt-12">
                <Button
                  button={data.button[0]}
                  appearance={getButtonAppearance(data.button[0].type, "light")}
                  type="button"
                />
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="mt-20">
        <Button
          button={data.button[1]}
          appearance={getButtonAppearance(data.button[1].type, "light")}
          type="button"
        />
      </div>
    </section>
  );
};

export default TestimonialsGroup;
