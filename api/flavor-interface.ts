export default interface Flavor {
    _id: string;
    flavor: string;
    image: string;
    category: {
      'pre-roll': number;
      vape: number;
      hybrid: number;
      flower: number;
      extract: number;
      gear: number;
      sativa: number;
      edible: number;
      indica: number;
      tincture: number;
      grow: number;
    };
    snapshot: string;
    total: number;
  }