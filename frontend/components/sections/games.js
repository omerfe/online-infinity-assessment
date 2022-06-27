import React from "react";
import NextImage from "../elements/image";

const Games = ({ data }) => {
  return (
    <main className="bg-[#5dc4ea] py-48">
      <div className="container">
          <h1 className="text-white uppercase font-bold text-7xl text-center">
            {data.title}
          </h1>
          <ul className="flex flex-row items-center justify-center gap-8 mt-28">
            {data.gameLinks.map((link) => (
              <li className={link.text !== "Arcade" ? "text-white uppercase font-bold text-2xl" : "border-b-4 border-white text-white uppercase font-bold text-2xl"} key={link.id}>
                {link.text}
              </li>
            ))}
          </ul>
          <div className="flex flex-row items-center justify-center gap-8 mt-10">
            {data.cards.map((card) => (
              <div className="flex flex-col gap-2 mt-10" key={card.id}>
                <div className="w-full h-auto">
                  <NextImage width="480" height="410" media={card.img} />
                </div>
                <div className="ml-10">
                    <h2 className="uppercase text-lg">{card.description}</h2>
                    <h1 className="uppercase text-5xl font-bold">{card.title}</h1>
                    <div className="flex flex-row items-center gap-2 mt-5">
                      <div className="w-10 h-auto">
                        <NextImage media={card.userIcon} />
                      </div>
                      <h2 className="text-3xl">6</h2>
                      <div className="w-10 h-auto">
                        <NextImage media={card.ticketIcon} />
                      </div>
                      <h2 className="text-3xl">Ja</h2>
                    </div>
                </div>
                <div className="w-96 h-auto ml-5">
                  <NextImage media={card.divider} />
                </div>
              </div>
            ))}
          </div>
      </div>
    </main>
  );
};

export default Games;
