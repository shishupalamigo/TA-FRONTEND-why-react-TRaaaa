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
  allMovies.splice(id, 1);
  createUI(allMovies);
}
function handleChange(event) {
  let id = event.target.id;
  allMovies[id].watched = !allMovies[id].watched;
  createUI(allMovies);
}

// function createElement(type, attr = {}, ...children) {
//   let element = document.createElement(type);
//   for (let key in attr) {
//     if (key.startsWith('data-')) {
//       element.setAttribute(key, attr.key);
//     } else if(key.startsWith('on')) {
//         let eventType = key.replace('on', '').toLowerCase();
//         element.addEventListener(eventType, attr[key]);
//     }
//      else element[key] = attr[key];
//   }
//   children.forEach((child) => {
//     if (typeof child === 'object') {
//       element.append(child);
//     }
//     if (typeof child === 'string') {
//       let node = document.createTextNode(child);
//       element.append(node);
//     }
//   });
//   return element;
// }
let createElement = React.createElement;

function createUI(allMovies) {
//   list.innerHTML = '';
  let movieList = allMovies.map((movie, i) => {
    let li = createElement(
      'li',
      {
        className: 'movie',
      },
      createElement('button', {
        id: i,
        className: 'border px-1 py-1 bg-blue-600 text-white text-xs',
        onClick: handleChange,
      }, movie.watched ? "watched" : "To Watch"),
      createElement('p', {
          className: 'text-lg font-bold'
      }, movie.name),
      createElement(
        'button',
        {
          className: 'text-red-500',
          id: i,
          onClick: handleDelete,
        },
        'X'
      )
    );
     return li;
  });
  ReactDOM.render(movieList, list);
}
createUI(allMovies);
