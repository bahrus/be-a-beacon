import {BeDecoratedProps, MinimalProxy} from 'be-decorated/types';


export interface BeABeaconEndUserProps {}
export interface BeABeaconVirtualProps extends MinimalProxy{

}

export type Proxy = HTMLTemplateElement & BeABeaconVirtualProps;

export interface BeABeaconProxy extends BeABeaconVirtualProps{
    proxy: Proxy;
}

export type BABP = BeABeaconProxy;


export interface BeABeaconActions{
    intro(proxy: Proxy, target: HTMLTemplateElement, beDecorProps: BeDecoratedProps): void;
}