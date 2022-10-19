import React from "react";
import PropTypes from "prop-types";
import { DataGrid } from "@mui/x-data-grid";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/components/dataGridStyle.js";

const useStyles = makeStyles(styles);

export default function CustomDataGrid(props) {
  const classes = useStyles();
  const { rows, columns } = props;
  return (
    <div className={classes.dataGrid1}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </div>
  );
}

CustomDataGrid.propTypes = {
  rows: PropTypes.array,
  columns: PropTypes.array,
};
