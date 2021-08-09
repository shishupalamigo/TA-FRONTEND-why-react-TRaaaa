let movieInput = document.querySelector('.movieInput');
let list = document.querySelector('.list');

let allMovies = [];

movieInput.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    allMovies.push({
      name: event.target.value,
      watched: false,
    });
    createUI(allMovies);
    event.target.value = '';
  }
});

function handleDelete(event) {
  let id = event.target.id;
  console.log(event.target.dataset);
  allMovies.splice(id);
  createUI(allMovies);
}
function handleChange(event) {
  let id = event.target.id;
  allMovies[id].watched = !allMovies[id].watched;
  createUI(allMovies);
}

function createElement(type, attr = {}, ...children) {
  let element = document.createElement(type);
  for (let key in attr) {
    if (key.startsWith('data-')) {
      element.setAttribute(key, attr.key);
    } else element[key] = attr[key];
  }
  children.forEach((child) => {
    if (typeof child === 'object') {
      element.append(child);
    }
    if (typeof child === 'string') {
      let node = document.createTextNode(child);
      element.append(node);
    }
  });
  return element;
}

function createUI(allMovies) {
  list.innerHTML = '';
  allMovies.forEach((movie, i) => {
    let li = createElement(
      'li',
      {
        className: 'movie',
      },
      createElement('input', {
        type: 'checkbox',
        id: i,
        className: 'check',
        checked: movie.watched,
        onclick: handleChange,
      }),
      createElement('p', {}, movie.name),
      createElement(
        'button',
        {
          className: 'delete',
          id: i,
          onclick: handleDelete,
        },
        'X'
      )
    );
    list.append(li);
  });
}
createUI(allMovies);
