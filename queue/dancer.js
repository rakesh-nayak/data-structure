import Queue from './index';
const dancersList = [
  'F Allison McMillan',
  'M Frank Opitz',
  'M Mason McMillan',
  'M Clayton Ruff',
  'F Cheryl Ferenback',
  'M Raymond Williams',
  'F Jennifer Ingram',
  'M Bryan Frazer',
  'M David Durr',
  'M Danny Martin',
  'F Aurora Adney'
];

class Dancer {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
}

const getDancers = () => {
  const maleDancers = new Queue();
  const femaleDancers = new Queue();
  dancersList.map(dancer => {
    const d = dancer.split(' ');
    const name = d[1];
    const sex = d[0];
    const d1 = new Dancer(name, sex);
    if(sex === 'F') {
      femaleDancers.enqueue(d1);
    }
    else {
      maleDancers.enqueue(d1);
    }
  });
  return {
    femaleDancers,
    maleDancers
  };
};

const dance = ({ femaleDancers, maleDancers }) => {
  while(!femaleDancers.isEmpty() && !maleDancers.isEmpty()) {
    const femaleDancer = femaleDancers.dequeue();
    const maleDancer = maleDancers.dequeue();
    console.log(`Female dancer ${femaleDancer.name} is dancing with male dancer ${maleDancer.name}`)
  }
};

dance(getDancers());
