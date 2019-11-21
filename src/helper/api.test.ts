import { api } from "./api";

describe("Positive Test Case for api function", () => {
  test("return success response when the url is valid", async () => {
    const expectedResponse = {
      status: 200,
      statusText: "OK",
      data: {
        data: {
          id: 3,
          email: "emma.wong@reqres.in",
          first_name: "Emma",
          last_name: "Wong",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
        }
      }
    };
    expect(
      await api({ url: "https://reqres.in/api/users/3", method: "GET" })
    ).toStrictEqual(expectedResponse);
  });

  test("return success response when the url is valid", async () => {
    const expectedResponse = { status: 404, statusText: "Not Found", data: {} };
    expect(
      await api({ url: "https://reqres.in/api/users/1000", method: "GET" })
    ).toStrictEqual(expectedResponse);
  });
});

describe("Negative Test Case for api function", () => {
  test("return undefined when the url is invalid", async () => {
    const expectedResponse = undefined;
    expect(await api({ url: "/api/unknown/2", method: "GET" })).toBe(
      expectedResponse
    );
  });
});
