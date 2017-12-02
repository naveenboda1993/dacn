const search = (key) => {
    const url = `http://192.168.0.105/api/search.php?key=${key}`;
    return fetch(url)
    .then(res => res.json());
};

export default search;
