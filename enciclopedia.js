(async () => {
    const url = 'https://house-plants2.p.rapidapi.com/all-lite';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '24e40f3df8msh014f768172b6c7bp1548c6jsn7cd2eea7b61b',
            'X-RapidAPI-Host': 'house-plants2.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }

})();