document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {


    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.chucknorris.io/jokes/random', true);

    xhr.onload = function() {
        if (this.status === 200) {
            const response = (this.responseText);
            console.log(response);
        }
    }

    xhr.send();

    e.preventDefault();

}