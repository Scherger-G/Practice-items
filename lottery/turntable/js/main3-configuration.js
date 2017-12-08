 /**
 * 
 * @param {any} tagName 
 * @param {any} classname 
 * @returns 
 * 
 */

export var getClassName = (tagName, classname) => {
    if (document.getElementsByClassName) {
        return document.getElementsByClassName(classname);
    } else {
        var results = [];
        var elems = document.getElementsByTagName('*');
        for (var i = 0; i < elems.length; i++) {
            if (elems[i].className.indexOf(classname) != -1) {
                results[results.length] = elems[i];
            }
        }
        return results;
    }
}
