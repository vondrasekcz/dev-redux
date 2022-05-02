import { useState, ChangeEventHandler, } from 'react';

import { useStoreDispatch, useStoreSelector, } from '../../redux/hooks';
import { incremented, decremented, amountAdded, } from '../../redux/counter/counterSlice';


const BasicCounter = () => {
  const [ inputValue, changeInputValue, ] = useState<string>('');
  const handleInputValue: ChangeEventHandler<HTMLInputElement> = (e) => {
    changeInputValue(e.target.value);
  }

  const count = useStoreSelector((state) => state.counter.value);
  const dispatch = useStoreDispatch();

  const handlePlus = () => dispatch(incremented());
  const handleMinus = () => dispatch(decremented());
  const handleAddAmount = () => {
    const parsedValue = parseFloat(inputValue);
    if (parsedValue) dispatch(amountAdded(parsedValue));
  };


  return (
    <div>
      <h2>BasicCounter</h2>
      <div>
        <button
          onClick={handlePlus}
        >
          Plus
        </button>
        <span
          style={{
            fontWeight: 'bold',
          }}
        >
          {count}
        </span>
        <button
          onClick={handleMinus}
        >
          Minus
        </button>
      </div>
      <div>
        <input
          value={inputValue}
          onChange={handleInputValue}
        />
        <button
          onClick={handleAddAmount}
        >
          Add
        </button>
      </div>
    </div>
  );
};


export default BasicCounter;
