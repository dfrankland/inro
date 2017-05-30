const propTypeGenerator = (test, errRequired, errInvalid) => (
  isRequired => (
    (props, propName, componentName) => {
      const prop = props[propName];
      if (isRequired && !prop) return new Error(errRequired(propName, prop, componentName));
      if (!isRequired && !prop) return undefined;
      return test(prop) ? undefined : new Error(errInvalid(propName, prop, componentName));
    }
  )
);

const makeNewPropType = (test, errRequired, errInvalid) => {
  const generatedPropType = propTypeGenerator(test, errRequired, errInvalid);
  const newPropType = generatedPropType();
  newPropType.isRequired = generatedPropType(true);
  return newPropType;
};

const errRequired = (propName, prop, componentName) => (
  `"${propName}" supplied to "${componentName}" is required. Validation failed.`
);

const errInvalid = (propName, prop, componentName) => (
  `Invalid prop "${propName}" of value "${prop}" supplied to "${componentName}". Validation failed.`
);

export default {
  cssWidth: makeNewPropType(
    prop => (
      typeof prop === 'string' &&
      /^[+-]?[0-9]+.?([0-9]+)?(em|ex|cap|ch|ic|rem|lh|rlh|vh|vw|vi|vb|vmin|vmax|px|mm|q|cm|in|pt|pc|mozmm)$/.test(prop)
    ),
    errRequired,
    errInvalid,
  ),
  integer: makeNewPropType(
    prop => (
      typeof prop === 'number' &&
      prop === parseInt(prop, 10)
    ),
    errRequired,
    errInvalid,
  ),
  integerRange: (start, end) => makeNewPropType(
    prop => (
      typeof prop === 'number' &&
      prop === parseInt(prop, 10) &&
      prop >= start &&
      prop <= end
    ),
    errRequired,
    errInvalid,
  ),
};
