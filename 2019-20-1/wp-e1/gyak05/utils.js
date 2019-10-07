export function delegate(parent, type, selector, fn) {

  function delegatedFunction(e) {
    const handlerElement = this;
    const sourceElement = e.target;

    const closestElement = sourceElement.closest(selector);
    if (handlerElement.contains(closestElement)) {
      const delegatedElement = closestElement;
      fn.call(delegatedElement, e)
    }
  }

  parent.addEventListener(type, delegatedFunction);
}