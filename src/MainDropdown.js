import { useState } from "react";
import Select from "react-dropdown-select";
import SelectionComponent from "./SelectionComponent";
import { Col, Row } from 'antd';
const options = [
  {
    value: 1,
    label: "View",
  },
  {
    value: 2,
    label: "Table",
  },
];

const MainDropdown = (props) => {
  // const [selectedValue, setSelectedValue] = useState("");
  const {
    optionValue,
    setOptionValue,
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
    <div className={"selection-wrapper"}>
      <Row>
        <Col>
      <Select
        options={options}
        onChange={(values) => setOptionValue(values)}
        className={"padding-right"}
      />
      </Col>
      <Col>
      
        <SelectionComponent
        selectedOption={optionValue}
        viewInputName={viewInputName}
        setViewInputName={setViewInputName}
        tableInputName={tableInputName}
        setTableInputName={setTableInputName}
        tableInputNumber={tableInputNumber}
        setTableInputNumber={setTableInputNumber}
        selectedTableValue={selectedTableValue}
        setSelectedTableValue={setSelectedTableValue}
        type={type}
        setType={setType}
      />
        </Col>
      </Row>
    </div>
  );
};

export default MainDropdown;
