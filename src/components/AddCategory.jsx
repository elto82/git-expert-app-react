import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {

  const [ inputValue, setInputValue ] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
    //console.log(inputValue);
  };

  const onSutmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    // setCategories(cat => [ inputValue, ...cat ]);
    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={onSutmit} aria-label='form'>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />

    </form>
  );
};


AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}; 