import { useState } from 'react';

function UserInput(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);

  function handleValueChange({ target }) {
    setValue(target.value);
  }

  return [value, handleValueChange];
}

export default UserInput;
