import { UserInterface } from 'interfaces/user';
import { RestaurantInterface } from 'interfaces/restaurant';
import { GetQueryInterface } from 'interfaces';

export interface TableReservationInterface {
  id?: string;
  date: any;
  time: string;
  number_of_people: number;
  user_id: string;
  restaurant_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  restaurant?: RestaurantInterface;
  _count?: {};
}

export interface TableReservationGetQueryInterface extends GetQueryInterface {
  id?: string;
  time?: string;
  user_id?: string;
  restaurant_id?: string;
}
