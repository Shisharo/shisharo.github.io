const fs = require('fs');
const https = require('https');

// File URL
const url = `https://theboyz.dns.army/Poppins.zip`;

// Download the file
https.get(url, (res) => {

    // Open file in local filesystem
    const file = fs.createWriteStream(`Poppins.zip`);

    // Write data into local file
    res.pipe(file);

    // Close the file
    file.on('finish', () => {
        file.close();
        console.log(`File downloaded!`);
    });

}).on("error", (err) => {
    console.log("Error: ", err.message);
});