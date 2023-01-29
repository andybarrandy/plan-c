find templates_dev/ -name "*.jsx" -exec ./node_modules/.bin/babel {} --out-file {}.js \;
mv templates_dev/*.jsx.js templates
find templates -name "*.jsx.js" -exec bash -c 'mv "$0" "${0%.jsx.js}.js"' {} \;
