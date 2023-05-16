import "./styles.css";
import CenteredTree from "./CenteredTree";
import MainDropdown from "./MainDropdown";
import { useState } from "react";
import { APIService } from "./apiService";

export default function App() {
  const [optionValue, setOptionValue] = useState("");
  const [viewInputName, setViewInputName] = useState("");
  const [tableInputName, setTableInputName] = useState("");
  const [tableInputNumber, setTableInputNumber] = useState("");
  const [selectedTableValue, setSelectedTableValue] = useState("");
  const [type, setType] = useState("");
  console.log(optionValue);

  const getViewData = async () => {
    const viewTreeData = await ViewAPIService(optionValue, viewInputName);
    console.log(viewTreeData);
    return viewTreeData;
  };

  const getTableData = async () => {
    const tableTreeData = await TableAPIService(
      optionValue,
      tableInputName,
      tableInputNumber,
      selectedTableValue
    );
    console.log(tableTreeData);
    return tableTreeData;
  };

  return (
    <div className="App">
      <MainDropdown
        optionValue={optionValue}
        setOptionValue={setOptionValue}
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
      {optionValue[0]?.label === "View" && viewInputName && type === "V" && (
        <CenteredTree optionValue={optionValue} />
      )}
      {optionValue[0]?.label === "Table" &&
        tableInputName &&
        tableInputNumber &&
        selectedTableValue &&
        type === "T" && <CenteredTree optionValue={optionValue} />}
    </div>
  );
}
