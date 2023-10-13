import { MainPage, NotFoundPage } from 'pages';
import { ComponentType } from 'react';

export interface IRoute {
	path: string;
	element: ComponentType;
}

export enum RoutesNames {
	HOME = '/',
	NOTFOUND = '*'
}

export const publicRoutes: IRoute[] = [
	{ path: RoutesNames.HOME, element: MainPage },
	{ path: RoutesNames.NOTFOUND, element: NotFoundPage }
];
