// eslint-disable-next-line n/file-extension-in-import
import type {Node as YogaNode, Yoga as YogaType} from 'yoga-wasm-web/auto';
import UnsafeYoga from '@react-pdf/yoga';

const Yoga = UnsafeYoga as YogaType;

const getMaxWidth = (yogaNode: YogaNode) => {
	return (
		yogaNode.getComputedWidth() -
		yogaNode.getComputedPadding(Yoga.EDGE_LEFT) -
		yogaNode.getComputedPadding(Yoga.EDGE_RIGHT) -
		yogaNode.getComputedBorder(Yoga.EDGE_LEFT) -
		yogaNode.getComputedBorder(Yoga.EDGE_RIGHT)
	);
};

export default getMaxWidth;
