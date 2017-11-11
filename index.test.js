import app, { getNodeProjection } from './index'

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

  describe('getNodeProjection', () => {
    it('should work for base 5, dept 1', () => {
      const base = 5
      const depth = 1
      expect(getNodeProjection(base, depth)).toBe(1)
    })

    it('should work for base 5, depth 2', () => {
      const base = 5
      const depth = 2
      expect(getNodeProjection(base, depth)).toBe(6)
    })

    it('should work for base 5, depth 3', () => {
      const base = 5
      const depth = 3
      expect(getNodeProjection(base, depth)).toBe(31)
    })
  })
})
