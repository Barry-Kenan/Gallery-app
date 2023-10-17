import { IImage } from 'shared/interfaces';
import { getImageDate, getImageName, getImageSize } from './formatImageData';

const images: IImage[] = [
	{
		id: 263,
		image: 'health/accident-5924724__480.jpg',
		filesize: 34181,
		timestamp: 1485057521881,
		category: 'health'
	},
	{
		id: 100,
		image: 'business/aircraft-5611528__340.jpg',
		filesize: 28160,
		timestamp: 1509818967410,
		category: 'business'
	},
	{
		id: 482,
		image: 'vehicle/alley-5921985__340.jpg',
		filesize: 18330,
		timestamp: 1463735429755,
		category: 'vehicle'
	}
];

describe('image name', () => {
	test('correct image name', () => {
		expect(getImageName(images[0])).toBe('accident-5924724__480.jpg');
		expect(getImageName(images[1])).toBe('aircraft-5611528__340.jpg');
		expect(getImageName(images[2])).toBe('alley-5921985__340.jpg');
	});
});

describe('image size', () => {
	test('image size in KB', () => {
		expect(getImageSize(images[0])).toBe('33.4 KB');
		expect(getImageSize(images[1])).toBe('27.5 KB');
		expect(getImageSize(images[2])).toBe('17.9 KB');
	});
});

describe('image date', () => {
	test('image date format', () => {
		expect(getImageDate(images[0])).toBe('22.01.2017');
		expect(getImageDate(images[1])).toBe('05.11.2017');
		expect(getImageDate(images[2])).toBe('20.05.2016');
	});
});
