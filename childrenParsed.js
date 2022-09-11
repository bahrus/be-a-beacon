import './be-a-beacon.js';
export function childrenParsed(parent) {
    return new Promise(resolved => {
        const existing = Array.from(parent.querySelectorAll('[be-a-beacon],[data-be-a-beacon],[is-a-beacon],[data-is-a-beacon]'));
        for (const instance of existing) {
            if (isLastChild(parent, instance)) {
                resolved();
            }
            ;
        }
        const abortController = new AbortController();
        parent.addEventListener('i-am-here', e => {
            if (isLastChild(parent, e.target)) {
                abortController.abort();
                resolved();
            }
        });
    });
}
function isLastChild(parent, child) {
    return child.nextElementSibling === null && child.parentElement === parent;
}
