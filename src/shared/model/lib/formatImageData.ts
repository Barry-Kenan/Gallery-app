import { format } from 'date-fns';
import { IImage } from 'shared/interfaces';

export const getImageName = (data: IImage) =>
	data.image.replace(`${data.category}/`, '');

export const getImageSize = (data: IImage) =>
	`${(data.filesize / 1024).toFixed(1)} KB`;

export const getImageDate = (data: IImage) =>
	format(data.timestamp, 'dd.MM.yyyy');
