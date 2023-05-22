import React, { useEffect, useState } from "react";
import Tree from "react-d3-tree";
import { viewData } from "./data";
import Tooltip from "./TooltipComponent";
import { useCenteredTree } from "./Helpers";

const tableData = [
  {
    name: "DIM.DIAGNOSIS",
    children: [
      {
        name: "DIM.DIAGNOSIS",
        children: [
          { name: "SNXS.PUB_PROGRAM_PRODUCT" },
          { name: "MCKN.PUB_TXO_ADC_CLAIMS" },
          { name: "IION.PUB_COMM_DRUG_INV" },
          { name: "IION.PUB_TV_ALERTS" },
          { name: "MCKN.PUB_EMR_DATA" },
          { name: "MCKN.PUB_TUC_CLAIMS_ALERT" },
          { name: "NTHR.PUB_CLAIMS_DATA" },
          { name: "IION.PUB_TUC_ALERTS" },
          { name: "DIM.DIAGNOSIS" },
        ],
      },
      {
        name: "SNXS.PUB_PROGRAM_PRODUCT",
        children: [{ name: "SNXS.PUB_PROGRAM_PRODUCT" }],
      },
      {
        name: "IION.PUB_TV_ALERTS",
        children: [
          { name: "IION.PUB_TV_ALERTS" },
          { name: "IION.POSTDQM_TV_ALERTS" },
        ],
      },
      {
        name: "IION.POSTDQM_TV_ALERTS",
        children: [
          { name: "IION.POSTDQM_TV_ALERTS" },
          { name: "IION.VW_TV_ALERTS" },
        ],
      },
      {
        name: "MCKN.PUB_EMR_DATA",
        children: [
          { name: "MCKN.PUB_EMR_DATA" },
          { name: "MCKN.POSTDQM_EMR_DATA" },
        ],
      },
      {
        name: "MCKN.POSTDQM_EMR_DATA",
        children: [
          { name: "MCKN.PUB_EMR_DATA" },
          { name: "MCKN.EMR_DATA" },
          { name: "MCKN.POSTDQM_EMR_DATA" },
        ],
      },
      {
        name: "MCKN.PUB_TUC_CLAIMS_ALERT",
        children: [
          { name: "MCKN.PUB_TUC_CLAIMS_ALERT" },
          { name: "MCKN.POSTDQM_TUC_CLAIMS_ALERT" },
        ],
      },
      {
        name: "MCKN.POSTDQM_TUC_CLAIMS_ALERT",
        children: [
          { name: "MCKN.PUB_TUC_CLAIMS_ALERT" },
          { name: "MCKN.TUC_CLAIMS_ALERT" },
          { name: "MCKN.POSTDQM_TUC_CLAIMS_ALERT" },
        ],
      },
      {
        name: "NTHR.PUB_CLAIMS_DATA",
        children: [
          { name: "NTHR.PUB_CLAIMS_DATA" },
          { name: "NTHR.POSTDQM_CLAIMS_DATA" },
        ],
      },
      {
        name: "NTHR.POSTDQM_CLAIMS_DATA",
        children: [
          { name: "NTHR.CLAIMS_DATA" },
          { name: "NTHR.PUB_CLAIMS_DATA" },
          { name: "NTHR.POSTDQM_CLAIMS_DATA" },
        ],
      },
      {
        name: "IION.PUB_TUC_ALERTS",
        children: [
          { name: "IION.PUB_TUC_ALERTS" },
          { name: "IION.POSTDQM_TUC_ALERTS" },
        ],
      },
      {
        name: "IION.POSTDQM_TUC_ALERTS",
        children: [
          { name: "IION.TUC_ALERTS" },
          { name: "IION.POSTDQM_TUC_ALERTS" },
        ],
      },
    ],
  },
];

const containerStyles = {
  width: "100vw",
  height: "100vh",
};

const handleNodeClick = (nodeDatum) => {
  window.alert(
    nodeDatum.children ? "Clicked a branch node" : "Clicked a leaf node."
  );
};

const handleNodeOver = (nodeDatum) => {
  console.log("Node Hovered");
}

const renderTooltip = (nodeName) => {
  return(
  <Tooltip content="Yee-haw!" direction="right">
        
  </Tooltip>
  )
}
const renderNodeWithCustomEvents = ({
  nodeDatum,
  toggleNode,
  foreignObjectProps,
}) => {
  let nodeName = nodeDatum.name;
  let nameArray = nodeName.split(".");
  let finalName = nameArray[1];
  return (
    // <Tooltip content="Yee-haw!" direction="right">
    <g>
      <circle r="15" onClick={() => handleNodeClick(nodeDatum)} 
      // onPointerEnter={()=> console.log("Entered on the node")} 
      />
      <text  fill="black" strokeWidth="1" x="20" onClick={toggleNode}>
      {/* {finalName} */}
      
        {finalName}
      
      </text>
        
      
      {/* <Tooltip anchorSelect={`#${finalName}`}>
        <div>
          <h3>This is a very interesting header</h3>
          <p>Here's some interesting stuff:</p>
          <ul>
            <li>Some</li>
            <li>Interesting</li>
            <li>Stuff</li>
          </ul>
        </div>
      </Tooltip> */}
    </g>
    // </Tooltip>
  );
};

const CenteredTree = () => {
  const [stateObj, setStateObj] = useState({})
  const [translate, containerRef] = useCenteredTree();
  const nodeSize = { x: 300, y: 200 };
  const foreignObjectProps = {
    width: nodeSize.x,
    height: nodeSize.y,
    x: -25,
    y: -25
  };

  return (
    <div style={containerStyles} ref={containerRef}>
      <Tree
        data={
          this?.props?.optionValue[0]?.label === "View" ? viewData : tableData
        }
        onLinkMouseOver={(tree) => {
          renderTooltip(tree?.data.name);
        }}
        onLinkClick={(link) => {
          console.log("onLinkClick", link?.data.name);
        }}
        onNodeClick={(node) => {
          console.log("onNodeClick", node);
        }}
        onNodeMouseOver={(node) => {
          console.log("onNodeMouseOver", node);
        }}
        nodeSize={nodeSize}
        renderCustomNodeElement={(rd3tProps) =>
          renderNodeWithCustomEvents({ ...rd3tProps, handleNodeClick})
        }
        translate={translate}
        orientation={"vertical"}
      />
    </div>
  );
}

export default CenteredTree;