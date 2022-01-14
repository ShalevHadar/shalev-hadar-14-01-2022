import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://dataservice.accuweather.com",
  params: {
    apikey: process.env.REACT_APP_ACCUWEATHER_API_KEY,
  },
  validateStatus: (status) => status < 400,
});

export async function autocomplete(query) {
  const mock = autocompleteMock.filter(
    (item) =>
      item.LocalizedName.indexOf(query) ||
      item.Country.LocalizedName.indexOf(query)
  );
  return { data: mock };
  // const response = await apiClient.get("locations/v1/cities/autocomplete", {
  //   params: {
  //     q: query,
  //   },
  // });
  // return response;
}

const autocompleteMock = [
  {
    Version: 1,
    Key: "178087",
    Type: "City",
    Rank: 10,
    LocalizedName: "Berlin",
    Country: {
      ID: "DE",
      LocalizedName: "Germany",
    },
    AdministrativeArea: {
      ID: "BE",
      LocalizedName: "Berlin",
    },
  },
  {
    Version: 1,
    Key: "2921",
    Type: "City",
    Rank: 35,
    LocalizedName: "Berazategui",
    Country: {
      ID: "AR",
      LocalizedName: "Argentina",
    },
    AdministrativeArea: {
      ID: "B",
      LocalizedName: "Buenos Aires",
    },
  },
  {
    Version: 1,
    Key: "312122",
    Type: "City",
    Rank: 40,
    LocalizedName: "Bern",
    Country: {
      ID: "CH",
      LocalizedName: "Switzerland",
    },
    AdministrativeArea: {
      ID: "BE",
      LocalizedName: "Bern",
    },
  },
  {
    Version: 1,
    Key: "47786",
    Type: "City",
    Rank: 41,
    LocalizedName: "Bertoua",
    Country: {
      ID: "CM",
      LocalizedName: "Cameroon",
    },
    AdministrativeArea: {
      ID: "ES",
      LocalizedName: "East",
    },
  },
  {
    Version: 1,
    Key: "258220",
    Type: "City",
    Rank: 41,
    LocalizedName: "Bergen",
    Country: {
      ID: "NO",
      LocalizedName: "Norway",
    },
    AdministrativeArea: {
      ID: "12",
      LocalizedName: "Hordaland",
    },
  },
  {
    Version: 1,
    Key: "170337",
    Type: "City",
    Rank: 43,
    LocalizedName: "Bergisch Gladbach",
    Country: {
      ID: "DE",
      LocalizedName: "Germany",
    },
    AdministrativeArea: {
      ID: "NW",
      LocalizedName: "North Rhine-Westphalia",
    },
  },
  {
    Version: 1,
    Key: "289801",
    Type: "City",
    Rank: 45,
    LocalizedName: "Berezniki",
    Country: {
      ID: "RU",
      LocalizedName: "Russia",
    },
    AdministrativeArea: {
      ID: "PER",
      LocalizedName: "Perm'",
    },
  },
  {
    Version: 1,
    Key: "318259",
    Type: "City",
    Rank: 45,
    LocalizedName: "Bergama",
    Country: {
      ID: "TR",
      LocalizedName: "Turkey",
    },
    AdministrativeArea: {
      ID: "35",
      LocalizedName: "İzmir",
    },
  },
  {
    Version: 1,
    Key: "326524",
    Type: "City",
    Rank: 45,
    LocalizedName: "Berdychiv",
    Country: {
      ID: "UA",
      LocalizedName: "Ukraine",
    },
    AdministrativeArea: {
      ID: "18",
      LocalizedName: "Zhytomyr",
    },
  },
  {
    Version: 1,
    Key: "326515",
    Type: "City",
    Rank: 45,
    LocalizedName: "Berdiansk",
    Country: {
      ID: "UA",
      LocalizedName: "Ukraine",
    },
    AdministrativeArea: {
      ID: "23",
      LocalizedName: "Zaporizhzhya",
    },
  },
];
