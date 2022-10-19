import React from "react";
import PropTypes from "prop-types";
import { DataGrid } from "@mui/x-data-grid";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/components/dataGridStyle.js";

const useStyles = makeStyles(styles);

const Roles = React.memo(function Roles(props) {
  const classes = useStyles();
  const { rows, columns } = props;
  const [selectedRows, setSelectedRows] = React.useState([]);
  console.log(selectedRows);
  return (
    <div className={classes.roleGrid}>
      <DataGrid
        getRowId={(row) => row.rolE_ID}
        rows={rows}
        columns={columns}
        rowsPerPageOptions={[]}
        hideFooter={true}
        checkboxSelection
        onSelectionModelChange={(ids) => {
          const selectedIDs = new Set(ids);
          const selectedRows = rows.filter((row) =>
            selectedIDs.has(row.rolE_ID)
          );
          setSelectedRows(selectedRows);
        }}
        rowHeight={30}
        headerHeight={45}
      />
    </div>
  );
});

Roles.propTypes = {
  rows: PropTypes.array,
  columns: PropTypes.array,
};
export default Roles;
