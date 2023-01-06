import { ECondition } from "./condition.enum";

export interface IItem {
    UID: number;
    title: string;
    description: string;
    seller: string; //name of ISeller
    price: number;
    isErc20Price: boolean; //true -> erc-20, false -> ETH
    erc20: string;
    admitBids: boolean;
    bid: number;
    bids: any[];
    images: string[];
    quantity: number;
    sold: number;
    watch: string[]; //name of IUser
    condition: ECondition;
    localization: number;
    shippingTo: number[];
    deliveryPrice: number;
    admitsReturns: boolean;
    returns: Date;
}
