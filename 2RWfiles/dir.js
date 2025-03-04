// const fs = require('fs');

// if (!fs.existsSync('./3Class')) {
//   fs.mkdir('./3Class', (err) => {
//     if (err) throw err;
//     console.log('3Class directory created');
    
//   });
// }
// fs.mkdir('./3Class', (err) => {
//   if (err) throw err;
//   console.log('2Class directory created');{
//     console.log(err);
//   }
//   }
// );

// if (!fs.existsSync('./3Class')) {
//     fs.rmdir('./3Class', (err) => {
//       if (err) throw err;
//       console.log('3Class directory removed');
//     });
//   }

const fs = require('fs');

// Check if directory exists and create if not
if (!fs.existsSync('./3Class')) {
  fs.mkdir('./3Class', (err) => {
    if (err) throw err;
    console.log('3Class directory created');
  });
} else {
  console.log('Directory already exists');
}

// Remove directory only if it exists
if (fs.existsSync('./3Class')) {
  fs.rmdir('./3Class', (err) => {
    if (err) throw err;
    console.log('3Class directory removed');
  });
} else {
  console.log('Directory does not exist');
}
