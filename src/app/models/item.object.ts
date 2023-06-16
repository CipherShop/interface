import { ECondition } from "./condition.enum";
import { IOption } from "./option.object";
import { IQuantity } from "./quantity.object";
import { ISold } from "./sold.object";

export interface IItem {
    UID: number;
    title: string;
    description: string;
    about: string;
    seller: string; //name of ISeller
    prices: number[];
    isErc20Price: boolean; //true -> erc-20, false -> ETH
    erc20: string;
    admitBids: boolean;
    bid: number;
    bids: any[];
    images: string[];
    quantity: number | IQuantity[];
    sold: number | ISold[];
    watch: string[]; //name of IUser
    condition: ECondition;
    localization: number;
    shipping: number[];
    shippingTo: number[];
    deliveryPrice: number;
    admitsReturns: boolean;
    returns: Date;
    options?: IOption[];
}
