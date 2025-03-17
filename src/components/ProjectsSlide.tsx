import { UpArrow } from "./iconsComponents/UpArrow";

interface ProjectSlideProps {
  id: string;
  imageSrc: string;
  title: string;
  description: string;
  skills: string[];
  knowHow: string[];
  onClick: () => void;
}

export const ProjectSlide: React.FC<ProjectSlideProps> = ({
  id,
  imageSrc,
  title,
  description,
  skills,
  knowHow,
  onClick,
}) => {
  return (
    <div
      id={id}
      className="carousel-item w-full cursor-pointer relative rounded-xl overflow-hidden shadow-md"
      onClick={onClick}
    >
      <img src={imageSrc} alt={title} className="h-full w-full rounded-xl" />
      <div className="absolute text-lighttext w-full blur-on-hover rounded-xl">
        <UpArrow />
        <h5 className="text-3xl font-bold mt-7 m-2">{title}</h5>
        <p className="mt-3 mx-2 text-justify">{description}</p>
        <div className="font-semibold m-4">
          <p>Compétences acquises : </p>
          {skills.map((skill, index) => (
            <div key={index} className="badge badge-info m-1">
              {skill}
            </div>
          ))}
        </div>
        <div className="font-semibold m-4">
          <p>Savoir-faire : </p>
          {knowHow.map((item, index) => (
            <div key={index} className="badge badge-accent m-1">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};