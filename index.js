const names = ["Dr. Slice", "Dr. Pressure", "Prof. Possibility", "Prof. Prism", "Dr. Impulse", "Prof. Spark", "Dr. Wire", "Prof. Goose"];
const occupations = ["gardener", "programmer", "teacher", "gardner"]
const FreeLancersList = window.document.querySelector
    ('#FreeLancersList');

function generateRandom() {

    const nameIdx = Math.floor(Math.random() * names.length);
    const name = names[nameIdx];
    const occupationIdx = Math.floor(Math.random() * occupations.length);
    const occupation = occupations[occupationIdx];
    const price = Math.ceil(Math.random() * 10);
    return {
        name,
        occupation,
        price
    };
}
function render() {
    const lis = freelancers.map(function (freelancers) {
        return `
        <li>
        ${freelancers.name} is ${freelancers.occupation} 
        and price ${freelancers.price}
        <li/>
        `;
    }).join('');
    FreeLancersList.innerHTML = lis;
}


const freelancers = [];
freelancers.push(generateRandom());
freelancers.push(generateRandom());
render();