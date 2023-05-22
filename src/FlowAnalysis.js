
import React from 'react';
import { FlowAnalysisGraph } from '@ant-design/graphs';

const data1 = {
    nodes: [
        {
            id: '-3',
            value: {
                title: 'SLSF.POSTDQM_TERRITORY_CMPL',
                items: [
                    {
                        text: 'SLSF.POSTDQM_TERRITORY_CMPL',
                        // value: '10.30',
                        // icon: 'https://gw.alipayobjects.com/zos/antfincdn/iFh9X011qd/7797962c-04b6-4d67-9143-e9d05f9778bf.png',
                    },
                ],
            },
            "isCollapsed": true,
            "showCollapse": true
        },
        {
            id: '-2',
            value: {
                title: 'SLSF.POSTDQM_TERRITORY',
                items: [
                    {
                        text: 'SLSF.POSTDQM_TERRITORY',
                        // value: '10.30万',
                        // icon: 'https://gw.alipayobjects.com/zos/antfincdn/iFh9X011qd/7797962c-04b6-4d67-9143-e9d05f9778bf.png',
                    },
                ],
            },
            "isCollapsed": true,
            "showCollapse": true
        },
        {
            id: '-1',
            value: {
                title: 'SLSF.POSTDQM_TERRITORY',
                items: [
                    {
                        text: 'SLSF.POSTDQM_TERRITORY',
                    },
                ],
            },
            "isCollapsed": true,
            "showCollapse": true
        },
        {
            id: '0',
            value: {
                title: 'SLSF.PUB_TERRITORY_CMPL',
                items: [
                    {
                        text: 'SLSF.PUB_TERRITORY_CMPL',
                    },
                ],
            },
            "isCollapsed": true,
            "showCollapse": true
        },
        {
            id: '1',
            value: {
                title: 'SLSF.POSTDQM_TERRITORY_SPLIT__C',
                items: [
                    {
                        text: 'SLSF.POSTDQM_TERRITORY_SPLIT__C',
                    },
                ],
            },
            "isCollapsed": true,
            "showCollapse": true
        },
        {
            id: '2',
            value: {
                title: 'SLSF.PUB_TERRITORY_SPLIT__C',
                items: [
                    {
                        text: 'SLSF.PUB_TERRITORY_SPLIT__C',
                    },
                ],
            },
            "isCollapsed": true,
            "showCollapse": true
        },
        {
            id: '3',
            value: {
                title: 'SLSF.PUB_TERRITORY',
                items: [
                    {
                        text: 'SLSF.PUB_TERRITORY',
                    },
                ],
            },
            "isCollapsed": true,
            "showCollapse": true
        }
]
}

