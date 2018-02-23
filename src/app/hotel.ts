
import { RoomClass} from "./roomClass";
import { City } from "./city";

export class Hotel{
    id: number;
    name:string; 
    thumbnailPicture: string;
    city:City;
    roomClassed:RoomClass[];
}