import { FC } from "react";
import React, { useState } from "react";
import { ISelectProps } from "./Select.d";

const Select: FC<ISelectProps> = ({itemList}) => {
  const [selectedOption, setSelectedOption] = useState<String>();
  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
  };

  return (
    <div>
      <select 
        onChange={selectChange}
        defaultValue={'DEFAULT'}
        className="form-select custom-arrow"
        >
        <option value="DEFAULT" disabled>
          Select shop
        </option>
        {itemList.map((item, key) => {
          return (
            <option key={key} value={item.id}>
              {item.name}
            </option>
          );
        })}
      </select>
      {selectedOption && <h2>{selectedOption}</h2>}
    </div>
  );
};
export default Select;
