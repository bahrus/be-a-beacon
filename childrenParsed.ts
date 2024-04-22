import './behivior.js';

export function childrenParsed(parent: Element): Promise<void>{
    return new Promise(resolved => {
        const existing = Array.from(parent.querySelectorAll('[be-a-beacon],[enh-by-be-a-beacon],[data-enh-by-be-a-beacon]'));
        for(const instance of existing){
            if(isLastChild(parent, instance)){
                resolved();
            };
        }
        const abortController = new AbortController();
        parent.addEventListener('i-am-here', e => {
            if(isLastChild(parent, e.target as Element)){
                abortController.abort();
                resolved();
            }
        });
    });
}

function isLastChild(parent: Element, child: Element){
    return child.nextElementSibling === null && child.parentElement === parent;
}