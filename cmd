go to backend
npm init and enter all 

PS D:\oneCart\backend> npm i express
PS D:\oneCart\backend> npm i mongoose
PS D:\oneCart\backend> npm i nodemon
PS D:\oneCart\backend> npm i bcryptjs
PS D:\oneCart\backend> npm i cors         {make connection b/w frontend and backend}
PS D:\oneCart\backend> npm i dotenv
PS D:\oneCart\backend> npm i jsonwebtoken
PS D:\oneCart\backend> npm i cookie-parser

npm i mongoose express nodemon bcryptjs cors dotenv jsonwebtoken cookie-parser

add this in [package.json] {"type": "module"}, for import any package and hume require krne ki zaroot nahi hogi import kr skte hain abb.
add this after author.

script ke andr jo test hain usme likhenge nodemon index.js {package.json main} {"test": "echo \"Error: no test specified\" && exit 1"}  ------->{"dev": "nodemon index.js"}
