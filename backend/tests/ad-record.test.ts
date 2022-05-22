import {AdRecord} from "../records/ad.record";


const delaultObj = new AdRecord({
    name: 'Test Name',
    description: 'blah',
    url: 'https://megak.pl',
    price: 0,
    lat: 9,
    lon: 9,
});

test('Can build AdRecord', () => {
    const ad = new AdRecord(delaultObj);

    expect(ad.name).toBe('Test Name');
    expect(ad.description).toBe('blah');
});

test('Validates invalid price', () => {

    expect(() => new AdRecord({
        ...delaultObj,
        price: -3,
    })).toThrow('Cena nie moze byc mniejsza niz 0 lub większa niż 9 999 999')
});

// @TODO: CHeck all the validations