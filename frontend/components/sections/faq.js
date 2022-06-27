import React, { useState } from "react";

const FaQs = ({ data }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((current) => !current);
  };

  return (
    <section className="mt-20 flex bg-gray-100">
      <div className="py-32 px-32">
        <h1 className="text-black text-8xl font-bold">{data.title}</h1>
        <h1 className="text-[#5dc4ea] font-bold text-8xl">ALGEMEEN</h1>
        <div className="grid grid-cols-2 gap-14 mt-20">
          {data.cards.map((card) => (
            <div
              key={card.id}
              className="flex flex-col w-[750px] bg-white border-2 border-gray-100 px-10 py-10"
            >
              <div className="flex flex-row items-start justify-between">
                <h1 className="text-2xl max-w-xl font-bold">{card.question}</h1>
                <button
                  type="button"
                  onClick={handleClick}
                  className="text-4xl font-bold"
                >
                  {card.isToggled ? "x" : "+"}
                </button>
              </div>
              <div className={card.isToggled ? "mt-10" : "hidden"}>
                <p>{card.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaQs;
