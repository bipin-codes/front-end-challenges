export interface IWeather {
  city: {
    id: number;
    name: string;
    coords: { lat: number; lon: number };
    timezone: number;
  };
  cod: string;

  list: Array<{
    clouds: {};
    dt: number;
    dt_txt: string;
    main: {
      feels_like: number;
      grnd_level: number;
      humidity: number;
      pressure: number;
      sea_level: number;
      temp: number;
      temp_max: number;
      temp_min: number;
    };
    visibility: number;
    weather: Array<{
      id: number;
      main: string;
      description: string;
      icon: string;
    }>;
    wind: { speed: number; deg: number; gust: number };
  }>;
}
