import "../styles/Card.css";
import technologies from "../data/technologiesData";

type technologyType = keyof typeof technologies;

type PropsHability = {
  prop: technologyType;
};

export function CardHability({ prop }: PropsHability) {
  const technology = technologies[prop];
  if (!technology) {
    return <div>Error: Tecnologia no encontradas</div>;
  }
  return (
    <div className="card">
      <img src={technology.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{technology.title}</h5>
      </div>
    </div>
  );
}

// function CardProject({ img, title }: PropsHability) {
//   return (
//     <div className="card">
//       <img src={img} className="card-img-top" alt="..." />
//       <div className="card-body">
//         <h5 className="card-title">{title}</h5>
//       </div>
//     </div>
//   );
// }
