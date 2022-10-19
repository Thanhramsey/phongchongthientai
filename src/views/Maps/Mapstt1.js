import React from "react";
import Buithixuan from "variables/xa_phuong/Quynhon/buithixuan.js";
import Dongda from "variables/xa_phuong/Quynhon/dongda.js";
import Ghenhrang from "variables/xa_phuong/Quynhon/ghenhrang.js";
import Haicang from "variables/xa_phuong/Quynhon/haicang.js";
import Lehongphong from "variables/xa_phuong/Quynhon/lehongphong.js";
import Leloi from "variables/xa_phuong/Quynhon/leloi.js";
import Lythuongkiet from "variables/xa_phuong/Quynhon/lythuongkiet.js";
import Ngomay from "variables/xa_phuong/Quynhon/ngomay.js";
import Nguyenvancu from "variables/xa_phuong/Quynhon/nguyenvancu.js";
import Nhonbinh from "variables/xa_phuong/Quynhon/nhonbinh.js";
import Nhonchau from "variables/xa_phuong/Quynhon/nhonchau.js";
import Nhonhai from "variables/xa_phuong/Quynhon/nhonhai.js";
import Nhonhoi from "variables/xa_phuong/Quynhon/nhonhoi.js";
import Nhonly from "variables/xa_phuong/Quynhon/nhonly.js";
import Nhonphu from "variables/xa_phuong/Quynhon/nhonphu.js";
import Quangtrung from "variables/xa_phuong/Quynhon/quangtrung.js";
import Thinai from "variables/xa_phuong/Quynhon/thinai.js";
import Tranhungdao from "variables/xa_phuong/Quynhon/tranhungdao.js";
import Tranphu from "variables/xa_phuong/Quynhon/tranphu.js";
import Tranquangdieu from "variables/xa_phuong/Quynhon/tranquangdieu.js";
import Phuocmy from "variables/xa_phuong/Quynhon/phuocmy.js";
import Tuyphuoc from "variables/huyen_tp/tuyphuoc.js";
import Vancanh from "variables/huyen_tp/vancanh.js";

