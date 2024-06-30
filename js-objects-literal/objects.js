let bandInfo;

const band = {
  name: 'Foo Fighters',
  nationality: 'US',
  genre: 'Rock',
  members: 5,
  formed: 1994,
  split: false,
  albums: [
    {
      name: 'There is Nothing Left To Lose',
      year: 1999
    },
    {
      name: 'The Color And The Shape',
      year: 1997
    }
  ]
};

bandInfo = `${band.name} is based on the ${band.nationality}. 
            They formed their band from ${band.formed} with ${band.genre} as their music. 
            Their first album, ${band.albums[0].name}, was released on ${band.albums[0].year}.`;

const section = document.querySelector('section');
let para1 = document.createElement('p');
para1.textContent = bandInfo;
section.appendChild(para1);