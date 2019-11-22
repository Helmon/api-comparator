import { api } from "./helper/api";

export function compareLength(length1: number, length2: number): number {
  if (length1 > length2) {
    return length1;
  }
  return length2;
}

export async function compareResponseUrl(
  url1: string,
  url2: string
): Promise<void> {
  const promise1 = api({ url: url1, method: "GET" });
  const promise2 = api({ url: url2, method: "GET" });

  /**
   * Promise.all do parallel compare url, and use await for sequence step of compare
   */

  await Promise.all([promise1, promise2])
    .then(function(resp) {
      const resp1 = JSON.stringify(resp[0].data);
      const resp2 = JSON.stringify(resp[1].data);
      if (resp1 === resp2) {
        console.log(url1 + " equals " + url2);
      } else {
        throw Error();
      }
    })
    .catch(() => {
      console.log(url1 + " not equals " + url2);
    });
}

export function validateUrl(url: string): boolean {
  const regex = /^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
  return regex.test(url);
}

/**
 * will pass file1 and file2 in Buffer type because I use fs.readFileSync to read the file, and the result is Buffer.
 * After get the params, I convert the Buffer toString and then convert it to array
 */
export async function compareApi(file1: Buffer, file2: Buffer): Promise<void> {
  const listFile1Url = file1.toString("utf-8").split("\n");
  const listFile2Url = file2.toString("utf-8").split("\n");

  /**
   * Need to compare the length of list url, because I want to decice how many iteration I need.
   */

  const maxLengthUrl = compareLength(listFile1Url.length, listFile2Url.length);

  for (let i = 0; i < maxLengthUrl; i++) {
    const url1 = listFile1Url[i];
    const url2 = listFile2Url[i];

    /**
     * Directly validate url, so if I find invalid url, I don't need to compareResponseUrl and not wasting time
     */

    if (validateUrl(url1) && validateUrl(url2)) {
      await compareResponseUrl(url1, url2);
    } else {
      console.log(url1 + " not equals " + url2);
    }
  }
}
