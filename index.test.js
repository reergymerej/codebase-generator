import app from './index'

describe('app', () => {
  it('should generate n nodes', () => {
    const root = app(5, 2)
    expect(root.name).toBe('0')
    expect(root.children[0].name).toBe('0.0')
    expect(root.children[0].children[0].name).toBe('0.0.0')
    expect(root.children[0].children[0].children[0]).toBe(undefined)
  })

  it('should generate n nodes (II)', () => {
    const root = app(2, 2)
    expect(root).toMatchObject({
      name: '0',
      children: [
        {
          name: '0.0',
          children: [
            {
              name: '0.0.0',
              children: [],
            },
            {
              name: '0.0.1',
              children: [],
            },
          ],
        },
        {
          name: '0.1',
          children: [
            {
              name: '0.1.0',
              children: [],
            },
            {
              name: '0.1.1',
              children: [],
            },
          ],
        },
      ],
    })
  })
})
