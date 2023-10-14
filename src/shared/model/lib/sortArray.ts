import { IImage, SortEnum } from 'shared/interfaces';

export const sortArray = (arr: IImage[], sort: SortEnum) => {
	switch (sort) {
		case SortEnum.CATEGORY:
			return arr.sort((a, b) => (a.image > b.image ? 1 : -1));
		case SortEnum.DATE:
			return arr.sort((a, b) => (a.timestamp > b.timestamp ? 1 : -1));
		case SortEnum.SIZE:
			return arr.sort((a, b) => (a.filesize > b.filesize ? 1 : -1));
		case SortEnum.NAME:
			return arr.sort((a, b) =>
				a.image.replace(`${a.category}/`, '') >
				b.image.replace(`${b.category}/`, '')
					? 1
					: -1
			);
		default:
			const _never: never = sort;
	}
};
