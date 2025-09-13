const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');


const displayProphets = (prophets) => {
    prophets.forEach((propeht) => {
        let card = document.createElement('section');
        let dateOfbirth = document.createElement('p')
        let placeOfbirth = document.createElement('p')
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');

        fullName.textContent = `${propeht.name} ${propeht.lastname}`;
        dateOfbirth.textContent = `Date of birth: ${propeht.birthdate}`;
        placeOfbirth.textContent = `Place of Birth: ${propeht.birthplace}`;
        portrait.setAttribute('src', propeht.imageurl);
        portrait.setAttribute('alt',  `Portrait of ${propeht.name} ${propeht.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('height', '362');
        portrait.setAttribute('width', '280');
        
        card.appendChild(fullName);
        card.appendChild(dateOfbirth);
        card.appendChild(placeOfbirth);
        card.appendChild(portrait);
        
        cards.appendChild(card)
    });

}

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets)
    displayProphets(data.prophets)
}

getProphetData()