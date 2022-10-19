import React from "react";
import CustomTabsGrid from "components/CustomTabs/CustomTabsGrid.js";
//import Tasks from "components/Tasks/Tasks.js";
import Baocaoptttbvt from "components/Baocaothongke/Baocaoptttbvt.js";

export default function BCsotandan() {
  return (
    <div>
      <CustomTabsGrid
        headerColor="primary"
        tabs={[
          {
            tabName: "Báo cáo PT-TTB-VT",
            tabContent: <Baocaoptttbvt />,
          },
        ]}
      />
    </div>
  );
}
