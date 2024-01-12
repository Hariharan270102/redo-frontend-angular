// test_sk_ey2qwVnYhyqNNJsmVFrqrM
    
    // Verify an address using JavaScript and Axios.
    // View API Documentation for examples in other languages.

    axios.post('https://api.postgrid.com/v1/addver/verifications', {
        address: {
            line1: '22-20 bay st',
            city: 'Toronto',
        }
    }, {
        headers: {
            'x-api-key': 'test_sk_ey2qwVnYhyqNNJsmVFrqrM'
        }
    }).then((res) => {
        const { data } = res.data;

        // All the missing information is automatically appended.
        console.log(data.status);

        console.log(data.line1);
        console.log(data.line2);
        console.log(data.city);
        console.log(data.provinceOrState);
        console.log(data.postalOrZip);
        console.log(data.country);
    }).catch(console.error);