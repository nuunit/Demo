
import { RoomClass} from "./roomClass";
import { City } from "./city";

export class Hotel{
    id: number;
    name:string; 
    star:string;
    thumbnailPicture: string;
    picture:string;
    city:City;
    roomClassed:RoomClass[];
}