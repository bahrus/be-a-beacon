import {BeDecoratedProps, MinimalProxy} from 'be-decorated/types';


export interface EndUserProps {}
export interface VirtualProps extends EndUserProps, MinimalProxy{

}

export type Proxy = HTMLTemplateElement & VirtualProps;

export interface PP extends VirtualProps{
    proxy: Proxy;
}

export type ProxyProps = PP;


export interface Actions{
    intro(proxy: Proxy, target: HTMLTemplateElement, beDecorProps: BeDecoratedProps): void;
}