import type { AlgorithmKey } from '@/types';


export const algorithms: Record<AlgorithmKey, {
name: string;
timeComplexity: string;
spaceComplexity: string;
description: string;
icon: string;
}> = {
bubbleSort: {
name: 'Bubble Sort',
timeComplexity: 'O(n²)',
spaceComplexity: 'O(1)',
description: 'Repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.',
icon: '🫧'
},
selectionSort: {
name: 'Selection Sort',
timeComplexity: 'O(n²)',
spaceComplexity: 'O(1)',
description: 'Finds the minimum element and places it at the beginning, then repeats for the remaining array.',
icon: '🎯'
},
insertionSort: {
name: 'Insertion Sort',
timeComplexity: 'O(n²)',
spaceComplexity: 'O(1)',
description: 'Builds the final sorted array one item at a time, inserting each element into its correct position.',
icon: '📝'
},
quickSort: {
name: 'Quick Sort',
timeComplexity: 'O(n log n)',
spaceComplexity: 'O(log n)',
description: 'Divides array into partitions around a pivot element, then sorts the partitions recursively.',
icon: '⚡'
},
mergeSort: {
name: 'Merge Sort',
timeComplexity: 'O(n log n)',
spaceComplexity: 'O(n)',
description: 'Divides the array into halves, sorts them separately, then merges the sorted halves.',
icon: '🔀'
},
heapSort: {
name: 'Heap Sort',
timeComplexity: 'O(n log n)',
spaceComplexity: 'O(1)',
description: 'Creates a heap from the array, then repeatedly extracts the maximum element.',
icon: '🏔️'
}
};