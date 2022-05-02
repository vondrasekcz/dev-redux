import { useState, ChangeEventHandler, } from 'react';
import { useFetchBreadsQuery, } from '../../redux/api/apiSlice';


interface FetchDogsProps {
  numBreeds: number,
}


const FetchDogs = ({
  numBreeds,
}: FetchDogsProps) => {
  const { data, isFetching, isError, error, } = useFetchBreadsQuery(
    numBreeds,
  );

  if (isFetching) return <div>Loading</div>;
  if (isError || !data) {
    return (
      <div>
        <pre>
          {JSON.stringify(error, null, 2)}
        </pre>
      </div>
    )
  };
  return (
    <div>
      <h3>Breeds</h3>
      <ul>
        {data.map((breed) => (
          <li
            key={breed.id}
          >
            {breed.name}
          </li>
        ))}
      </ul>
    </div>
  );
};


const Dogs = () => {
  const [ numBreeds, setNumBreeds, ] = useState<number>(10);

  const handleNumBreeds: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const newNum = parseInt(e.target.value);
    console.log('e.target.value', e.target.value);
    if (newNum) setNumBreeds(newNum);
  };

  return (
    <div>
      <h2>Dogs</h2>
      <p>count</p>
      <select
        value={numBreeds}
        onChange={handleNumBreeds}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
      <FetchDogs
        numBreeds={numBreeds}
      />
    </div>
  );
};


export default Dogs;
