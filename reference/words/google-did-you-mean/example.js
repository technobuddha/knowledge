// 🚨
// 🚨 Source: https://github.com/words/google-did-you-mean/archive/refs/heads/master.zip::google-did-you-mean-master/example.js
// 🚨
const didYouMean = require('.')

async function main () {
  const query = await didYouMean('fidooshiary')
  console.log(query.suggestion) // => 'fiduciary'
}

main()
