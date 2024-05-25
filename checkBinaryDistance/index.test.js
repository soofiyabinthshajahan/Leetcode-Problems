const { checkBinaryDistance } = require(".");


test("canary", () => {
    expect(true).toBe(true);
  });


  test('check the binary(1) is at least two places away from each other', () => {
    expect(checkBinaryDistance([1, 0, 0, 0, 1, 0, 0, 1], 2)).toBe(true);
});

  
test ('return false if any binary 1 is not two places away from each other',()=>{
    expect(checkBinaryDistance([1,0,0,1,0,1], 2)).toBe(false);

})