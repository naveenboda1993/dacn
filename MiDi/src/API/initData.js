const initData = () =>
  fetch("http://192.168.56.1:8080/api/") // eslint-disable-line
    .then(res => res.json());

export default initData;