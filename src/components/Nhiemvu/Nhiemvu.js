import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
const nhiemvucolumn = [
  { field: "id", headerName: "ID", width: 20 },
  {
    field: "nhiemvu",
    headerName: "Nhiệm vụ",
    width: 500,
  },
  {
    field: "thuchien",
    headerName: "Thực hiện",
    width: 400,
    editable: true,
  },
  {
    field: "phantram",
    headerName: "Phần trăm",
    width: 100,
    type: "number",
    editable: true,
  },
];
const nhiemvurows = [
  {
    id: "1",
    nhiemvu:
      "Chỉ đạo các cơ quan truyền thông của huyện thông tin về cơn bão; sẵn sàng kết nối trực tuyến phục vụ các cuộc họp chỉ đạo, điều hành của tỉnh, trung ương.",
    thuchien: "Đã thực hiện",
    phantram: "80",
  },
  {
    id: "2",
    nhiemvu:
      "Quản lý hoạt động nuôi trồng hải sản trên biển; thông báo đến chủ phương tiện tàu cá đang hoạt động trên biển biết để phối hợp.",
    thuchien: "Đã thực hiện",
    phantram: "60",
  },
  {
    id: "3",
    nhiemvu:
      "Kiểm tra việc thực hiện lệnh cấm tàu cá, lệnh cho học sinh nghỉ học.",
    thuchien: "Chưa thực hiện kịp tiến độ",
    phantram: "30",
  },
];
export default function Nhiemvuthientai() {
  return (
    <GridContainer>
      <GridItem xs={12} sm={10} md={12}>
        <div style={{ height: 500, width: "100%" }}>
          <DataGrid
            getRowId={(row) => row.id}
            rows={nhiemvurows}
            columns={nhiemvucolumn}
            rowsPerPageOptions={[]}
            hideFooter={true}
            checkboxSelection={false}
            rowHeight={30}
            headerHeight={45}
          />
        </div>
      </GridItem>
    </GridContainer>
  );
}
