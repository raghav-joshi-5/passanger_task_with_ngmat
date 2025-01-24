export interface Ipass {
  id: string;
  fullname: string;
  checkin: boolean;
  checkindate: number | null;
  children: Ichildren[] | null;
}

export interface Ichildren {
  name: string;
  age: number;
}
