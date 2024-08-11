const startingAreaArr = [
  'Square 20 x 20 feet; passage on each wall' , 
  'Sqaure, 20 x 20 feet; door on two walls, passage in third wall' , 
  'Square 40 x 40 feet; doors on three walls' ,
  'Rectangle, 80 x 20 feet, with a row of pillars down the middle; two passages leading from each long wall, doors on each short wall.' ,
  'Rectangle, 20 x 40 feet; passage on each wall.' ,
  'Circle, 40 foot diameter; one passage on each wall.' ,
  'Circle, 40 foot diameter; one passage at each cardinal direction.' ,
  'Square, 20 x 20 feet; door on two walls, passage on third wall, secret door on fourth wall.' ,
  'Passage, 10 feet wide; T intersection.' ,
  'Passage, 10 feet wide; four way intersection.'
]
   
  function startingArea() {
   console.log('Starting Area:')
   console.log(startingAreaArr[Math.floor(Math.random() * 10)]);
};

const passagesArr = [
  'Continue straight 30 ft., no doors or side passages' ,
  'Continue straight 30 ft., no doors or side passages' ,
  'Continue straight 20 ft., door to the right, then an additional 10 ft. ahead' ,
  'Continue straight 20 ft., door to the left, then an additional 10 ft. ahead' ,
  'Continue straight 20 ft.; passage ends in a door' ,
  'Continue straight 20 ft., side passage to the right, then an additional 10 ft. ahead' ,
  'Continue straight 20 ft., side passage to the right, then an additional 10 ft. ahead' ,
  'Continue straight 20 ft., side passage to the left, then an additional 10 ft. ahead' ,
  'Continue straight 20 ft., side passage to the left, then an additional 10 ft. ahead' ,
  'Continue straight 20 ft., comes to a dead end; 10 percent chance of a secret door' ,
  'Continue straight 20 ft., then the passage turns left and continues 10 ft.' ,
  'Continue straight 20 ft., then the passage turns left and continues 10 ft.' ,
  'Continue straight 20 ft., then the passage turns right and continues 10 ft.' ,
  'Continue straight 20 ft., then the passage turns right and continues 10 ft.' ,
  `Chamber: ${chambers}` , 
  `Chamber: ${chambers}` ,
  `Chamber: ${chambers}` ,
  `Chamber: ${chambers}` ,
  `Chamber: ${chambers}` ,
  `Stairs: ${stairs}` ,
  
]

function passages() {
  console.log('Passage:')
  console.log(passagesArr[Math.floor(Math.random() * 20)]);
}

startingArea();
//passages();
