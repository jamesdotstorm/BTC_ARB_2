document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {


    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://www.bitstamp.net/api/v2/ticker/btcusd/', true);

    xhr.onload = function() {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);
            console.log(response);



        }
    }

    xhr.send();

    e.preventDefault();

}