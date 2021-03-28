export interface Cities {
  [cityName: string]: number;
}

export const cities: Cities = {
  Amsterdam: 2759794,
  Athens: 264371,
  Paris: 2988507,
  Prague: 3067696,
  Rome: 3169070,
};

// City with City id
export enum City {
  Amsterdam = 2759794,
  Athens = 264371,
  Paris = 2988507,
  Prague = 3067696,
  Rome = 3169070,
}
