import { DomElement } from "./DomElement.js";
 
// saving classes in array to call them by key  whitch is a tag name
 const documentElements = {
    "span" : class SpanElement extends DomElement {
        constructor(tagName,attributes,children) {
            super(tagName, attributes,children);
        }
    },

    "div" : class DivElement extends DomElement {
        constructor(tagName,attributes, children) {
            super(tagName,attributes, children);
        }
    },

    "input": class InputElement extends DomElement {
        constructor(tagName,attributes, children) {
            super(tagName, attributes, children);
        }
    },

    "ul" : class UlElement extends DomElement {
        constructor(tagName,attributes,children) {
            super(tagName, attributes,children);
        }
    },

    "li" : class LiElement extends DomElement {
        constructor(tagName,attributes,children) {
            super(tagName, attributes,children);
        }
    },

    "form" : class FormElement extends DomElement {
        constructor(tagName,attributes,children) {
            super(tagName, attributes,children);
        }
    },

    "label" : class LabelElement extends DomElement {
        constructor(tagName,attributes,children) {
            super(tagName, attributes,children);
        }
    },

    "br" : class BrElement extends DomElement {
        constructor(tagName,attributes,children) {
            super(tagName, attributes,children);
        }
    }
    
    // and so on for every tag which is available nowdays
    // but actually i dont like this approach because there could be infinite tags
}



export default documentElements;

