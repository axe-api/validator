rm -rf node_modules 
rm -rf package-lock.json

npm unlink robust-validator
npm link robust-validator

# npm install
pwd
node index.js

npm unlink robust-validator