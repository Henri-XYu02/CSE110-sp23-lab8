// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');
console.log(functions);

// TODO - Part 2
test('TruePhoneNumber1', () => {
    expect(functions.isPhoneNumber('114-514-1919')).toBe(true);
});

test('TruePhoneNumber2', () => {
    expect(functions.isPhoneNumber('888-999-5151')).toBe(true);
});

test('FalsePhoneNumber1', () => {
    expect(functions.isPhoneNumber('1234-567-890')).toBe(false);
});

test('TruePhoneNumber2', () => {
    expect(functions.isPhoneNumber('br')).toBe(false);
});

test('TrueEmail1', () => {
    expect(functions.isEmail('gradescope@gmail.com')).toBe(true);
});

test('TrueEmail2', () => {
    expect(functions.isEmail('canvas@ucsd.edu')).toBe(true);
});

test('FalseEmail1', () => {
    expect(functions.isEmail('12234@.com')).toBe(false);
});

test('FalseEmail2', () => {
    expect(functions.isEmail('1234@ucsd')).toBe(false);
});

test('TrueStrongPassword1', () => {
    expect(functions.isStrongPassword('ah24sb237_')).toBe(true);
});

test('TrueStrongPassword2', () => {
    expect(functions.isStrongPassword('AAAA')).toBe(true);
});

test('FalseStrongPassword1', () => {
    expect(functions.isStrongPassword('1234bbbb')).toBe(false);
});

test('FalseStrongPassword2', () => {
    expect(functions.isStrongPassword('________________')).toBe(false);
});

test('TrueDate1', () => {
    expect(functions.isDate('23/45/5678')).toBe(true);
});

test('TrueDate2', () => {
    expect(functions.isDate('10/01/1987')).toBe(true);
});

test('FalseDate1', () => {
    expect(functions.isDate('233/5/568')).toBe(false);
});

test('FalseDate2', () => {
    expect(functions.isDate('ab/cd/efgh')).toBe(false);
});

test('TrueHexColor1', () => {
    expect(functions.isHexColor('FF08fF')).toBe(true);
});

test('TrueHexColor2', () => {
    expect(functions.isHexColor('7b4039')).toBe(true);
});

test('FalseHexColor1', () => {
    expect(functions.isHexColor('gf3089')).toBe(false);
});

test('FalseHexColor2', () => {
    expect(functions.isHexColor('hhh')).toBe(false);
});