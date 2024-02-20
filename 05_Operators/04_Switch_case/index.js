
// The switch Statement
const day = prompt("Enter any DAY");

if (day === 'monday') {
    console.log('monday');
    console.log('Go to Work');
} else if (day === 'tuesday') {
    console.log('tuesday');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('mid Week');
} else if (day === 'friday') {
    console.log('friday');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else { 
    console.log('Not a valid day!');
}


switch (day) {
    case 'monday': // day === 'monday'
        console.log('monday');
        console.log('Go to Work');
        break;
    case 'tuesday':
        console.log('tuesday');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('mid Week');
        break;
    case 'friday':
        console.log('friday');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}
