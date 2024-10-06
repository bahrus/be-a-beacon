// @ts-check
import './emc.js';
/**
 * 
 * @param {Element} parent 
 * @returns 
 */
export function childrenParsed(parent) {

    return /** @type {Promise<void>} */(new Promise(resolved => {
        const existing = Array.from(parent.querySelectorAll('[be-a-beacon],[enh-by-be-a-beacon],[data-enh-by-be-a-beacon]'));
        for (const instance of existing) {
            if (isLastChild(parent, instance)) {
                resolved();
            }
            ;
        }
        const abortController = new AbortController();
        parent.addEventListener('i-am-here', e => {
            if (isLastChild(parent, /** @type {Element} */(e.target))) {
                abortController.abort();
                resolved();
            }
        });
    }));
}
/**
 * 
 * @param {Element} parent 
 * @param {Element} child 
 * @returns 
 */
function isLastChild(parent, child) {
    return child.nextElementSibling === null && child.parentElement === parent;
}
