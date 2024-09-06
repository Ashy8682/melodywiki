function quick(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById(elementId).innerHTML = "Failed to load content.";
        });
}
