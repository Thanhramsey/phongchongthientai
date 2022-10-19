import React from "react";
import ForceGraph3d from "react-force-graph-3d";
import data from "views/Home/data/data.json";
import SpriteText from "three-spritetext";
export default function Tyle() {
  return (
    <ForceGraph3d
      graphData={data}
      nodeAutoColorBy="group"
      nodeThreeObject={(node) => {
        const sprite = new SpriteText(node.id);
        sprite.color = node.color;
        sprite.textHeight = 8;
        return sprite;
      }}
    />
  );
}
