import documentElements from './elements.js'

const el = (type,attributes, children) => {
  const errorMessage = "incorrect type of argument";
  
  if ((typeof type !== "string" || !type)
     || (!attributes || typeof attributes !== "object")
     || ((children !== null && !Array.isArray(children) && typeof children !== "string" && typeof children !== "object")
     || (children && typeof children === "object" && !Array.isArray(children) && !children.domElementKind))) {
      return errorMessage;
  }   

  // if children is array of el functions which are ready to execute
  // than we call them to get DomElement in every index of array
  if (Array.isArray(children)) {
        children.forEach(e => e);
    }

    // finding TagDomElement class from object by type which is tag name
    // but there can be infinite list of tags so we should staticaly add 
    // classes for each tag which exist
    const documentElement =  new documentElements[type](type,attributes,children);
    return documentElement;

    // second variant to create TagDomElement classes
    // is to create them dinamically on every el function call
    // bellow is code
    // const currentDomElement = new class extends DomElement {
    //   constructor(type, attributes, children) {
    //       super(type, attributes, children);
    //   }
    // }(type, attributes, children); 
    // return currentDomElement;
}

const tree =
  el("form", {action: '/some_action'}, [
    el("label", {for: 'name'}, el("span",{as:"as"},el("div",{},[el("li",{},null),el("li",{},"tyu")]))),
    el("br", {}, null),
    el("input", {type: 'text', id: 'name', name: 'name', value: "My name"}, null),
    el("br", {}, null),
    el("label", {for: 'last_name'}, "Last name:"),
    el("br", {}, null),
    el("input", {type: 'text', id: 'last_name', name: 'last_name', value: "My second name"}, null),
    el("br", {}, null),
    el("input", {type: 'submit', value: "Submit"}, null),
  ]);
document.getElementById("root").appendChild(tree.draw());



