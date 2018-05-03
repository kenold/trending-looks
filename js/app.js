var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'js/shoes.json');
ourRequest.onload = function () {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
        var data = JSON.parse(ourRequest.responseText);
        createHTML(data);
    } else {
        console.log("We connected to the server, but it returned an error.");
    }
};

ourRequest.onerror = function () {
    console.log("Connection error");
};

ourRequest.send();


function createHTML(petsData) {
    var rawTemplate = document.getElementById("shoesTemplate").innerHTML;
    var compiledTemplate = Handlebars.compile(rawTemplate);
    var ourGeneratedHTML = compiledTemplate(petsData);

    var petsContainer = document.getElementById("shoes-container");
    petsContainer.innerHTML = ourGeneratedHTML;
}