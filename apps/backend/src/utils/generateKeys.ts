import { randomBytes } from 'crypto';
//use require('crypto') when running file to create the local jwt secret and refreh token secret
//Generate your own jwt secrets for local usage using this code

const generateSecret = () => {
  return randomBytes(32).toString('hex');
};

const jwtSecret = generateSecret();
const refreshTokenSecret = generateSecret();

console.log('JWT_SECRET=', jwtSecret);
console.log('REFRESH_TOKEN_SECRET=', refreshTokenSecret);
