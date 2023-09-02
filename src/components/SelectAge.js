import React, { useState } from 'react';

const SelectAge = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  const options = Array.from({ length: 31 }, (_, index) => 15 + index); // Create an array of numbers from 15 to 45

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className='input-wrap'>
      <label for="selectage">Odsloužené roky</label>
        
      <select id="selectage"value={selectedValue} onChange={handleChange}>
        {options.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectAge;

