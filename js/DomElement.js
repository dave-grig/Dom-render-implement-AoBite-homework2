export class DomElement {
    constructor(tagName, attributes, children) {
        this.tagName = tagName;
        this.attributes = attributes;
        this.children = children;
        // this property is for checking in el function 
        // whether children argument DomElement or not
        this.domElementKind = true;
    }

    // logic of draw function is so when we create instance of
    // TagDomElement we pass type argument aka span or div
    // to constructor
    // and we pass reference on children which is TagDomElement
    // so when tree is made the return value is upper TagDomElement which is the parent of all
    // child elements
    // than we call draw on that Element  and it recursively 
    // iterate on his children then children iterate on there children and so on 
    // until children will be text node or null (no closing tag)
    draw() {
        const element = document.createElement(this.tagName);
        
        // setting attributes
        for (let attribute in this.attributes) {
            element.setAttribute(attribute, this.attributes[attribute]);
        }

        // checking if child is textNode than add text and stop
        // or element hasnt closing tag than stop there
        if (typeof this.children === "string") {
            element.innerHTML = this.children;
            return element;
        } else if (!this.children) {
            return element;
        }

        // if children is single element than call draw recursively
         if(!Array.isArray(this.children) ) {
            element.appendChild(this.children.draw());

        // if there are more than one element
        // call every element recursively    
         } else {
             for (let k of this.children) {
                element.appendChild(k.draw());
             }
         }

        return element;
    }
}