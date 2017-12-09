const search = (key) => {
    const url = `http://192.168.56.1:8080/api/search.php?key=${key}`;
    return fetch(url)
    .then(res => res.json());
};

export default search;
