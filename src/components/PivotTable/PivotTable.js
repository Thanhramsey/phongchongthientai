import React from "react";
import PropTypes from "prop-types";
import {PivotData} from "./Utilities";
import TableRenderers from "./TableRenderers";
import PropTypes from "prop-types";

export default function PivotTable(props) {
  const { rendererName = "Table", renderers = TableRenderers } = props;
  const Renderer = renderers[
    rendererName in renderers
      ? rendererName
      : Object.keys(renderers)[0]
  ];
  return <Renderer {...props} />;
}
PivotTable.propTypes = {
  rendererName: PropTypes.string,
  renderers: PropTypes.objectOf(PropTypes.func),
};
