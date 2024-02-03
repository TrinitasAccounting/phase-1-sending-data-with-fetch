// Add your code here




const submitData = (name, email) => {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
        .then(res => res.json())
        .then(data => document.body.append(data.id))
        .catch((error) => {
            alert('something went wrong');
            document.body.append(error.message);
        })
};

