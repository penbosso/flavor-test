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
