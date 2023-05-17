import React from "react";
import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:8000/table_lineage",
});

export const ViewAPIService = async (optionValue, viewInputName) => {
  const response = await client.post({ data: { optionValue, viewInputName } });
  return response;
};

export const TableAPIService = async (
  optionValue,
  tableInputName,
  tableInputNumber,
  selectedTableValue
) => {
  const response = await client.post({data: {optionValue,
  tableInputName,
  tableInputNumber,
  selectedTableValue}});
  return response;
};
