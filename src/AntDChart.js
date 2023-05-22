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

const AntDChart = (props) => {
    const {onNodeClick, onEdgeClick}= props
    const data = {

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
        height:720,
        width:650,
        data,
        nodeCfg: {
            size: [230, 30],
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
                            width:'50px',
                            fontSize:12
                        },
                        text: {
                            fill: '#aaa',
                            wrap:'no-wrap',
                            fontSize:10
                           
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
            // console.log("cfg",cfg);
            const { edges } = data;
            return {
                position: 'right',
                // show: edges.find((item) => item.source === cfg.id),
                show: cfg.showCollapse && edges.find((item) => item.source === cfg.id),
                // collapsed: true,
                style: {
                }
            };
        },
        onReady: (plot) => {
            plot.setMaxZoom(2);
            plot.setMinZoom(0.5);
            plot.on('node:dblclick',e=>{
                // e.stopPropogation()
                const obj= {drawerOpen:true, data: e.item}
                onNodeClick(obj)
                console.log('nodeClick',e.item)
            });
            plot.on('edge:dblclick',(e,edge)=>{
                // e.stopPropogation()
                const obj= {drawerOpen:true, data: e}
                onEdgeClick(obj)
                console.log('edgeClick',e,edge)
            });
        },
        behaviors: ['zoom-canvas', 'drag-node'],
    };

    return <FlowAnalysisGraph {...config} />;
};

export default AntDChart;