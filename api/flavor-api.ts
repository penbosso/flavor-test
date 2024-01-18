/*
  An asynchronous function 'getAllFlavors' that reads flavor data from a 'flavor-mock.json' file,
  transforms it by adding an 'image' property based on the flavor name, and returns an array of flavored data with added image URLs.

  Error Handling:
    - In case of any errors during file reading or JSON parsing,
      the function logs the error to the console and returns an empty array.
*/

import { promises as fsp } from "fs";
import Flavor from "./flavor-interface";

const getAllFlavors = async () => {
  try {
    const fileData = await fsp.readFile("api/data/flavor-mock.json", "utf-8");
    const jsonData: Flavor[] = JSON.parse(fileData).result.map(
      (data: Flavor) => ({
        ...data,
        image: `/flavors/${data.flavor.replace(/ /g, "-")}.jpg`,
      })
    );

    return jsonData;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const flavorApi = { getAllFlavors };
