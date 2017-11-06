const sanphamnoibat = () =>
  fetch("http://192.168.56.1:8080/midishop/") // eslint-disable-line
    .then(res => res.json());

export default sanphamnoibat;