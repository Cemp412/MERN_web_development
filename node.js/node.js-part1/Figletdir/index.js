const figlet = require("figlet");
figlet("Apna rasta", function(err, data){
    if(err) {
        console.log("something went wrong.");
        console.dir(err);
        return;
    }
    console.log(data);
}) 