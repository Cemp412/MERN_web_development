const fs = require('fs');

fs.readFile('myFile.txt', 'utf8', (err, data) => {
    if(err) {
        console.error('Error reading file => ' + err);
        return;
    }
    else{
        fs.appendFile('myFile.txt', '\n This is later thing', 'utf8', (err) => {
            if (err) {
                console.error('Error writing file => ' + err);
                return;
            }
            console.log('File has been written successfully!');
        });

        fs.writeFile('myFile.txt', 'This text will be appended\n', {encoding:'utf8', flag:'a'}, (err) => {

            if(err) throw err;
            console.log('New content appneded');
        });
        
        console.log('File content:' + data);
    }
});

console.log('Reading file... (this runs first!)');