import React from "react";
import GridContainer from "components/Grid/GridContainer.js";
import JSMpeg from "@cycjimmy/jsmpeg-player";

const ffmpegIP = "10.53.67.11";
export default function Camera() {
  React.useEffect(() => {
    var videoUrl = `ws://${ffmpegIP}:6788/`;
    var player = new JSMpeg.VideoElement("#video-canvas", videoUrl, {
      autoplay: true,
    });
    console.log(player);
    var videoUrl1 = `ws://${ffmpegIP}:6789/`;
    var player1 = new JSMpeg.VideoElement("#video-canvas1", videoUrl1, {
      autoplay: true,
    });
    console.log(player1);
  });

  return (
    <GridContainer>
      <div
        id="title"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "28px",
          fontWeight: "bold",
          marginTop: "10px",
          marginBottom: "10px",
          color: "blue",
        }}
      ></div>
      <div
        id="video-canvas"
        style={{ height: "200px", width: "200px", marginRight: "20px" }}
      ></div>
      <div
        id="video-canvas1"
        style={{ height: "200px", width: "200px", marginRight: "20px" }}
      ></div>
      <div style={{ height: "200px", width: "350px" }}>
        <table>
          <td>Tổng số tàu thuyền neo đậu: 200</td>
          <td>Thời gian neo đậu: 20 Giờ</td>
        </table>
      </div>
    </GridContainer>
  );
}
