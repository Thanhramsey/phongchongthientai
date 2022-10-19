import React from "react";
import CustomTabsGrid from "components/CustomTabs/CustomTabsGrid.js";
//import Tasks from "components/Tasks/Tasks.js";
import Phuongtienttbvt from "components/Phuongtienttbvt/Phuongtienttbvt.js";
import Config from "conFig.js";

const ruirocolumn = [
  { field: "stt", headerName: "STT", width: 20 },
  {
    field: "phuongtien",
    headerName: "Phương tiện",
    width: 150,
  },
  {
    field: "donvi",
    headerName: "Đơn vị",
    width: 150,
  },
  {
    field: "soluong",
    headerName: "Số lượng",
    width: 150,
  },
  {
    field: "nam",
    headerName: "Năm",
    width: 150,
  },
];
const hodan = [
  {
    id: "1",
    phuongtien: "Xe bán tải",
    donvi: "UBND phường Lê lợi",
    soluong: "10",
    nam: "2022",
  },
];
export default function Ptttbvt() {
  const [hodans, setHodan] = React.useState([]);
  console.log(hodans);
  const gethodan = () => {
    var url = Config.backend + "/api/hodan/gethodan";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setHodan(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  React.useEffect(() => {
    gethodan();
  }, []);
  return (
    <div>
      <CustomTabsGrid
        headerColor="primary"
        tabs={[
          {
            tabName: "Phương tiện - TTB - VT",
            tabContent: (
              <Phuongtienttbvt hodanrows={hodan} hodancolumns={ruirocolumn} />
            ),
          },
        ]}
      />
    </div>
  );
}
