import React from "react";
import CustomTabsGrid from "components/CustomTabs/CustomTabsGrid.js";
//import Tasks from "components/Tasks/Tasks.js";
import Banchihuycaptinh from "components/Sodobanchihuy/Banchihuycaptinh.js";
import Banchihuycaphuyen from "components/Sodobanchihuy/Banchihuycaphuyen.js";
import Banchihuycapxa from "components/Sodobanchihuy/Banchihuycapxa.js";
import Config from "conFig.js";

export default function Banchihuy() {
  const getroles = () => {
    var url = Config.backend + "/api/roles/roles";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  React.useEffect(() => {
    getroles();
  }, []);
  return (
    <div>
      <CustomTabsGrid
        headerColor="primary"
        tabs={[
          {
            tabName: "Sơ đồ ban chỉ huy cấp tỉnh",
            tabContent: <Banchihuycaptinh test={"1"} />,
          },
          {
            tabName: "Sơ đồ ban chỉ huy cấp huyện",
            tabContent: <Banchihuycaphuyen test={"1"} />,
          },
          {
            tabName: "Sơ đồ ban chỉ huy cấp xã",
            tabContent: <Banchihuycapxa test={"1"} />,
          },
        ]}
      />
    </div>
  );
}
