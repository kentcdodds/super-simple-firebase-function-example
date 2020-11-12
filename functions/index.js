const functions = require('firebase-functions')

module.exports = {
  hello: functions.https.onRequest((req, res) => {
    const subject = req.query.subject || 'World'
    res.send(`Hello ${subject}!`)
  }),
}
