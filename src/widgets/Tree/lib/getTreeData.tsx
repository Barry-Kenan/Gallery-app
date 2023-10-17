import { TreeDataNode } from 'antd';
import { TreeChildImage } from 'features';
import { IImage } from 'shared/interfaces';

export const getTreeData = (images: IImage[]) => {
	const secondChild: TreeDataNode[] = [];
	images.forEach(image => {
		if (!secondChild.some(e => e.title === image.category)) {
			secondChild.push({
				title: image.category,
				key: `0-${secondChild.length}`,
				children: [
					{
						title: <TreeChildImage data={image} />,
						key: `0-${secondChild.length}-0`,
						...image
					}
				]
			});
		} else {
			const index = secondChild.findIndex(e => e.title === image.category);
			const obj = secondChild[index];
			obj.children.push({
				title: <TreeChildImage data={image} />,
				key: `${obj.key}-${obj.children.length}`,
				...image
			});
		}
	});

	const treeData = [{ title: 'images', key: '0', children: secondChild }];
	return treeData;
};
