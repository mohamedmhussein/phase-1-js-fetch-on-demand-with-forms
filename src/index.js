const init = () => {

    //access the input element
    const inputForm = document.querySelector('form')
    inputForm.addEventListener('submit', e =>{
        e.preventDefault()
        let inputValue = document.querySelector('input#searchByID').value

        // fetch the data
        fetch(`http://localhost:3000/movies/${inputValue}`)
        .then(res => res.json())
        .then (data => {
            const title = document.querySelector("section#movieDetails h4");
            const summary = document.querySelector("section#movieDetails p");

            title.innerText = data.title;
            summary.innerText = data.summary;
        })

    })
}

document.addEventListener('DOMContentLoaded', init);