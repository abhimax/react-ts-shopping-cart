import { FC } from "react";
import React, { useState } from "react";
import { ISelectProps } from "./Select.d";
import { IItem } from "../../models/IItem";

interface IStates {
    itemList: IItem[];
}

const Select: FC<IStates> = ({itemList}) => {
  const [selectedOption, setSelectedOption] = useState<String>();
  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
  };
  {
  }
  return (
    <div>
      <select onChange={selectChange} defaultValue="Select shop">
        <option selected disabled>
          Choose one
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
