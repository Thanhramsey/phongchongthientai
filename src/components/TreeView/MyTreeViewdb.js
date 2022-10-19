import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import PropTypes from "prop-types";

const MyTreeView = React.memo(function MyTreeView(props) {
  const { tree, expanded, handleToggle, onChange, handleClick } = props;
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
        handleClick();
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
        defaultExpandIcon={<ChevronRightIcon />}
        expanded={expanded}
        onNodeToggle={handleToggle}
        sx={{
          height: "auto",
          width: "100%",
          flexGrow: 1,
          maxWidth: 500,
          overflowX: "auto",
          whiteSpace: "nowrap",
          backgroundColor: "#464E79",
          borderColor: "#464E79",
          minHeight: "37px",
          maxHeight: "250px",
        }}
      >
        {tree.length > 0 && tree != "undefined" ? renderTree(tree[0]) : ""}
      </TreeView>
    </div>
  );
});
MyTreeView.propTypes = {
  tree: PropTypes.array,
  expanded: PropTypes.array,
  handleToggle: PropTypes.func,
  onChange: PropTypes.func,
  handleClick: PropTypes.func,
};
export default MyTreeView;
