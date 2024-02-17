echo "TESTING!!!"

npm install
npm run build

cd tests/consumers/cjs && npm run test
cd ../esm && npm run test
cd ../ts-local && npm run test