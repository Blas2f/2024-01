(async () => {
    let loginDiv = document.getElementById("login");
    let registerDiv = document.getElementById("register");
    let regBtn = document.getElementById("regBtn");
    let logRegToggle = true;
    registerDiv.style.display = "none";

    regBtn.addEventListener("click", () => {
        if (logRegToggle) {
            loginDiv.style.display = "none";
            registerDiv.style.display = "grid";
            logRegToggle = !logRegToggle;
        } else {
            loginDiv.style.display = "grid";
            registerDiv.style.display = "none";
            logRegToggle = !logRegToggle;
        }
    });

    const url = 'https://house-plants2.p.rapidapi.com/id/53417c12-4824-5995-bce0-b81984ebbd1d';
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

function validar(){
    var correo = document.getElementById("correo").value;
    var contraseña = document.getElementById("contraseña").value;
    if(correo === "" || contraseña === "" ){
        alert("No puede haber ningun campo vacio");
    }
};

