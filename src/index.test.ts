import { compareLength, validateUrl, compareResponseUrl, compareApi } from ".";
import * as fs from "fs";

describe("Positive Test Case for compareLength", () => {
  test("return first number if the first number is biggest than second number", () => {
    expect(compareLength(2, 1)).toEqual(2);
    expect(compareLength(1, -2)).toEqual(1);
  });

  test("return second number if the second number is biggest than first number", () => {
    expect(compareLength(1, 2)).toEqual(2);
  });
});

describe("Negative Test Case for compareLength", () => {
  test("not return the smallest number", () => {
    expect(compareLength(2, 1)).not.toEqual(1);
  });
});

describe("Positive Test Case for validateUrl", () => {
  test("return true for valid url", () => {
    expect(validateUrl("https://reqres.in/api/users?page=2")).toEqual(true);
    expect(validateUrl("https://google.com")).toEqual(true);
    expect(validateUrl("http://google.com")).toEqual(true);
    expect(validateUrl("www.google.com")).toEqual(true);
    expect(validateUrl("http://www.google.com:80")).toEqual(true);
    expect(validateUrl("ftp://mysite.com")).toEqual(true);
    expect(validateUrl("http://123.12.12.2.com")).toEqual(true);
    expect(validateUrl("https://www.xn--80ak6aa92e.com/")).toEqual(true);
  });
});

describe("Negative Test Case for validateUrl", () => {
  test("return true for valid url", () => {
    expect(validateUrl("/api/unknown/2")).toEqual(false);
  });
});

describe("Positive Test Case for compareResponseUrl", () => {
  test("return true for valid url", () => {
    console.log = jest.fn();
    console.log(
      compareResponseUrl(
        "https://reqres.in/api/users?page=2",
        "https://reqres.in/api/users?page=1"
      )
    );
  });
});

describe("Positive Test Case for compareApi", () => {
  test("return true for valid url", async () => {
    jest.setTimeout(50000);
    await compareApi(
      fs.readFileSync("./data/file1.txt"),
      fs.readFileSync("./data/file2.txt")
    );
  });
});
