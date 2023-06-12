import "./Card.css";
const Card = (props) => {
  return (
    <div className="Card">
      <p className="pokeName">{props.name}</p>
      <img src={props.img} />
      <p className="pokeType">Type: {props.type}</p>
      <p className="pokeExp">EXP: {props.exp}</p>
    </div>
  );
};

export default Card;
