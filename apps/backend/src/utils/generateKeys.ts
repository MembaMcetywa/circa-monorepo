const crypto = require('crypto');

const generateSecret = () => {
  return crypto.randomBytes(32).toString('hex');
};

const jwtSecret = generateSecret();
const refreshTokenSecret = generateSecret();

console.log('JWT_SECRET=', jwtSecret);
console.log('REFRESH_TOKEN_SECRET=', refreshTokenSecret);
