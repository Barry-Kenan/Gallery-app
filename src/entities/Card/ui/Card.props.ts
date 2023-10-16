import { IImage } from 'shared/interfaces';

export interface CardProps {
	card: IImage;
	handleClickCard: (card: IImage) => void;
	handleClose: (id: number) => void;
}
