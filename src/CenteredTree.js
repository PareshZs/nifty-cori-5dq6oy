import React from "react";
import Tree from "react-d3-tree";
import { viewData } from "./data";

// const tableData = [
//   {
//     name: "Table",
//     children: [
//       {
//         name: "Dev - Turbot zza",
//         children: [
//           {
//             name: "FullAWS",
//           },
//         ],
//       },
//       {
//         name: "Dev - Cloud Management zzb",
//         children: [
//           {
//             name: "FullAWS",
//           },
//           {
//             name: "Restrict",
//           },
//           {
//             name: "FullAWS",
//           },
//         ],
//       },
//       {
//         name: "Prod - AWS Organizations (Secondary) zze",
//         children: [
//           {
//             name: "FullAWS",
//           },
//         ],
//       },
//       {
//         name: "Dev - testing app zzh",
//         children: [
//           {
//             name: "FullAWS",
//           },
//         ],
//       },
//       {
//         name: "Dev - Cloud Security Monitoring zzk",
//         children: [
//           {
//             name: "FullAWS",
//           },
//         ],
//       },
//       {
//         name: "EC-Default Dev Collab zzg",
//         children: [
//           {
//             name: "FullAWS",
//           },
//         ],
//       },
//     ],
//   },
// ];

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
  width: "100%",
  height: "100vh",
};

const renderForeignObjectNode = ({
  nodeDatum,
  toggleNode,
  foreignObjectProps,
}) => (
  <g>
    <circle r={15}></circle>
    {/* `foreignObject` requires width & height to be explicitly set. */}
    <foreignObject {...foreignObjectProps}>
      <div style={{ border: "1px solid black", backgroundColor: "#dedede" }}>
        <h3 style={{ textAlign: "center" }}>{nodeDatum.name}</h3>
        {nodeDatum.children && (
          <button style={{ width: "100%" }} onClick={toggleNode}>
            {nodeDatum.__rd3t.collapsed ? "Expand" : "Collapse"}
          </button>
        )}
      </div>
    </foreignObject>
  </g>
);

export default class CenteredTree extends React.PureComponent {
  state = {};
  nodeSize = { x: 300, y: 200 };

  componentDidMount() {
    const dimensions = this.treeContainer.getBoundingClientRect();
    this.setState({
      translate: {
        x: dimensions.width / 2,
        y: dimensions.height / 2,
      },
    });
  }

  render() {
    return (
      <div style={containerStyles} ref={(tc) => (this.treeContainer = tc)}>
        <Tree
          data={
            this?.props?.optionValue[0]?.label === "View" ? viewData : tableData
          }
          onLinkMouseOver={(tree) => {
            console.log("onLinkMouseOver", tree);
          }}
          onLinkClick={(link) => {
            console.log("onLinkClick", link);
          }}
          onNodeClick={(node) => {
            console.log("onNodeClick", node);
          }}
          onNodeMouseOver={(node) => {
            console.log("onNodeClick", node);
          }}
          nodeSize={this.nodeSize}
          translate={this.state.translate}
          orientation={"vertical"}
        />
      </div>
    );
  }
}
