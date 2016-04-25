var fs = require('fs'),
    markdown = require('markdown').markdown,
    fileContent;

fileContent = fs.readFileSync('README.md', 'utf8');

// console.log(fileContent);

fileContent = markdown.toHTML(fileContent);

console.log(fileContent);

fs.writeFileSync('test.html', fileContent);

console.log('Done!');
