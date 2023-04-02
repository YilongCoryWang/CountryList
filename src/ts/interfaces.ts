export interface ICountry {
    "name": {
        "common": string,
        "official": string,
    },
    "cca2": string,
    "ccn3": string,
    "cca3": string,
    "cioc": string,
    "idd": {
        "root": string,
        "suffixes": string[]
    },
    "capital": string[],
    "region": string,
    "latlng": number[],
    "area": number,
    "population": number,
    "timezones": string[],
    "flags": {
        "png": string,
    },
}

export interface ISearchBoxProps {
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IBackBtnProps {
  handleClick?: () => void;
}