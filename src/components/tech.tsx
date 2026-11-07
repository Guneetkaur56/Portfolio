import { TECHNOLOGIES } from "../constants";
import { SectionWrapper } from "../hoc";

type TechBallProps = {
  name: string;
  icon: string;
};

const TechBall = ({ name, icon }: TechBallProps) => (
  <div className="w-28 h-28 flex items-center justify-center">
    <div
      className="relative w-24 h-24 rounded-full flex items-center justify-center"
      style={{
        background:
          "radial-gradient(circle at 32% 28%, #efe6d4 0%, #ddd0b8 52%, #c4b49a 100%)",
        boxShadow: [
          "inset 5px 5px 12px rgba(255, 248, 235, 0.28)",
          "inset -8px -10px 16px rgba(55, 42, 28, 0.22)",
          "0 12px 20px -8px rgba(0, 0, 0, 0.4)",
        ].join(", "),
      }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute top-3 left-5 h-5 w-7 rounded-full bg-[#f5efe3]/25 blur-[2px]"
      />
      <img
        src={icon}
        alt={name}
        className="relative z-10 w-12 h-12 object-contain"
      />
    </div>
  </div>
);

export const Tech = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {TECHNOLOGIES.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <TechBall name={technology.name} icon={technology.icon} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
