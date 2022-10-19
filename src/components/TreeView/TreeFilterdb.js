import React from "react";
import TextField from "@material-ui/core/TextField";
import { uniq } from "lodash";
import { makeStyles } from "@material-ui/core/styles";
import MyTreeView from "components/TreeView/MyTreeViewdb.js";
import PropTypes from "prop-types";
import {
  filterTree,
  expandFilteredNodes,
  getIDsExpandFilter,
} from "components/TreeView/filterTreeUtil.js";
const useStyles = makeStyles({
  cssLabel: {
    color: "#d3d3d3",
    "&.Mui-focused": {
      color: "#23A5EB",
    },
  },
});
export default function TreeFilter(props) {
  const classes = useStyles();
  const { tree, onChange } = props;
  const [expanded, setExpanded] = React.useState(["root"]);
  const [subjecttree, setSubjecttree] = React.useState([]);
  let data = [];
  React.useEffect(() => {
    setSubjecttree(() => tree);
  }, [tree]);
  const onFilterMouseUp = (e) => {
    const value = e.target.value;
    const filter = value.trim();
    let expandedTemp = expanded;
    if (!filter) {
      setSubjecttree(() => tree);
      setExpanded(["root"]);
      return;
    }

    let filtered = filterTree(tree[0], filter);
    data.push(filtered);
    filtered = expandFilteredNodes(tree[0], filter);
    if (filtered && filtered.nodes) {
      expandedTemp = [];
      expandedTemp.push(...getIDsExpandFilter(filtered));
    }
    setExpanded(uniq(expandedTemp));
    setSubjecttree(data);
  };

  const handleToggle = (event, nodeIds) => {
    let expandedTemp = expanded;
    expandedTemp = nodeIds;
    setExpanded(expandedTemp);
  };
  const handleClick = () => {
    setExpanded(["root"]);
  };

  return (
    <div style={{ width: "400px", display: "block" }}>
      <div
        style={{
          display: "block",
          float: "left",
          marginTop: "-10px",
          width: "100px",
          borderColor: "#fff",
          borderBottom: "1px solid",
        }}
      >
        <TextField
          label="Địa bàn..."
          onKeyUp={onFilterMouseUp}
          inputProps={{ className: classes.cssLabel }}
          InputLabelProps={{ style: { color: "#fff" } }}
        />
      </div>
      <div
        style={{
          display: "block",
          float: "right",
          marginLeft: "10px",
          width: "280px",
        }}
      >
        <MyTreeView
          tree={subjecttree}
          expanded={expanded}
          handleToggle={handleToggle}
          onChange={onChange}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
}
TreeFilter.propTypes = {
  tree: PropTypes.array,
  onChange: PropTypes.func,
};
