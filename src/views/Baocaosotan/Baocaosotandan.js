import React from "react";
import CustomTabsGrid from "components/CustomTabs/CustomTabsGrid.js";
//import Tasks from "components/Tasks/Tasks.js";
import Baocaosotandan from "components/Baocaothongke/Baocaosotandan.js";

export default function BCptttbvt() {
  return (
    <div>
      <CustomTabsGrid
        headerColor="primary"
        tabs={[
          {
            tabName: "Báo cáo sơ tán dân",
            tabContent: <Baocaosotandan />,
          },
        ]}
      />
    </div>
  );
}
