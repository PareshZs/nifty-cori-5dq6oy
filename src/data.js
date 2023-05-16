export const dummyData = [
  {
    lvl_1_table: "SLSF.POSTDQM_TERRITORY_CMPL",
    lvl_2_table: "SLSF.POSTDQM_TERRITORY",
    lvl_3_table: "SLSF.POSTDQM_TERRITORY",
  },
  {
    lvl_1_table: "SLSF.POSTDQM_TERRITORY_CMPL",
    lvl_2_table: "SLSF.POSTDQM_TERRITORY",
    lvl_3_table: "SLSF.PUB_TERRITORY_CMPL",
  },
  {
    lvl_1_table: "SLSF.POSTDQM_TERRITORY_CMPL",
    lvl_2_table: "SLSF.POSTDQM_TERRITORY",
    lvl_3_table: "SLSF.POSTDQM_TERRITORY_SPLIT__C",
  },
  {
    lvl_1_table: "SLSF.POSTDQM_TERRITORY_CMPL",
    lvl_2_table: "SLSF.POSTDQM_TERRITORY",
    lvl_3_table: "SLSF.PUB_TERRITORY_SPLIT__C",
  },
  {
    lvl_1_table: "SLSF.POSTDQM_TERRITORY_CMPL",
    lvl_2_table: "SLSF.POSTDQM_TERRITORY",
    lvl_3_table: "SLSF.PUB_TERRITORY",
  },
];

export const viewData = [
  {
    name: "SLSF.POSTDQM_TERRITORY_CMPL",
    children: [
      {
        name: "SLSF.POSTDQM_TERRITORY",
        children: [
          {
            name: "SLSF.POSTDQM_TERRITORY",
          },
          {
            name: "SLSF.PUB_TERRITORY_CMPL",
          },
          {
            name: "SLSF.POSTDQM_TERRITORY_SPLIT__C",
          },
          {
            name: "SLSF.PUB_TERRITORY_SPLIT__C",
          },
          {
            name: "SLSF.PUB_TERRITORY",
          },
        ],
      },
    ],
  },
];
