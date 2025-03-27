export interface Pais {
    name: string;
    topLevelDomain: string[];
    alpha2Code: string;
    alpha3Code: string;
    callingCodes: string[];
    capital: string;
    altSpellings: string[];
    region: string;
    subregion: string;
    population: number;
    latlng: number[];
    demonym: string;
    area?: number;
    gini?: number;
    timezones: string[];
    borders: string[];
    nativeName: string;
    numericCode?: string;
    currencies: Currency[];
    languages: Language[];
    translations: Translations;
    flag: string;
    regionalBlocs: (RegionalBloc | RegionalBlocs2 | RegionalBlocs3 | RegionalBlocs4 | RegionalBlocs5 | RegionalBlocs6)[];
    cioc?: string;
  }
  
  export interface RegionalBlocs6 {
    acronym: string;
    name: string;
    otherAcronyms: string[];
    otherNames: string[];
  }
  
  export interface RegionalBlocs5 {
    acronym: string;
    name: string;
    otherAcronyms: string[];
    otherNames: any[];
  }
  
  export interface RegionalBlocs4 {
    acronym: string;
    name: string;
    otherAcronyms: any[];
    otherNames: any[];
  }
  
  export interface RegionalBlocs3 {
    acronym: string;
    name: string;
    otherAcronyms: string[];
    otherNames: string[];
  }
  
  export interface RegionalBlocs2 {
    acronym: string;
    name: string;
    otherAcronyms: any[];
    otherNames: string[];
  }
  
  export interface RegionalBloc {
    acronym: string;
    name: string;
    otherAcronyms: string[];
    otherNames: string[];
  }
  
  export interface Translations {
    de?: string;
    es?: string;
    fr?: string;
    ja?: string;
    it?: string;
    br: string;
    pt: string;
    nl?: string;
    hr?: string;
    fa: string;
  }
  
  export interface Language {
    iso639_1?: string;
    iso639_2: string;
    name: string;
    nativeName: string;
  }
  
  export interface Currency {
    code?: string | string;
    name?: string | string;
    symbol?: null | string | string;
  }