import app from './index'

describe('app', () => {
  it('should generate n nodes', () => {
    const tree = app(5, 3)
    const root = tree
    expect(root.name).toBe('0')
    expect(root.nodes[0].name).toBe('0.0')
    expect(root.nodes[0].nodes[0].name).toBe('0.0.0')
  })
})
