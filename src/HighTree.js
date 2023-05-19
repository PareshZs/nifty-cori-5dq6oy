import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsTreemap from 'highcharts/modules/treemap';
import HighchartsTreeChart from "highcharts/modules/treegraph";
import HighchartsExporting from "highcharts/modules/exporting";

// Initialize Highcharts modules
HighchartsTreemap(Highcharts);
HighchartsExporting(Highcharts);
HighchartsTreeChart(Highcharts)

const data = [
  {
    id: "0.0",
    parent: "",
    name: "DIM.DIAGNOSIS"
  },

  /* DIM.DIAGNOSIS */

  {
    id: "1.0",
    parent: "0.0",
    name: "DIM.DIAGNOSIS"
  },
  {
    id: "1.1",
    parent: "0.0",
    name: "SNXS.PUB_PROGRAM_PRODUCT"
  },
  {
    id: "1.2",
    parent: "0.0",
    name: "IION.PUB_TV_ALERTS"
  },
  {
    id: "1.3",
    parent: "0.0",
    name: "IION.POSTDQM_TV_ALERTS"
  },
  {
    id: "1.4",
    parent: "0.0",
    name: "MCKN.PUB_EMR_DATA"
  },
  {
    id: "1.5",
    parent: "0.0",
    name: "MCKN.POSTDQM_EMR_DATA"
  },
  {
    id: "1.6",
    parent: "0.0",
    name: "MCKN.PUB_TUC_CLAIMS_ALERT"
  },
  {
    id: "1.7",
    parent: "0.0",
    name: "MCKN.POSTDQM_TUC_CLAIMS_ALERT"
  },
  {
    id: "1.8",
    parent: "0.0",
    name: "NTHR.PUB_CLAIMS_DATA"
  },
  {
    id: "1.9",
    parent: "0.0",
    name: "NTHR.POSTDQM_CLAIMS_DATA"
  },
  {
    id: "1.10",
    parent: "0.0",
    name: "IION.PUB_TUC_ALERTS"
  },
  {
    id: "1.10",
    parent: "0.0",
    name: "IION.POSTDQM_TUC_ALERTS"
  },

  /* DIM.DIAGNOSIS */
  
  {
    id: "2.0",
    parent: "1.0",
    name: "SNXS.PUB_PROGRAM_PRODUCT"
  },
  {
    id: "2.1",
    parent: "1.0",
    name: "MCKN.PUB_TXO_ADC_CLAIMS"
  },
  {
    id: "2.2",
    parent: "1.0",
    name: "IION.PUB_COMM_DRUG_INV"
  },
  {
    id: "2.3",
    parent: "1.0",
    name: "IION.PUB_TV_ALERTS"
  },
  {
    id: "2.4",
    parent: "1.0",
    name: "MCKN.PUB_EMR_DATA"
  },
  {
    id: "2.5",
    parent: "1.0",
    name: "MCKN.PUB_TUC_CLAIMS_ALERT"
  },
  {
    id: "2.6",
    parent: "1.0",
    name: "NTHR.PUB_CLAIMS_DATA"
  },
  {
    id: "2.7",
    parent: "1.0",
    name: "IION.PUB_TUC_ALERTS"
  },
  {
    id: "2.8",
    parent: "1.0",
    name: "DIM.DIAGNOSIS"
  },

  /* SNXS.PUB_PROGRAM_PRODUCT */
  {
    id: "2.9",
    parent: "2.0",
    name: "SNXS.PUB_PROGRAM_PRODUCT"
  },

  // /* MCKN.PUB_TXO_ADC_CLAIMS */
  // {
  //   id: "2.9",
  //   parent: "2.0",
  //   name: "SNXS.PUB_PROGRAM_PRODUCT"
  // },

  // /* IION.PUB_COMM_DRUG_INV */
  // {
  //   id: "2.9",
  //   parent: "2.0",
  //   name: "SNXS.PUB_PROGRAM_PRODUCT"
  // },

  // /* IION.PUB_TV_ALERTS */
  // {
  //   id: "2.9",
  //   parent: "2.0",
  //   name: "SNXS.PUB_PROGRAM_PRODUCT"
  // },

  // /* MCKN.PUB_EMR_DATA */
  // {
  //   id: "2.9",
  //   parent: "2.0",
  //   name: "SNXS.PUB_PROGRAM_PRODUCT"
  // },

  // /* MCKN.PUB_TUC_CLAIMS_ALERT */
  // {
  //   id: "2.9",
  //   parent: "2.0",
  //   name: "SNXS.PUB_PROGRAM_PRODUCT"
  // },

  // /* NTHR.PUB_CLAIMS_DATA */
  // {
  //   id: "2.9",
  //   parent: "2.0",
  //   name: "SNXS.PUB_PROGRAM_PRODUCT"
  // },

  // /* SNXS.PUB_PROGRAM_PRODUCT */
  // {
  //   id: "2.9",
  //   parent: "2.0",
  //   name: "IION.PUB_TUC_ALERTS"
  // },

  // /* SNXS.PUB_PROGRAM_PRODUCT */
  // {
  //   id: "2.9",
  //   parent: "2.0",
  //   name: "DIM.DIAGNOSIS"
  // },

  
];

const options = {
  title: {
    text: 'Treegraph with box layout'
  },
  credits: {
    enabled: false,
  },
  series: [
    {
      type: 'treegraph',
      data,
      tooltip: {
        pointFormat: '{point.name}'
      },
      marker: {
        symbol: 'rect',
        width: '25%'
      },
      borderRadius: 10,
      dataLabels: {
        pointFormat: '{point.name}',
        style: {
          whiteSpace: 'nowrap'
        }
      },
      levels: [
        {
          level: 1,
          levelIsConstant: false
        },
        {
          level: 2,
          colorByPoint: true
        },
        {
          level: 3,
          colorVariation: {
            key: 'brightness',
            to: -0.5
          }
        },
        {
          level: 4,
          colorVariation: {
            key: 'brightness',
            to: 0.5
          }
        }
      ]
    }
  ]
}

const HighTree = () => {
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
  );
};

export default HighTree;
