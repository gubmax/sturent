import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../etc/config.json';

function generateToken(user) {
  let payload = {
    id: user.id,
    name: user.name
  };

  return token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: 60 * 60 * 24 //24 hours
  });
}
