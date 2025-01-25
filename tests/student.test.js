const request = require('supertest');
const app = require('../src/app');

describe("Student API", () => {
  it("should create a new student", async () => {
    const res = await request(app).post("/api/v1/students").send({
      name: "John Doe",
      age: 20,
      grade: "A"
    });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("id");
  });
});
