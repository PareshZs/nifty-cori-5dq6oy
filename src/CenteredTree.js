import React from "react";
import Tree from "react-d3-tree";
import { viewData } from "./data";

const tableData = [
  {
    name: "Table",
    children: [
      {
        name: "Dev - Turbot zza",
        children: [
          {
            name: "FullAWS",
          },
        ],
      },
      {
        name: "Dev - Cloud Management zzb",
        children: [
          {
            name: "FullAWS",
          },
          {
            name: "Restrict",
          },
          {
            name: "FullAWS",
          },
        ],
      },
      {
        name: "Prod - AWS Organizations (Secondary) zze",
        children: [
          {
            name: "FullAWS",
          },
        ],
      },
      {
        name: "Dev - testing app zzh",
        children: [
          {
            name: "FullAWS",
          },
        ],
      },
      {
        name: "Dev - Cloud Security Monitoring zzk",
        children: [
          {
            name: "FullAWS",
          },
        ],
      },
      {
        name: "EC-Default Dev Collab zzg",
        children: [
          {
            name: "FullAWS",
          },
        ],
      },
    ],
  },
];

const containerStyles = {
  width: "100%",
  height: "100vh",
};

export default class CenteredTree extends React.PureComponent {
  state = {};

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
          onLinkMouseOver={() => {
            console.log("onLinkMouseOver");
          }}
          onLinkClick={() => {
            console.log("onLinkClick");
          }}
          translate={this.state.translate}
          orientation={"vertical"}
        />
      </div>
    );
  }
}
