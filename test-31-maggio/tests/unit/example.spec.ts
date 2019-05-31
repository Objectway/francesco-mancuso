const increment= require('@/components/add').default
const sub= require('@/components/sub').default

describe("test", () => {
  it("should add +1", () => {
    expect(increment(1)).toBe(2)
  })
  it("should sub -1", () => {
    expect(sub(1)).toBe(0);
  })
})