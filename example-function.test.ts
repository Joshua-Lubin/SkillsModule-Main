import { exampleFunction } from "./example-function";

test('Case 1: returns { id: "id1", message: "message1" }', () => {
  expect(exampleFunction("message1", "id1")).toStrictEqual({
    id: "id1",
    message: "message1",
  });
});

test('Case 2: returns { id: "id2", message: "message2" }', () => {
  expect(exampleFunction("message2", "id2")).toStrictEqual({
    id: "id2",
    message: "message2",
  });
});

