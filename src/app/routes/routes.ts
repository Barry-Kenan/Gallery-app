import { ImagePage, MainPage, NotFoundPage } from 'pages';
import { ComponentType } from 'react';

export interface IRoute {
	path: string;
	element: ComponentType;
}

export enum RoutesNames {
	HOME = '/',
	Image = '/:id',
	NOTFOUND = '*'
}

export const publicRoutes: IRoute[] = [
	{ path: RoutesNames.HOME, element: MainPage },
	{ path: RoutesNames.Image, element: ImagePage },
	{ path: RoutesNames.NOTFOUND, element: NotFoundPage }
];
