import {config as beCnfg} from 'be-enhanced/config.js';
import {BE, BEConfig} from 'be-enhanced/BE.js';
import {Actions, AllProps, AP, PAP} from './types';
import { IEnhancement, PropInfo,  BEAllProps} from './be-enhanced/types';
import { Positractions } from 'trans-render/froop/types';

export class BeABeacon extends BE implements Actions{
    static override config: BEConfig<AP & BEAllProps, Actions & IEnhancement, any> = {
        propDefaults:{
            eventName: 'i-am-here'
        },
        propInfo: {
            ...beCnfg.propInfo as Partial<{[key in keyof AP]: PropInfo}>,
        },
        positractions: beCnfg.positractions as Positractions<IEnhancement>,
        actions:{
            hydrate: {
                ifAllOf: ['eventName']
            },
            retire: {
                ifAllOf: ['resolved']
            }
        }
    }

    hydrate(self: this): PAP {
        const {enhancedElement, eventName} = self;
        const type = eventName === '#' ? enhancedElement.id : eventName
        enhancedElement.dispatchEvent(new CustomEvent(type, {
            bubbles: true,
        }));
        return {
            resolved: true,
        } as PAP
    }

    retire(self: this){
        const {enhancedElement} = self;
        (<any>enhancedElement).beEnhanced.whenDetached('be-a-beacon');
    }
}

export interface BeABeacon extends AP{

}