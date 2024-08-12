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
  console.log('Starting Area:',startingAreaArr[(Math.floor(Math.random() * startingAreaArr.length))]);
}



const passagesArr = [
  'Continue straight 30 ft., no doors or side passages' ,
  'Continue straight 30 ft., no doors or side passages' ,
  `Continue straight 20 ft., door (${doors}) to the right, then an additional 10 ft. ahead` ,
  `Continue straight 20 ft., door (${doors}) to the left, then an additional 10 ft. ahead` ,
  `Continue straight 20 ft.; passage ends in a door (${doors})` ,
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
  `Stairs: ${stairs}`]

  function passages() {
    console.log('Passage:',passagesArr[(Math.floor(Math.random() * passagesArr.length))]);
  }

  const doorsArr = [
    'Wooden',
    'Wooden, barred or locked',
    'Stone',
    'Stone, barred or locked',
    'Iron',
    'Iron, barred or locked',
    'Portcullis',
    'Portcullis, locked in place',
    'Secret Door',
    'Secret Door, barred or locked'
  ]

  function doors() {
    console.log('Door:',doorsArr[(Math.floor(Math.random() * doorsArr.length))]);
  }

  const beyondADoorArr = [
    'Passage extending 10 feet, then T intersection extending 10 feet to the right and left',
    'Passage 20 feet straight ahead',
    `Chamber (${chambers})`,
    `Stairs (${stairs})`,
    'False door with trap'
  ]

 function beyondADoor()  {
  console.log('Beyond a door:',beyondADoorArr[(Math.floor(Math.random() * beyondADoorArr.length))]);
 }

 const chambersArr = [
  `Square, 20x20 feet. Exit: (${normalChamberExit}). Exit Location: (${exitLocation}). Exit type: (${exitType}).`,
  `Square, 30x30 feet. Exit: (${normalChamberExit}) Exit Location: (${exitLocation}). Exit type: (${exitType}).`,
  `Square, 40x40 feet. Exit: (${normalChamberExit}) Exit Location: (${exitLocation}). Exit type: (${exitType}).`,
  `Rectangle 20x30 feet. Exit: (${normalChamberExit}) Exit Location: (${exitLocation}). Exit type: (${exitType}).`,
  `Rectagle 30x40 feet. Exit: (${normalChamberExit}) Exit Location: (${exitLocation}). Exit type: (${exitType}).`,
  `Rectangle, 40x50 feet. Exit: (${largeChamberExit}) Exit Location: (${exitLocation}). Exit type: (${exitType}).`,
  `Rectagle, 50x80 feet. Exit: (${largeChamberExit}) Exit Location: (${exitLocation}). Exit type: (${exitType}).` ,
  `Circle, 30 foot diameter. Exit: (${normalChamberExit}) Exit Location: (${exitLocation}). Exit type: (${exitType}).`,
  `Circle, 50 foot diameter. Exit: (${largeChamberExit}) Exit Location: (${exitLocation}). Exit type: (${exitType}).`,
  `Octagon, 40x40 feet. Exit: (${largeChamberExit}) Exit Location: (${exitLocation}). Exit type: (${exitType}).`,
  `Octagon, 60x60 feet. Exit: (${largeChamberExit}) Exit Location: (${exitLocation}). Exit type: (${exitType}).`,
  `Trapezoid, roughly 40x60 feet. Exit: (${largeChamberExit}) Exit Location: (${exitLocation}). Exit type: (${exitType}).`
 ]

 function chambers () {
  console.log('Chamber:',chambersArr[(Math.floor(Math.random() * chambersArr.length))]);
 }

 const normalChamberExitArr = [
  '0',
  '0',
  '1',
  '1',
  '2',
  '2',
  '3',
  '3',
  '4',
  '4'
 ]

 function normalChamberExit () {
  console.log(normalChamberExitArr[(Math.floor(Math.random() * normalChamberExitArr.length))]);
 }

 const largeChamberExitArr = [
  '0',
  '1',
  '1',
  '2',
  '2',
  '3',
  '3',
  '4',
  '5',
  '6'
 ]

 function largeChamberExit () {
  console.log(largeChamberExitArr[(Math.floor(Math.random() * largeChamberExitArr.length))]);
 }

 const exitLocationArr = [
  'Wall opposite of entrance',
  'Wall left of entrance',
  'Wall right of entrance',
  'Same wall as entrance'
 ]

 function exitLocation () {
  console.log(exitLocationArr[(Math.floor(Math.random() * exitLocationArr.length))]);
 }

 const exitTypeArr = [
  `Door: (${doors}) Leading to: ${beyondADoor}`,
  'Corridor, 10 feet long'
 ]

 function exitType () {
  console.log(exitTypeArr[(Math.floor(Math.random() * exitTypeArr.length))]);
 }

const stairsArr = [
  `Down one level to a chamber (${chambers})`,
  'Down one level to a passage 20 feet long',
  `Down two levels to a chamber (${chambers})`,
  'Down two levels to a passage 20 feet long',
  `Down three levels to a chamber (${chambers})`,
  'Down three levels to a passage 20 feet long',
  `Up one level to a chamber (${chambers})`,
  'Up one level to a pasage 20 feet long',
  'Up to a dead end',
  'Down to a dead end',
  'Chimney up on level to a passage 20 feet long',
  'Chimney up two levels to a passage 20 feet long',
  `Shaft (with or without elevator) down one level to a chamber (${chambers})`,
  `Shaft (with or without elevator) up one level to a chamber (${chambers}), and down one level to a chamber (${chambers})`
]

function stairs () {
  console.log(stairsArr[(Math.floor(Math.random() * stairsArr.length))]);
}

chambers();


 