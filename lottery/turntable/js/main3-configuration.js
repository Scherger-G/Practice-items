 /**
 * 
 * @param {any} tagName 
 * @param {any} classname 
 * @returns 
 * 
 */

export let getClassName = (tagName, classname) => {
    if (document.getElementsByClassName) {
        return document.getElementsByClassName(classname);
    } else {
        let results = [];
        let elems = document.getElementsByTagName('*');
        for (let i = 0; i < elems.length; i++) {
            if (elems[i].className.indexOf(classname) != -1) {
                results[results.length] = elems[i];
            }
        }
        return results;
    }
}
