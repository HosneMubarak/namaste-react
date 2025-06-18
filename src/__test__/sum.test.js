import sum from "../components/sum";
test("Sum fuction test", () => {
  const result = sum(4, 4);
  expect(result).toBe(8);
});
