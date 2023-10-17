import { Tree } from 'antd';
import { DataNode } from 'antd/es/tree';
import { FC, memo, useMemo } from 'react';
import { useAppSelector } from 'shared/model/hooks';
import { getTreeData } from '../lib/getTreeData';
import styles from './Tree.module.scss';

const TreeComponent: FC = memo(() => {
	const { images } = useAppSelector(state => state.galleryReducer);
	const treeData: DataNode[] = useMemo(() => getTreeData(images), [images]);

	return (
		<div className={styles.wrapper}>
			<Tree
				className={styles.tree}
				showLine
				treeData={treeData}
				selectable={false}
				defaultExpandedKeys={['0']}
			/>
		</div>
	);
});

export default TreeComponent;
