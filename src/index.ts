import { api } from "./helper/api";

export function compareApi(firstFile: Buffer, secondFile: Buffer): void {
  console.log(firstFile.toString("utf-8") + "" + secondFile.toString("utf-8"));
}

// export default compareApi;
