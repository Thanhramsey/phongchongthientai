import React from "react";
import CustomTabsGrid from "components/CustomTabs/CustomTabsGrid.js";
//import Tasks from "components/Tasks/Tasks.js";
import Didantaptrung from "components/Didanghepho/Didan.js";
import Ghepho from "components/Didanghepho/Ghepho.js";
import Config from "conFig.js";

export default function Didanghepho() {
  const [ruiro, setRuiro] = React.useState([]);
  const getruiro = () => {
    var url = Config.backend + "/api/ruiro/getdanhsachruiro";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setRuiro(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  React.useEffect(() => {
    getruiro();
  }, []);
  return (
    <div>
      <CustomTabsGrid
        headerColor="primary"
        tabs={[
          {
            tabName: "Tập trung",
            tabContent: <Didantaptrung ruiro={ruiro} />,
          },
          {
            tabName: "Xen ghép",
            tabContent: <Ghepho ruiro={ruiro} />,
          },
        ]}
      />
    </div>
  );
}
