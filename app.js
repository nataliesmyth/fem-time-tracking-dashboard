const links = document.querySelectorAll('.nav-link');
console.log(typeof links);

for (const link of links) {
    link.addEventListener('click', handleClick);
}

function handleClick() {
    console.log('clicked!');
}

// fetch('/data.json').then((request) => {  
//     if(!request.ok) {
//       console.log('Oops! Something went wrong.');
//       return null;
//     }
    
//     return request.json();
//   }).then((data) => {
//     console.log(data);
//     console.log(data[0]);
//   });