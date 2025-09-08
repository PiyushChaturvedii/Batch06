//   let greet = 'mornin';

    // if(greet === 'morning'){
//         console.log('Good Morning');
//     }
//     else if (greet === 'afternoon'){
//         console.log('Good Afternoon');
//     }
//     else if (greet === 'evening'){
//         console.log('Good Evening');
//     }
//     else if (greet === 'night'){
// console.log('Good Night');
//     }
//     else{
//         console.log("Hello !");
//     }
  let greet = 'morning';

  switch(greet){
    case 'morning':
        console.log("Good Morning");
        break
    case 'afternoon':
        console.log("Good Afternoon");
        break
    case 'evening':
        console.log("Good Evening");
        break
    case 'night':
        console.log("Good Night");
    
        default:
            console.log("Hello !");
            break
  }