import Card from "../Card/Card";

const Cards = ({ characters, onClose }) => {
  return (
    <div>
      {characters.map(
        ({ id, name, status, origin, species, gender, image }) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              status={status}
              origin={origin.name}
              species={species}
              gender={gender}
              image={image}
              onClose={onClose}
            />
          );
        }
      )}
    </div>
  );
};

export default Cards;
