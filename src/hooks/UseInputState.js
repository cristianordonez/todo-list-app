import { useState } from 'react';

//* handles using input from forms or user input
function useInputState(initialValue) {
  const [value, setValue] = useState(initialValue);
  const handleChange = e => {
    setValue(e.target.value);
  };
  //resets the value within the input form
  const reset = () => {
    setValue("");
  };
  return [value, handleChange, reset];
}


export default useInputState;