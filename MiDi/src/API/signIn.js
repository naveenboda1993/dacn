const signIn = (email, password) => (
    fetch('http://172.20.10.2:8080/cnpm/taoToken.php',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(res => res.json())
);

module.exports = signIn;
