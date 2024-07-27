import {IEnhancement, BEAllProps} from './node_modules/trans-render/be/types';

export interface EndUserProps extends IEnhancement{
    eventName: string, //TODO
}
export interface AllProps extends EndUserProps{}

export type AP = AllProps;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>;


export interface Actions{
    hydrate(self: AP & BEAllProps): PAP;
    retire(self: AP & BEAllProps): void;
}