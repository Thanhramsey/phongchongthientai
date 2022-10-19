import React from "react";
import PropTypes from "prop-types";
import { DataGrid } from "@mui/x-data-grid";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/components/dataGridStyle.js";

const useStyles = makeStyles(styles);

const CustomDataGrid = React.memo(function CustomDataGrid(props) {
  const classes = useStyles();
  const { rows, columns } = props;
  return (
    <div className={classes.dataGrid1}>
      <DataGrid
        getRowId={(row) => row.teN_DV + row.cap}
        rows={rows}
        columns={columns}
        rowsPerPageOptions={[]}
        hideFooter={true}
        disableSelectionOnClick
        rowHeight={30}
        headerHeight={45}
        sx={{
          boxShadow: 2,
          border: 2,
          borderColor: "primary.light",
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
          },
          "& .MuiDataGrid-cell": {
            color: "#fff",
          },
          "& .MuiDataGrid-main": {
            color: "#fff",
          },
        }}
      />
    </div>
  );
});

CustomDataGrid.propTypes = {
  rows: PropTypes.array,
  columns: PropTypes.array,
};
export default CustomDataGrid;
