import {BeDecoratedProps, MinimalProxy} from 'be-decorated/types';

export interface BeABeaconVirtualProps extends MinimalProxy{

}

export interface BeABeaconProps extends BeABeaconVirtualProps{
    proxy: HTMLTemplateElement & BeABeaconVirtualProps;
}

export interface BeABeaconActions{
    intro(proxy: Element & BeABeaconVirtualProps, target: Element, beDecorProps: BeDecoratedProps): void;
}