import mark from "assets/img/marker.png";
const Maps = () => {
  const mapRef = React.useRef(null);
  const bordercolor = "#1c1c1c";
  const qn1color = "#02007c";
  const qn2color = "#8c8f00";
  const tpvccolor = "#004104";
  React.useEffect(() => {
    let google = window.google;
    let map = mapRef.current;
    let lat = "13.713989902429894";
    let lng = "109.05546620269399";
    let latqn1 = "13.77862930211166";
    let lngqn1 = "109.22889270614874";
    let latqn2 = "13.742604883257847";
    let lngqn2 = "109.15339108164433";
    let lattpvc = "13.713989902429894";
    let lngtpvc = "109.05546620269399";
    const myLatlng = new google.maps.LatLng(lat, lng);
    const myLatlngqn1 = new google.maps.LatLng(latqn1, lngqn1);
    const myLatlngqn2 = new google.maps.LatLng(latqn2, lngqn2);
    const myLatlngtpvc = new google.maps.LatLng(lattpvc, lngtpvc);
    const mapOptions = {
      zoom: 10,
      center: myLatlng,
      scrollwheel: true,
      zoomControl: false,
      disableDefaultUI: true,
      styles: [
        {
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#a8d0c8",
            },
          ],
        },
        {
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#1a3646",
            },
          ],
        },
        {
          featureType: "administrative",
          elementType: "geometry",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "administrative.country",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#4b6878",
            },
          ],
        },
        {
          featureType: "administrative.land_parcel",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#64779e",
            },
          ],
        },
        {
          featureType: "administrative.province",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#4b6878",
            },
          ],
        },
        {
          featureType: "landscape",
          stylers: [
            {
              color: "#98c1d9",
            },
          ],
        },
        {
          featureType: "landscape.man_made",
          elementType: "geometry",
          stylers: [
            {
              color: "#293241",
            },
          ],
        },
        {
          featureType: "landscape.natural",
          stylers: [
            {
              color: "#1a3646",
            },
          ],
        },
        {
          featureType: "poi",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [
            {
              color: "#283d6a",
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#6f9ba5",
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#1d2c4d",
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#023e58",
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#3C7680",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [
            {
              color: "#e1fbfc",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#98a5be",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#1d2c4d",
            },
          ],
        },
        {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [
            {
              color: "#ec5935",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [
            {
              color: "#000000",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#255763",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#b0d5ce",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#023e58",
            },
          ],
        },
        {
          featureType: "road.local",
          elementType: "geometry",
          stylers: [
            {
              color: "#4e1507",
            },
          ],
        },
        {
          featureType: "transit",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "transit",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#98a5be",
            },
          ],
        },
        {
          featureType: "transit",
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#1d2c4d",
            },
          ],
        },
        {
          featureType: "transit.line",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#283d6a",
            },
          ],
        },
        {
          featureType: "transit.station",
          elementType: "geometry",
          stylers: [
            {
              color: "#3a4762",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#5e82b3",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#4e6d70",
            },
          ],
        },
      ],
    };
    const haicang = new google.maps.Polygon({
      paths: Haicang,
      strokeColor: bordercolor,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: qn1color,
      fillOpacity: 0.35,
    });
    const lehongphong = new google.maps.Polygon({
      paths: Lehongphong,
      strokeColor: bordercolor,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: qn1color,
      fillOpacity: 0.35,
    });
    const leloi = new google.maps.Polygon({
      paths: Leloi,
      strokeColor: bordercolor,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: qn1color,
      fillOpacity: 0.35,
    });
    const lythuongkiet = new google.maps.Polygon({
      paths: Lythuongkiet,
      strokeColor: bordercolor,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: qn1color,
      fillOpacity: 0.35,
    });
    const thinai = new google.maps.Polygon({
      paths: Thinai,
      strokeColor: bordercolor,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: qn1color,
      fillOpacity: 0.35,
    });
    const tranhungdao = new google.maps.Polygon({
      paths: Tranhungdao,
      strokeColor: bordercolor,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: qn1color,
      fillOpacity: 0.35,
    });
    const tranphu = new google.maps.Polygon({
      paths: Tranphu,
      strokeColor: bordercolor,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: qn1color,
      fillOpacity: 0.35,
    });
    const nhonhai = new google.maps.Polygon({
      paths: Nhonhai,
      strokeColor: bordercolor,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: qn1color,
      fillOpacity: 0.35,
    });
    const nhonhoi = new google.maps.Polygon({
      paths: Nhonhoi,
      strokeColor: bordercolor,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: qn1color,
      fillOpacity: 0.35,
    });
    const nhonly = new google.maps.Polygon({
      paths: Nhonly,
      strokeColor: bordercolor,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: qn1color,
      fillOpacity: 0.35,
    });
    const quangtrung = new google.maps.Polygon({
      paths: Quangtrung,
      strokeColor: bordercolor,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: qn1color,
      fillOpacity: 0.35,
    });
    const ngomay = new google.maps.Polygon({
      paths: Ngomay,
      strokeColor: bordercolor,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: qn1color,
      fillOpacity: 0.35,
    });
    const ghenhrang = new google.maps.Polygon({
      paths: Ghenhrang,
      strokeColor: bordercolor,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: qn1color,
      fillOpacity: 0.35,
    });
    const nguyenvancu = new google.maps.Polygon({
      paths: Nguyenvancu,
      strokeColor: bordercolor,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: qn1color,
      fillOpacity: 0.35,
    });
    const nhonchau = new google.maps.Polygon({
      paths: Nhonchau,
      strokeColor: bordercolor,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: qn1color,
      fillOpacity: 0.35,
    });
    const dongda = new google.maps.Polygon({
      paths: Dongda,
      strokeColor: bordercolor,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: qn2color,
      fillOpacity: 0.35,
    });
    const nhonbinh = new google.maps.Polygon({
      paths: Nhonbinh,
      strokeColor: bordercolor,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: qn2color,
      fillOpacity: 0.35,
    });
    const nhonphu = new google.maps.Polygon({
      paths: Nhonphu,
      strokeColor: bordercolor,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: qn2color,
      fillOpacity: 0.35,
    });
    const buithixuan = new google.maps.Polygon({
      paths: Buithixuan,
      strokeColor: bordercolor,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: qn2color,
      fillOpacity: 0.35,
    });
    const tranquangdieu = new google.maps.Polygon({
      paths: Tranquangdieu,
      strokeColor: bordercolor,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: qn2color,
      fillOpacity: 0.35,
    });
    const phuocmy = new google.maps.Polygon({
      paths: Phuocmy,
      strokeColor: bordercolor,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: qn2color,
      fillOpacity: 0.35,
    });
    const tuyphuoc = new google.maps.Polygon({
      paths: Tuyphuoc,
      strokeColor: bordercolor,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: tpvccolor,
      fillOpacity: 0.35,
    });
    const vancanh = new google.maps.Polygon({
      paths: Vancanh,
      strokeColor: bordercolor,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: tpvccolor,
      fillOpacity: 0.35,
    });
    map = new google.maps.Map(map, mapOptions);
    new google.maps.Marker({
      position: myLatlngqn1,
      map: map,
      icon: {
        labelOrigin: new google.maps.Point(11, 40),
        url: mark,
      },
      label: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: "14px",
        marginTop: "10px",
        text: "Quy nhơn 1",
      },
      title: "Quy nhơn 1",
    });
    new google.maps.Marker({
      position: myLatlngqn2,
      map: map,
      icon: {
        labelOrigin: new google.maps.Point(11, 40),
        url: mark,
      },
      label: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: "14px",
        marginTop: "10px",
        text: "Quy nhơn 2",
      },
      //animation: google.maps.Animation.DROP,
      title: "Quy nhơn 2",
    });
    new google.maps.Marker({
      position: myLatlngtpvc,
      map: map,
      icon: {
        labelOrigin: new google.maps.Point(11, 40),
        url: mark,
      },
      label: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: "14px",
        marginTop: "10px",
        text: "Tuy phước - Vân Canh",
      },
      //animation: google.maps.Animation.DROP,
      title: "Tuy phước - Vân Canh",
    });

    haicang.setMap(map);
    lehongphong.setMap(map);
    leloi.setMap(map);
    lythuongkiet.setMap(map);
    tranhungdao.setMap(map);
    thinai.setMap(map);
    tranphu.setMap(map);
    nhonhai.setMap(map);
    nhonhoi.setMap(map);
    nhonly.setMap(map);
    quangtrung.setMap(map);
    ngomay.setMap(map);
    ghenhrang.setMap(map);
    nguyenvancu.setMap(map);
    nhonchau.setMap(map);
    dongda.setMap(map);
    nhonbinh.setMap(map);
    nhonphu.setMap(map);
    buithixuan.setMap(map);
    tranquangdieu.setMap(map);
    phuocmy.setMap(map);
    tuyphuoc.setMap(map);
    vancanh.setMap(map);
  });
  return (
    <div>
      <div style={{ height: "270px" }} ref={mapRef}></div>
    </div>
  );
};

export default Maps;
