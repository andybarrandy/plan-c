const fs = require('fs');
const path = require('path');

function readHTMLFiles(directory) {
    fs.readdir(directory, (err, files) => {
        if (err) {
            console.error(`Error reading directory: ${err}`);
            return;
        }

        files.forEach((file) => {
            if (path.extname(file) === '.js') {
                fs.readFile(path.join(directory, file), 'utf8', (err, data) => {
                    if (err) {
                        console.error(`Error reading file: ${err}`);
                        return;
                    }
                    var finalCode = convertToPlainJS(data);

                    writeFile('templates/' + file.replace('.html', '.js'), finalCode);
                });
            }
        });
    });
}


function writeFile(filePath, content) {
    const dirname = path.dirname(filePath);
    if (!fs.existsSync(dirname)) {
        fs.mkdirSync(dirname, { recursive: true });
    }
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
    }
    fs.writeFile(filePath, content, (err) => {
        if (err) {
            console.error(`Error writing file: ${err}`);
            return;
        }
        console.log(`File written successfully to ${filePath}`);
    });
}

function convertToPlainJS(content) {
    return content
      .replace(/import React from "react";/g, '')
      .replace(/class SuppliersPreview extends React.Component {/g, 'var SuppliersPreview = createClass({')
      .replace(/render() {/g, 'render: function() {')
      .replaceAll(/React.createElement/g, 'h') + ')';
};

// walk over templates_dev directory and read all files
// for every file call replaceTagsWithH function
// store the result in a new file in templates directory with the same name but .js extension
readHTMLFiles('templates');

