let movieInput =  document.querySelector('.movieInput');
let list = document.querySelector('.list');

let allMovies = [ ];

movieInput.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) { 
        allMovies.push(
            { 
                name: event.target.value,
                watched: false
            }
        );
         createUI(allMovies);
         event.target.value = '';   
    }

})

function handleDelete(event) {
    let id = event.target.dataset.id;
    allMovies.splice(id, 1);
    createUI(allMovies);
}
function handleChange(event) {
    let id = event.target.id;
    allMovies[id].watched = !allMovies[id].watched;
    createUI(allMovies);
}

function createUI(allMovies) {
    list.innerHTML = '';
    allMovies.forEach((movie, i) => {
        
        let li = document.createElement('li');
        li.classList.add('flex', 'justify-between', 'my-4', 'w-custom', 'movie');
        let movieName = document.createElement('label');
        movieName.for= i;
        movieName.innerText = movie.name;
        let check = document.createElement('input');
        check.type = "checkbox";
        check.id = i;
        check.checked = movie.watched;
        check.addEventListener("change", handleChange);
        let close = document.createElement('span');
        close.innerText = "X";
        close.classList.add("cursor-pointer");
        close.setAttribute('data-id', i);
        close.addEventListener('click', handleDelete);
        li.append(check, movieName, close);
        list.append(li);
    })
}
createUI(allMovies);