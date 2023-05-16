import axios from "axios";
import React from "react";

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
});

export const ViewAPIService = async (optionValue, viewInputName) => {
  const response = await client.get("/1");
  return response;
};

export const TableAPIService = async (
  optionValue,
  tableInputName,
  tableInputNumber,
  selectedTableValue
) => {
  const response = await client.get("/1");
  return response;
};
