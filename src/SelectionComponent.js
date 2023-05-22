import { useState } from "react";
import { Input } from 'antd';
import Select from "react-dropdown-select";

const options = [
  {
    value: 1,
    label: "Up",
  },
  {
    value: 2,
    label: "Down",
  },
];

const SelectionComponent = (props) => {
  const {
    selectedOption,
    viewInputName,
    setViewInputName,
    tableInputName,
    setTableInputName,
    tableInputNumber,
    setTableInputNumber,
    selectedTableValue,
    setSelectedTableValue,
    type,
    setType,
  } = props;

  return (
    <div className={"selection-wrapp"}>
      {selectedOption[0]?.label === "View" ? (
        <div className={"view-styles"}>
          <Input
            value={viewInputName}
            type={"text"}
            onChange={(e) => setViewInputName(e.target.value)}
            className={"margin-left-2"}
            placeholder={"Enter Name"}
          />
          <input
            type={"button"}
            value={"Submit"}
            onClick={() => {
              setType("V");
            }}
            className={"margin-left-2 submit-btn"}
          />
        </div>
      ) : props?.selectedOption[0]?.label === "Table" ? (
        <div className={"table-styles"}>
          <input
            value={tableInputName}
            type={"text"}
            onChange={(e) => setTableInputName(e.target.value)}
            className={"margin-left-2"}
            placeholder={"Enter Name"}
          />
          <input
            value={tableInputNumber}
            type={"number"}
            onChange={(e) => setTableInputNumber(e.target.value)}
            className={"margin-left-2"}
            placeholder={"Enter Level"}
          />
          <Select
            options={options}
            onChange={(values) => setSelectedTableValue(values)}
            className={"margin-left-2"}
            placeholder={"Select Traverse Direction"}
          />
          <input
            type={"button"}
            value={"Submit"}
            onClick={() => {
              setType("T");
            }}
            className={"margin-left-2 submit-btn"}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SelectionComponent;
