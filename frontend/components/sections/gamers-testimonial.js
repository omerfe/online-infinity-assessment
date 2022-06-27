import React from "react";
import NextImage from "../elements/image";

const GamersTestimonial = ({ data }) => {
  return (
    <main className="flex">
      <div className="w-full h-screen absolute overflow-hidden">
        <NextImage media={data.bgImg} />
      </div>
      <div className="container z-10 py-40">
        <h1 className="text-6xl text-center font-bold text-[#5dc4ea]">
          {data.title}
        </h1>
        <div className="flex flex-row justify-center gap-6">
          {data.cards.map((card) => (
            <div key={card.id} className="flex flex-col gap-4 border-2 border-[#5dc4ea] bg-[#5e96b4] bg-opacity-70 rounded-3xl max-w-xl px-10 py-10 mt-20">
              <div className="text-[#f6fd37] text-5xl">★★★★★</div>
              <h2 className="text-gray-300 text-2xl font-light mt-5">
                {card.content}
              </h2>
              <div className="flex flex-row items-center gap-4 mt-5">
                <div className="rounded-full bg-[#5dc4ea] w-20 h-20"></div>
                <div>
                  <h1 className="text-white text-2xl font-bold uppercase">
                    {card.auther}
                  </h1>
                  <h2 className="text-white text-xl uppercase">{card.role}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default GamersTestimonial;