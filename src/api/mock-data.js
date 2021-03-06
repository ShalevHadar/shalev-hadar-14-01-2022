export const locationMock = {
  Version: 1,
  Key: "215836",
  Type: "City",
  Rank: 55,
  LocalizedName: "Givatayim",
  EnglishName: "Givatayim",
  PrimaryPostalCode: "",
  Region: {
    ID: "MEA",
    LocalizedName: "Middle East",
    EnglishName: "Middle East",
  },
  Country: {
    ID: "IL",
    LocalizedName: "Israel",
    EnglishName: "Israel",
  },
  AdministrativeArea: {
    ID: "TA",
    LocalizedName: "Tel Aviv",
    EnglishName: "Tel Aviv",
    Level: 1,
    LocalizedType: "District",
    EnglishType: "District",
    CountryID: "IL",
  },
  TimeZone: {
    Code: "IST",
    Name: "Asia/Jerusalem",
    GmtOffset: 2,
    IsDaylightSaving: false,
    NextOffsetChange: "2022-03-25T00:00:00Z",
  },
  GeoPosition: {
    Latitude: 32.069,
    Longitude: 34.811,
    Elevation: {
      Metric: {
        Value: 73,
        Unit: "m",
        UnitType: 5,
      },
      Imperial: {
        Value: 239,
        Unit: "ft",
        UnitType: 0,
      },
    },
  },
  IsAlias: false,
  ParentCity: {
    Key: "215854",
    LocalizedName: "Tel Aviv",
    EnglishName: "Tel Aviv",
  },
  SupplementalAdminAreas: [],
  DataSets: [
    "AirQualityCurrentConditions",
    "AirQualityForecasts",
    "Alerts",
    "DailyPollenForecast",
    "ForecastConfidence",
    "FutureRadar",
    "MinuteCast",
  ],
};

export const autocompleteMock = [
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
      LocalizedName: "??zmir",
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

export const cityMock = [
  {
    LocalObservationDateTime: "2022-01-14T15:27:00+02:00",
    EpochTime: 1642166820,
    WeatherText: "Clouds and sun",
    WeatherIcon: 4,
    HasPrecipitation: false,
    PrecipitationType: null,
    IsDayTime: true,
    Temperature: {
      Metric: {
        Value: 15.1,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 59.0,
        Unit: "F",
        UnitType: 18,
      },
    },
    MobileLink:
      "http://www.accuweather.com/en/il/tel-aviv-port/215793/current-weather/215793?lang=en-us",
    Link: "http://www.accuweather.com/en/il/tel-aviv-port/215793/current-weather/215793?lang=en-us",
  },
];

export const fiveDaysDailyForecastMock = {
  Headline: {
    EffectiveDate: "2022-01-14T13:00:00+02:00",
    EffectiveEpochDate: 1642158000,
    Severity: 3,
    Text: "Expect showery weather Friday afternoon through Saturday morning",
    Category: "rain",
    EndDate: "2022-01-15T13:00:00+02:00",
    EndEpochDate: 1642244400,
    MobileLink:
      "http://www.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?unit=c&lang=en-us",
    Link: "http://www.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?unit=c&lang=en-us",
  },
  DailyForecasts: [
    {
      Date: "2022-01-14T07:00:00+02:00",
      EpochDate: 1642136400,
      Temperature: {
        Minimum: {
          Value: 9.8,
          Unit: "C",
          UnitType: 17,
        },
        Maximum: {
          Value: 16.0,
          Unit: "C",
          UnitType: 17,
        },
      },
      Day: {
        Icon: 13,
        IconPhrase: "Mostly cloudy w/ showers",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Heavy",
      },
      Night: {
        Icon: 12,
        IconPhrase: "Showers",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Heavy",
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?day=1&unit=c&lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?day=1&unit=c&lang=en-us",
    },
    {
      Date: "2022-01-15T07:00:00+02:00",
      EpochDate: 1642222800,
      Temperature: {
        Minimum: {
          Value: 11.6,
          Unit: "C",
          UnitType: 17,
        },
        Maximum: {
          Value: 15.0,
          Unit: "C",
          UnitType: 17,
        },
      },
      Day: {
        Icon: 12,
        IconPhrase: "Showers",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Light",
      },
      Night: {
        Icon: 12,
        IconPhrase: "Showers",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Heavy",
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?day=2&unit=c&lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?day=2&unit=c&lang=en-us",
    },
    {
      Date: "2022-01-16T07:00:00+02:00",
      EpochDate: 1642309200,
      Temperature: {
        Minimum: {
          Value: 4.4,
          Unit: "C",
          UnitType: 17,
        },
        Maximum: {
          Value: 14.9,
          Unit: "C",
          UnitType: 17,
        },
      },
      Day: {
        Icon: 12,
        IconPhrase: "Showers",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Light",
      },
      Night: {
        Icon: 34,
        IconPhrase: "Mostly clear",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?day=3&unit=c&lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?day=3&unit=c&lang=en-us",
    },
    {
      Date: "2022-01-17T07:00:00+02:00",
      EpochDate: 1642395600,
      Temperature: {
        Minimum: {
          Value: 6.1,
          Unit: "C",
          UnitType: 17,
        },
        Maximum: {
          Value: 13.8,
          Unit: "C",
          UnitType: 17,
        },
      },
      Day: {
        Icon: 1,
        IconPhrase: "Sunny",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 35,
        IconPhrase: "Partly cloudy",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?day=4&unit=c&lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?day=4&unit=c&lang=en-us",
    },
    {
      Date: "2022-01-18T07:00:00+02:00",
      EpochDate: 1642482000,
      Temperature: {
        Minimum: {
          Value: 9.8,
          Unit: "C",
          UnitType: 17,
        },
        Maximum: {
          Value: 15.9,
          Unit: "C",
          UnitType: 17,
        },
      },
      Day: {
        Icon: 3,
        IconPhrase: "Partly sunny",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 12,
        IconPhrase: "Showers",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Moderate",
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?day=5&unit=c&lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?day=5&unit=c&lang=en-us",
    },
  ],
};
