const { Toolkit } = require('actions-toolkit')

describe('token-retriever', () => {
  let action, tools

  // Mock Toolkit.run to define `action` so we can call it
  Toolkit.run = jest.fn((actionFn) => { action = actionFn })
  // Load up our entrypoint file
  require('.')

  beforeEach(() => {
    // Create a new Toolkit instance
    tools = new Toolkit()
    // Mock methods on it!
    tools.exit.success = jest.fn()
  })

  it('exits successfully', () => {
    action(tools)
    expect(tools.exit.success).toHaveBeenCalled()
    expect(tools.exit.success).toHaveBeenCalledWith('successfully logged GH action token. decode it with base64.')
  })
})
