import {BE, propDefaults, propInfo} from 'be-enhanced/BE.js';
import {XE} from 'xtal-element/XE.js';
import {BEConfig} from 'be-enhanced/types';
import {IBE, EnhancementInfo} from 'be-enhanced/types.js';
import {Actions, AllProps, AP, PAP} from '../types';


export class BeABeacon extends BE implements Actions{
    static  override get beConfig(){
        return {
            parse: true,
            primaryProp: 'eventName',
            attachWhenConnected: true,
        } as BEConfig;
    }
    hydrate(self: this): PAP {
        const {enhancedElement, eventName} = self;
        const type = eventName === '#' ? enhancedElement.id : eventName
        enhancedElement.dispatchEvent(new CustomEvent(type, {
            bubbles: true,
        }));
        return {
            resolved: true,
        }
    }

    retire(self: this){
        const {enhancedElement} = self;
        (<any>enhancedElement).beEnhanced.whenDetached('be-a-beacon');
    }
}

export interface BeABeacon extends AP{

}

export const tagName = 'be-a-beacon';


const xe = new XE<AP, Actions>({
    config: {
        tagName,
        propDefaults:{
            ...propDefaults,
            eventName: 'i-am-here', 
        },
        propInfo: {
            ...propInfo
        },
        actions: {
            hydrate: 'eventName',
            retire: 'resolved'
        }
    },
    superclass: BeABeacon
});




