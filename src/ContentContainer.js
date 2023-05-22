import "./styles.css";
// import CenteredTree from "./CenteredTree";
import MainDropdown from "./MainDropdown";
import { useEffect, useState } from "react";
import { ViewAPIService, TableAPIService} from "./apiService";
import {Drawer} from 'antd'
import AntDChart from "./AntDChart";
import React from 'react'
import TableContainer from './TableContainer';
import SpDisplay from './spDisplay';
import { Col, Row } from 'antd';
// import HighTree from "./HighTree"

export default function ContentContainer() {
  const [optionValue, setOptionValue] = useState("");
  const [viewInputName, setViewInputName] = useState("");
  const [tableInputName, setTableInputName] = useState("");
  const [tableInputNumber, setTableInputNumber] = useState("");
  const [selectedTableValue, setSelectedTableValue] = useState("");
  const [type, setType] = useState("");
  const [typeClicked,setTypeClicked]=useState("")
  const [drawerOpen,setDrawerOpen] = useState(false)
  const [drawerTitle,setDrawerTitle]=useState("")
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

  const handleDrawer=(value)=>{
    setDrawerOpen(value)
  }

 const onNodeClick=(obj)=>{
  console.log('title: ', obj)
  const {drawerOpen} = obj
  console.log('calue: ', obj?.data?._cfg?.originStyle['text-0-0']?.text)
  const Title = obj?.data?._cfg?.originStyle['text-0-0']?.text?obj?.data?._cfg?.originStyle['text-0-0']?.text:'Node'
  setDrawerTitle(Title)
  setTypeClicked('node')
  handleDrawer(drawerOpen)
 }


 const onEdgeClick=(obj)=>{
  const {drawerOpen} = obj
  console.log('calue: ', obj?.data)
  const Title = obj?.data?._cfg?.originStyle['text-0-0']?.text?obj?.data?._cfg?.originStyle['text-0-0']?.text:'Edge'
  setDrawerTitle(Title)
  setTypeClicked('Edge')
  handleDrawer(drawerOpen)
 }
  // useEffect(() => {
  //   getViewData();
  // }, [optionValue, viewInputName]);

  return (
    <div className="App">
      <Row>
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
      </Row>


<Drawer
        title={`${drawerTitle}`}
        placement={'right'}
        closable={true}
        onClose={()=> handleDrawer(false)}
        open={drawerOpen}
        key={'right'}
        style={{width:'650px !important'}}
        width={650}
        
        
      >

        {
         typeClicked=='node'? <TableContainer/>:<SpDisplay/>

        }

        
        </Drawer>
      {/* {optionValue[0]?.label === "View" && viewInputName && type === "V" && (
        <CenteredTree optionValue={optionValue} />
      )}
      {optionValue[0]?.label === "Table" &&
        tableInputName &&
        tableInputNumber &&
        selectedTableValue &&
        type === "T" && <CenteredTree optionValue={optionValue} />} */}

        {/* <HighTree/> */}
        <Row>
        <AntDChart onNodeClick={onNodeClick} onEdgeClick={onEdgeClick}/>
        </Row>
      </div>
  );
}
