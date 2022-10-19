import React from "react";
import Anlao from "variables/huyen_tp/anlao.js";
import Annhon from "variables/huyen_tp/annhon.js";
import Hoaian from "variables/huyen_tp/hoaian.js";
import Hoainhon from "variables/huyen_tp/hoainhon.js";
import Phucat from "variables/huyen_tp/phucat.js";
import Phumy from "variables/huyen_tp/phumy.js";
import Tayson from "variables/huyen_tp/tayson.js";
import Tuyphuoc from "variables/huyen_tp/tuyphuoc.js";
import Vancanh from "variables/huyen_tp/vancanh.js";
import Vinhthanh from "variables/huyen_tp/vinhthanh.js";
import Quynhon from "variables/huyen_tp/quynhon.js";
import mark from "assets/img/marker.png";
const Maps = () => {
  const mapRef = React.useRef(null);
  const bordercolor = "#1c1c1c";
  const tt1color = "#02007c";
  const tt2color = "#8c8f00";
  const tt3color = "#004104";
  React.useEffect(() => {
    let google = window.google;
    let map = mapRef.current;
    let lat = "14.021937778454516";
    let lng = "109.05222862151919";
    let lattt1 = "13.713989902429894";
    let lngtt1 = "109.05546620269399";
    let lattt2 = "14.44932291550719";
    let lngtt2 = "108.91100906203299";
    let lattt3 = "14.028987758006362";
    let lngtt3 = "108.99411253977884";
    const myLatlng = new google.maps.LatLng(lat, lng);
    const myLatlngtt1 = new google.maps.LatLng(lattt1, lngtt1);
    const myLatlngtt2 = new google.maps.LatLng(lattt2, lngtt2);
    const myLatlngtt3 = new google.maps.LatLng(lattt3, lngtt3);
    const mapOptions = {
      zoom: 8,
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
    const anlao = new google.maps.Polygon({
      paths: Anlao,
      strokeColor: bordercolor,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: tt2color,
      fillOpacity: 0.35,
    });
    const annhon = new google.maps.Polygon({
      paths: Annhon,
      strokeColor: bordercolor,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: tt3color,
      fillOpacity: 0.35,
    });
    const hoaian = new google.maps.Polygon({
      paths: Hoaian,
      strokeColor: bordercolor,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: tt2color,
      fillOpacity: 0.35,
    });
    const hoainhon = new google.maps.Polygon({
      paths: Hoainhon,
      strokeColor: bordercolor,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: tt2color,
      fillOpacity: 0.35,
    });
    const phucat = new google.maps.Polygon({
      paths: Phucat,
      strokeColor: bordercolor,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: tt3color,
      fillOpacity: 0.35,
    });
    const phumy = new google.maps.Polygon({
      paths: Phumy,
      strokeColor: bordercolor,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: tt2color,
      fillOpacity: 0.35,
    });
    const tayson = new google.maps.Polygon({
      paths: Tayson,
      strokeColor: bordercolor,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: tt3color,
      fillOpacity: 0.35,
    });
    const tuyphuoc = new google.maps.Polygon({
      paths: Tuyphuoc,
      strokeColor: bordercolor,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: tt1color,
      fillOpacity: 0.35,
    });
    const vancanh = new google.maps.Polygon({
      paths: Vancanh,
      strokeColor: bordercolor,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: tt1color,
      fillOpacity: 0.35,
    });
    const vinhthanh = new google.maps.Polygon({
      paths: Vinhthanh,
      strokeColor: bordercolor,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: tt3color,
      fillOpacity: 0.35,
    });
    const quynhon = new google.maps.Polygon({
      paths: Quynhon,
      strokeColor: bordercolor,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: tt1color,
      fillOpacity: 0.35,
    });
    google.maps.event.addListener(tuyphuoc, "click", function () {
      alert("day la tuy phuoc");
    });
    google.maps.event.addListener(annhon, "click", function () {
      alert("day la an nhon");
    });
    map = new google.maps.Map(map, mapOptions);
    new google.maps.Marker({
      position: myLatlngtt1,
      map: map,
      icon: {
        labelOrigin: new google.maps.Point(11, 40),
        url: mark,
      },
      label: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: "18px",
        marginTop: "10px",
        text: "Trung tâm Viễn Thông 1",
      },
      //animation: google.maps.Animation.DROP,
      title: "TTVT1",
    });
    new google.maps.Marker({
      position: myLatlngtt2,
      map: map,
      icon: {
        labelOrigin: new google.maps.Point(11, 40),
        url: mark,
      },
      label: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: "18px",
        marginTop: "10px",
        text: "Trung tâm Viễn Thông 2",
      },
      //animation: google.maps.Animation.DROP,
      title: "TTVT2",
    });
    new google.maps.Marker({
      position: myLatlngtt3,
      map: map,
      icon: {
        labelOrigin: new google.maps.Point(11, 40),
        url: mark,
      },
      label: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: "18px",
        marginTop: "10px",
        text: "Trung tâm Viễn Thông 3",
      },
      //animation: google.maps.Animation.DROP,
      title: "TTVT3",
    });

    anlao.setMap(map);
    annhon.setMap(map);
    hoaian.setMap(map);
    hoainhon.setMap(map);
    phucat.setMap(map);
    phumy.setMap(map);
    tayson.setMap(map);
    tuyphuoc.setMap(map);
    vancanh.setMap(map);
    vinhthanh.setMap(map);
    quynhon.setMap(map);
  });
  return (
    <div>
      <div style={{ height: "100vh" }} ref={mapRef}></div>
    </div>
  );
};

export default Maps;