const AntDChart = () => {
    const data = {

        // nodes: [
        //     {
        //         id: '-3',
        //         value: {
        //             title: '111',
        //             items: [
        //                 {
        //                     text: '111',
        //                     value: '10.30',
        //                     icon: 'https://gw.alipayobjects.com/zos/antfincdn/iFh9X011qd/7797962c-04b6-4d67-9143-e9d05f9778bf.png',
        //                 },
        //             ],
        //         },
        //         "isCollapsed": true,
        //         "showCollapse": true
        //     },
        //     {
        //         id: '-2',
        //         value: {
        //             title: '222',
        //             items: [
        //                 {
        //                     text: '222',
        //                     value: '10.30万',
        //                     icon: 'https://gw.alipayobjects.com/zos/antfincdn/iFh9X011qd/7797962c-04b6-4d67-9143-e9d05f9778bf.png',
        //                 },
        //             ],
        //         },
        //         "isCollapsed": true,
        //         "showCollapse": true
        //     },
        //     {
        //         id: '-1',
        //         value: {
        //             title: '333',
        //             items: [
        //                 {
        //                     text: '333',
        //                 },
        //             ],
        //         },
        //         "isCollapsed": true,
        //         "showCollapse": true
        //     },
        //     {
        //         id: '0',
        //         value: {
        //             title: '444',
        //             items: [
        //                 {
        //                     text: '444',
        //                 },
        //             ],
        //         },
        //         "isCollapsed": true,
        //         "showCollapse": true
        //     },
        //     {
        //         id: '1',
        //         value: {
        //             title: '555',
        //             items: [
        //                 {
        //                     text: '555',
        //                 },
        //             ],
        //         },
        //         "isCollapsed": true,
        //         "showCollapse": true
        //     },
        //     {
        //         id: '2',
        //         value: {
        //             title: '666',
        //             items: [
        //                 {
        //                     text: '666',
        //                 },
        //             ],
        //         },
        //         "isCollapsed": true,
        //         "showCollapse": true
        //     },
        //     {
        //         id: '3',
        //         value: {
        //             title: '777',
        //             items: [
        //                 {
        //                     text: '777',
        //                 },
        //             ],
        //         },
        //         "isCollapsed": true,
        //         "showCollapse": true
        //     },
        //     {
        //         id: '4',
        //         value: {
        //             title: '888',
        //             items: [
        //                 {
        //                     text: '888',
        //                 },
        //             ],
        //         },
        //         "isCollapsed": true,
        //         "showCollapse": true
        //     },
        //     {
        //         id: '5',
        //         value: {
        //             title: '999',
        //             items: [
        //                 {
        //                     text: '999',
        //                 },
        //             ],
        //         },
        //         "isCollapsed": true,
        //         "showCollapse": true
        //     },
        //     {
        //         id: '6',
        //         value: {
        //             title: '101010',
        //             items: [
        //                 {
        //                     text: '101010',
        //                 },
        //             ],
        //         },
        //         "isCollapsed": true,
        //         "showCollapse": true
        //     },
        //     {
        //         id: '6',
        //         value: {
        //             title: '111111',
        //             items: [
        //                 {
        //                     text: '111111',
        //                 },
        //             ],
        //         },
        //         "isCollapsed": true,
        //         "showCollapse": true
        //     },
        //     {
        //         id: '7',
        //         value: {
        //             title: '121212',
        //             items: [
        //                 {
        //                     text: '121212',
        //                 },
        //             ],
        //         },
        //         "isCollapsed": true,
        //         "showCollapse": true
        //     },
        //     {
        //         id: '8',
        //         value: {
        //             title: '131313',
        //             items: [
        //                 {
        //                     text: '131313',
        //                 },
        //             ],
        //         },
        //         "isCollapsed": true,
        //         "showCollapse": true
        //     },
        // ],
        nodes: [
            {
                id: '-3',
                value: {
                    title: 'SLSF.POSTDQM_TERRITORY_CMPL',
                    items: [
                        {
                            text: 'SLSF.POSTDQM_TERRITORY_CMPL',
                            // value: '10.30',
                            // icon: 'https://gw.alipayobjects.com/zos/antfincdn/iFh9X011qd/7797962c-04b6-4d67-9143-e9d05f9778bf.png',
                        },
                    ],
                },
                "isCollapsed": true,
                "showCollapse": true
            },
            {
                id: '-2',
                value: {
                    title: 'SLSF.POSTDQM_TERRITORY',
                    items: [
                        {
                            text: 'SLSF.POSTDQM_TERRITORY',
                            // value: '10.30万',
                            // icon: 'https://gw.alipayobjects.com/zos/antfincdn/iFh9X011qd/7797962c-04b6-4d67-9143-e9d05f9778bf.png',
                        },
                    ],
                },
                "isCollapsed": true,
                "showCollapse": true
            },
            {
                id: '-1',
                value: {
                    title: 'SLSF.POSTDQM_TERRITORY',
                    items: [
                        {
                            text: 'SLSF.POSTDQM_TERRITORY',
                        },
                    ],
                },
                "isCollapsed": true,
                "showCollapse": true
            },
            {
                id: '0',
                value: {
                    title: 'SLSF.PUB_TERRITORY_CMPL',
                    items: [
                        {
                            text: 'SLSF.PUB_TERRITORY_CMPL',
                        },
                    ],
                },
                "isCollapsed": true,
                "showCollapse": true
            },
            {
                id: '1',
                value: {
                    title: 'SLSF.POSTDQM_TERRITORY_SPLIT__C',
                    items: [
                        {
                            text: 'SLSF.POSTDQM_TERRITORY_SPLIT__C',
                        },
                    ],
                },
                "isCollapsed": true,
                "showCollapse": true
            },
            {
                id: '2',
                value: {
                    title: 'SLSF.PUB_TERRITORY_SPLIT__C',
                    items: [
                        {
                            text: 'SLSF.PUB_TERRITORY_SPLIT__C',
                        },
                    ],
                },
                "isCollapsed": true,
                "showCollapse": true
            },
            {
                id: '3',
                value: {
                    title: 'SLSF.PUB_TERRITORY',
                    items: [
                        {
                            text: 'SLSF.PUB_TERRITORY',
                        },
                    ],
                },
                "isCollapsed": true,
                "showCollapse": true
            }
    ],
        edges: [
            {
                source: '-3',
                target: '-2',
                // value: 'link1',
            },
            {
                source: '-2',
                target: '-1',
                // value: 'link2',
            },
            {
                source: '-2',
                target: '0',
                // value: 'link3',
            },
            {
                source: '-2',
                target: '1',
            },
            {
                source: '-2',
                target: '2',
            },
            {
                source: '-2',
                target: '3',
            },
            // {
            //     source: '0',
            //     target: '4',
            // },
            // {
            //     source: '0',
            //     target: '5',
            // },
            // {
            //     source: '2',
            //     target: '6',
            // },
            // {
            //     source: '3',
            //     target: '7',
            // },
            // {
            //     source: '4',
            //     target: '8',
            // },
        ],
    };
    const config = {
        data,
        nodeCfg: {
            size: [140, 25],
            badge: {
                style: (cfg) => {
                    const ids = ['-3', '-2', '-1'];
                    const fill = ids.includes(cfg.id) ? '#c86bdd' : '#5ae859';
                    return {
                        fill,
                        radius: [2, 0, 0, 2],
                    };
                },
            },
            items: {
                padding: 6,
                containerStyle: {
                    fill: '#fff',
                },
                style: (cfg, group, type) => {
                    const styles = {
                        icon: {
                            width: 12,
                            height: 12,
                        },
                        value: {
                            fill: '#f00',
                        },
                        text: {
                            fill: '#aaa',
                        },
                    };
                    return styles[type];
                },
            },
            nodeStateStyles: {
                hover: {
                    stroke: '#1890ff',
                    lineWidth: 2,
                },
            },
            title: {
                containerStyle: {
                    fill: 'transparent',
                },
                style: {
                    fill: '#000',
                    fontSize: 12,
                },
            },
            style: {
                fill: '#E6EAF1',
                stroke: '#B2BED5',
                radius: [2, 2, 2, 2],
            },
        },
        edgeCfg: {
            label: {
                style: {
                    fill: '#aaa',
                    fontSize: 12,
                    fillOpacity: 1,
                },
            },
            style: (edge) => {
                const stroke = edge.target === '0' ? '#c86bdd' : '#5ae859';
                return {
                    stroke,
                    lineWidth: 1,
                    strokeOpacity: 0.5,
                };
            },
            edgeStateStyles: {
                hover: {
                    lineWidth: 2,
                    strokeOpacity: 1,
                },
            },
        },
        markerCfg: (cfg) => {
            console.log("cfg",cfg);
            const { edges } = data;
            return {
                position: 'right',
                // show: edges.find((item) => item.source === cfg.id),
                show: cfg.showCollapse && edges.find((item) => item.source !== '-2'),
                // showCollapse: false,
                collapsed: cfg.isCollapsed,
                style: {
                }
            };
        },
        // onReady: (plot) => {
            
        // },
        onReady:(graph)=>{
            graph.on('node:click',e=>{
                e.stopPropogation()
                console.log(e.item)
            });
            graph.on('edge:click',e=>{
                e.stopPropogation()
                console.log(e.item)
            });
            graph.setMaxZoom(2);
            graph.setMinZoom(0.5);

        },
        behaviors: ['zoom-canvas', 'drag-node'],
    };

    return <FlowAnalysisGraph {...config} />;
};

export default AntDChart;
