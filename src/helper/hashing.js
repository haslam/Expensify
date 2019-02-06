const crypto = require('crypto')

module.exports = function hashEmail(email) {
  const trimmedEmail = email.trim().toLowerCase();
  return crypto.createHash('md5').update(trimmedEmail).digest('hex')
}