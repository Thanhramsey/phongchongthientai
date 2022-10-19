import React from "react";
import PropTypes from "prop-types";
import Config from "conFig.js";
import cot from "assets/img/cot.jpg";
const Maps = React.memo(function Maps(props) {
  const { donvi, capdv } = props;
  const [data, setData] = React.useState([]);
  const token = localStorage.getItem("token");
  var obj = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };
  const mapRef = React.useRef(null);
  const getsplitter = () => {
    if (capdv === "2") {
      var url =
        Config.backend + "/api/cot/getcot?donvi=" + donvi + "&cap=" + capdv;
      fetch(url, obj)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    }
  };
  React.useEffect(() => {
    getsplitter();
    let google = window.google;
    let map = mapRef.current;
    let lat = "14.021937778454516";
    let lng = "109.05222862151919";
    const myLatlng = new google.maps.LatLng(lat, lng);
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
    map = new google.maps.Map(map, mapOptions);
    if (data.length > 0) {
      data.map((row) => {
        new google.maps.Marker({
          position: new google.maps.LatLng(row["vido"], row["kinhdo"]),
          map: map,
          icon: {
            labelOrigin: new google.maps.Point(11, 40),
            url: cot,
          },
          title: row["teN_COT"],
        });
      });
    } else {
      new google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: {
          labelOrigin: new google.maps.Point(11, 40),
          url: cot,
        },
        title: "TTVT1",
      });
    }
  }, [donvi, capdv]);
  return <div style={{ height: "100%" }} ref={mapRef}></div>;
});

Maps.propTypes = {
  donvi: PropTypes.string,
  capdv: PropTypes.string,
};
export default Maps;
