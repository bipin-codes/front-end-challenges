export interface Stay {
  beds: number;
  city: string;
  country: string;
  maxGuests: number;
  photo: string;
  rating: number;
  superHost: boolean;
  title: string;
  type: string;
}

export interface Guests {
  adults: number;
  children: number;
}
