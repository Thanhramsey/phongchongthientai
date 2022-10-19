import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import PropTypes from "prop-types";

const Tree = React.memo(function Tree(props) {
  const { tree, onChange } = props;
  const renderTree = (datas) => (
    <TreeItem key={datas.id} nodeId={datas.id} label={renderLabel(datas)}>
      {Array.isArray(datas.nodes)
        ? datas.nodes.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );
  const renderLabel = (item) => (
    <span
      onClick={(event) => {
        onChange(item);
        event.stopPropagation();
        event.preventDefault();
      }}
    >
      {item.value}
    </span>
  );

  return (
    <div
      style={{
        display: "flex",
        alignItems: "left",
      }}
    >
      <TreeView
        aria-label="rich object"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpanded={["root"]}
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{
          height: 420,
          width: "100%",
          flexGrow: 1,
          maxWidth: 500,
          overflowX: "auto",
        }}
      >
        {tree.length > 0 && tree != "undefined" ? renderTree(tree[0]) : ""}
      </TreeView>
    </div>
  );
});
Tree.propTypes = {
  tree: PropTypes.array,
  onChange: PropTypes.func,
};
export default Tree;
