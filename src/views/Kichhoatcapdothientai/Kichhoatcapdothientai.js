import React from "react";
import CustomTabsGrid from "components/CustomTabs/CustomTabsGrid.js";
//import Tasks from "components/Tasks/Tasks.js";
import Kichhoatcapdothientai from "components/Kichhoatcapdothientai/Kichhoatcapdothientai.js";

export default function Capdothientai() {
  return (
    <div>
      <CustomTabsGrid
        headerColor="primary"
        tabs={[
          {
            tabName: "Kích hoạt cấp độ thiên tai",
            tabContent: <Kichhoatcapdothientai />,
          },
        ]}
      />
    </div>
  );
}
