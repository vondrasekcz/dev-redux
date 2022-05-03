import { useState, ChangeEventHandler, useEffect, } from 'react';
import { useStoreDispatch, useStoreSelector, } from '../../redux/hooks';
import { fetchAsyncThunkBreeds, } from '../../redux/asyncThunk/asyncThunkSlice';


interface FetchDogsProps {
  numBreeds: number,
}


const FetchBreeds = ({
  numBreeds,
}: FetchDogsProps) => {
  const { loading, error, data, } = useStoreSelector((state) => state.asyncThunk);
  const dispatch = useStoreDispatch();

  useEffect(
    () => {
      dispatch(fetchAsyncThunkBreeds(numBreeds));
    },
    [ numBreeds, dispatch, ],
  );



  if (loading) return <div>Loading</div>;
  if (error || !data) {
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


const AsyncThunk = () => {
  const [ numBreeds, setNumBreeds, ] = useState<number>(10);

  const handleNumBreeds: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const newNum = parseInt(e.target.value);
    if (newNum) setNumBreeds(newNum);
  };

  return (
    <div>
      <h2>AsyncThunk</h2>
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
      <FetchBreeds
        numBreeds={numBreeds}
      />
    </div>
  );
};


export default AsyncThunk;
