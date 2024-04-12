import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import catDb from "../Cats/cats.json";

function CatsInfo() {
  const { name } = useParams();
  const [catState, setCatsData] = useState();

  useEffect(() => {
    const findInDb = Object.values(catDb).find((cat) => cat.name === name);
    setCatsData(findInDb);
  }, [name]);

  return (
    <>
      {catState ? (
        <div>
          <h1>{catState.name}</h1>
          <img src={catState.image} alt="cat" />
          <p>Race: {catState.race}</p>
          <p>Color: {catState.color}</p>
          <p>Weight: {catState.weight} kg</p>
          <p>Age: {catState.age}</p>
          <p>Location: {catState.location}</p>
          <Link to="/shop">
            <button>Return</button>
          </Link>
          <Link to={`/adocao/${catState.name}`}>
            <button>Adopt Me?</button>
          </Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default CatsInfo;
