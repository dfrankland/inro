import CustomPropTypes from '../CustomPropTypes';

const propName = 'test';
const componentName = 'CustomPropTypes test component name';
const testArgs = [propName, componentName];

const isRequiredError = `"${propName}" supplied to "${componentName}" is required. Validation failed.`;
const isInvalidError = value => (
  `Invalid prop "${propName}" of value "${value}" supplied to "${componentName}". Validation failed.`
);

describe('CustomPropTypes', () => {
  it('it can check for valid CSS widths', () => {
    expect(CustomPropTypes.cssWidth({ [propName]: '100px' }, ...testArgs)).toEqual(undefined);

    expect(
      CustomPropTypes.cssWidth({ [propName]: 'blah' }, ...testArgs).message,
    ).toEqual(
      isInvalidError('blah'),
    );

    expect(
      CustomPropTypes.cssWidth.isRequired({}, ...testArgs).message,
    ).toEqual(isRequiredError);
  });

  it('it can check for valid integers', () => {
    expect(CustomPropTypes.integer({ [propName]: 1 }, ...testArgs)).toEqual(undefined);

    expect(
      CustomPropTypes.integer({ [propName]: 0.25 }, ...testArgs).message,
    ).toEqual(
      isInvalidError(0.25),
    );

    expect(
      CustomPropTypes.integer.isRequired({}, ...testArgs).message,
    ).toEqual(isRequiredError);
  });

  it('it can check for valid integer ranges', () => {
    expect(CustomPropTypes.integerRange(0, 1)({ [propName]: 1 }, ...testArgs)).toEqual(undefined);

    expect(
      CustomPropTypes.integerRange(0, 1)({ [propName]: 2 }, ...testArgs).message,
    ).toEqual(
      isInvalidError(2),
    );

    expect(
      CustomPropTypes.integerRange(0, 1).isRequired({}, ...testArgs).message,
    ).toEqual(isRequiredError);
  });
});
