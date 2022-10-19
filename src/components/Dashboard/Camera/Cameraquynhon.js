import React from "react";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItemLogin.js";
import JSMpeg from "@cycjimmy/jsmpeg-player";
const ffmpegIP = "10.53.67.11";
export default function Cameraqn() {
  React.useEffect(() => {
    var videoUrl = `ws://${ffmpegIP}:6781/`;
    new JSMpeg.VideoElement("#video-canvas", videoUrl, {
      autoplay: true,
    });
    var videoUrl1 = `ws://${ffmpegIP}:6782/`;
    new JSMpeg.VideoElement("#video-canvas1", videoUrl1, {
      autoplay: true,
    });
    var videoUrl2 = `ws://${ffmpegIP}:6783/`;
    new JSMpeg.VideoElement("#video-canvas2", videoUrl2, {
      autoplay: true,
    });
    var videoUrl3 = `ws://${ffmpegIP}:6784/`;
    new JSMpeg.VideoElement("#video-canvas3", videoUrl3, {
      autoplay: true,
    });
  });
  return (
    <GridContainer>
      <GridItem xs={12} sm={10} md={3}>
        <table style={{ marginTop: "-10px", borderRight: "1px solid #4f7edb" }}>
          <tr>
            <td>
              <span style={{ fontWeight: "500" }}>
                Tổng số tàu thuyền: 100 chiếc
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ fontWeight: "500" }}>
                Thời gian neo đậu: 2 ngày
              </span>
            </td>
          </tr>
        </table>
      </GridItem>
      <GridItem xs={12} sm={12} md={9}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <div
              id="video-canvas"
              style={{
                height: "200px",
                width: "200px",
                marginRight: "20px",
                marginTop: "-50px",
              }}
            ></div>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <div
              id="video-canvas1"
              style={{
                height: "200px",
                width: "200px",
                marginRight: "20px",
                marginTop: "-50px",
              }}
            ></div>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <div
              id="video-canvas2"
              style={{
                height: "200px",
                width: "200px",
                marginRight: "20px",
                marginTop: "-50px",
              }}
            ></div>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <div
              id="video-canvas3"
              style={{
                height: "200px",
                width: "200px",
                marginRight: "20px",
                marginTop: "-10px",
              }}
            ></div>
          </GridItem>
        </GridContainer>
      </GridItem>
    </GridContainer>
  );
}
