import { select, json, hierarchy, linkHorizontal, tree } from "d3"
import { useEffect, useRef } from "react";

const DTree = () => {
    const svgRef = useRef(null);
    const width = document.body.clientWidth;
    const height = document.body.clientHeight;
    const tree = tree().size([height, width]);
    useEffect(() => {
        const svg = select(svgRef.current)

        // Clearing svg content before adding new elements
        svg.selectAll("*").remove();

        // Create svg and add width and height
        svg.attr('width', width).attr('height', height)

        // Make an AJAX call for data to display in d3.js tree graph 
        json("/data.json").then((data) => console.log(data))
        const root = hierarchy(data);
        const paths = treeLayout(root).links();
        const pathGenerator = linkHorizontal().x((d) => d.y).y((d) => d.x)

        //draw path
        svg.selectAll("path").data(paths).enter().append("path").attr("stroke", "#000").attr("fill", "none").attr("stroke-width", 3).attr("d", pathGenerator);

        // draw nodes
        svg.selectAll("text").data(root.descendants()).enter().append("text").attr("color", "black").attr("font-size", "0.75rem").attr("x", d => d.y).attr("y", d => d.x).text(({ data }) => data.name);
    }, [])
    return (
        <svg ref={svgRef} />
    )
}