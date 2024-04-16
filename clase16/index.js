//console.log("Hola a todos")
const fs = require('fs');


const folderName = process.argv[2] || 'proyecto';

fs.mkdirSync(folderName);
fs.mkdirSync(folderName + '/img');
fs.writeFileSync(
  `${folderName}/index.html`,
  `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <script src="main.js" defer></script>
</head>
<body>
    
</body>
</html>`
);
fs.writeFileSync(`${folderName}/style.css`, "");
fs.writeFileSync(`${folderName}/main.js`, "");
