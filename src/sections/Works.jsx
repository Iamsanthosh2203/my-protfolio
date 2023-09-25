import PiracyForEverything from "../assets/PiracyForEverything.png";
import Typerrr from "../assets/Typerrr.png";
import CalculatorApp from "../assets/CalculatorApp.png";
import ShareItLater from "../assets/ShareItLater.png";
import piggame from "../assets/piggame.png";
import GuessMyNumber from "../assets/GuessMyNumber!.png";
import PoeticQuoteGenerator from "../assets/PoeticQuoteGenerator.png";
import ShareMoney from "../assets/ShareMoney.png";

const works = [
  {
    id: 1,
    title: "Piracy For Everything",
    description: "A website that provides pirated content for free.",
    subtitle: "Directory Website",
    img: PiracyForEverything,
    link: "https://piracyforeverything.github.io/p4e/",
    flex: "start",
  },
  {
    id: 2,
    title: "Typerrr",
    description: "A web app that helps you improve your typing speed.",
    subtitle: "Web App",
    img: Typerrr,
    link: "https://iamsanthosh2203.github.io/typerrr/",
    flex: "start",
  },
  {
    id: 3,
    title: "Swift Calc",
    description: "A website that provides pirated content for free.",
    subtitle: "Simple Calculator",
    img: CalculatorApp,
    link: "https://iamsanthosh2203.github.io/calculator-app/",
    flex: "end",
  },
  {
    id: 4,
    title: "Enchant Scrolls",
    description: "A website that provides pirated content for free.",
    subtitle: "Parallax Website",
    img: ShareItLater,
    link: "https://iamsanthosh2203.github.io/parallax-website-midlead/",
    flex: "end",
  },
  {
    id: 5,
    title: "Piglet Dash",
    description: "A website that provides pirated content for free.",
    subtitle: "Game",
    img: piggame,
    link: "https://iamsanthosh2203.github.io/pig-game/",
    flex: "start",
  },
  {
    id: 6,
    title: "Guess Quest",
    description: "A website that provides pirated content for free.",
    subtitle: "Game",
    img: GuessMyNumber,
    link: "https://iamsanthosh2203.github.io/guessing-game-project/",
    flex: "start",
  },
  {
    id: 7,
    title: "AI Funny Generator",
    description: "A website that provides pirated content for free.",
    subtitle: "AI Web App",
    img: PoeticQuoteGenerator,
    link: "https://iamsanthosh2203.github.io/final-quote-generator/",
    flex: "end",
  },
  {
    id: 8,
    title: "Share Money",
    description: "A website that provides pirated content for free.",
    subtitle: "Web App",
    img: ShareMoney,
    link: "https://iamsanthosh2203.github.io/share-money/",
    flex: "end",
  },
];

function Works() {
  return (
    <section className="bg-[#101010] text-white px-8 md:px-24 py-8">
      <p className="my-9 text-2xl">My Works</p>
      {/* 1 */}
      <div className="grid md:grid-cols-2 md:grid-rows-4 grid-cols-1 grid-rows-1 gap-12">
        {works.map((work) => (
          <div
            onClick={() => window.open(work.link)}
            key={work.id}
            style={{ cursor: "pointer" }}
            className={`${
              work.flex === "end" ? "ml-0 md:ml-32" : ""
            } flex flex-col w-full md:w-[70%] h-96 bg-gray-500 grayscale hover:grayscale-0 transition-all duration-500`}
          >
            <div
              style={{
                height: "300px",
                backgroundImage: `url(${work.img})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <h3 className="ml-3 text-2xl mt-4">{work.title}</h3>
            <p className="ml-3 text-xl text-nav">{work.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Works;
