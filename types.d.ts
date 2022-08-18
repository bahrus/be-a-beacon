import {BeDecoratedProps} from 'be-decorated/be-decorated.js';

export interface BeABeaconVirtualProps{

}

export interface BeABeaconProps extends BeABeaconVirtualProps{
    proxy: HTMLTemplateElement & BeABeaconVirtualProps;
}

export interface BeABeaconActions{
    intro(proxy: Element & BeABeaconVirtualProps, target: Element, beDecorProps: BeDecoratedProps): void;
}