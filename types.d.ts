import {IEnhancement} from 'trans-render/be/types';

export interface EndUserProps extends IEnhancement{
    eventName: string, //TODO
}
export interface AllProps extends EndUserProps{}

export type AP = AllProps;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>;


export interface Actions{
    hydrate(self: this): PAP;
    retire(self: this): void;
}