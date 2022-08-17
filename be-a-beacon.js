import { define } from 'be-decorated/be-decorated.js';
import { register } from 'be-hive/register.js';
export class BeABeacon {
}
const tagName = 'be-a-beacon';
const ifWantsToBe = 'a-beacon';
const upgrade = 'template';
define({
    config: {
        tagName,
        propDefaults: {
            ifWantsToBe,
            forceVisible: ['template'],
            upgrade,
            virtualProps: [],
        },
        actions: {}
    },
    complexPropDefaults: {
        controller: BeABeacon
    }
});
register(ifWantsToBe, upgrade, tagName);
