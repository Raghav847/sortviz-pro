export type SortFn = (
  arr: number[],
  updateVisualization: (arr: number[], comparing?: number[], swapping?: number[], sorted?: number[]) => Promise<void>,
  setComparisons: (count: number) => void,
  setSwaps: (count: number) => void
) => Promise<void>;

export type AlgorithmKey = 'bubbleSort' | 'selectionSort' | 'insertionSort' | 'quickSort' | 'mergeSort' | 'heapSort';

const bubbleSort: SortFn = async (arr, updateVisualization, setComparisons, setSwaps) => {
  const n = arr.length;
  let compCount = 0, swapCount = 0;
  
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      compCount++; setComparisons(compCount);
      await updateVisualization(arr, [j, j + 1]);
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapCount++; setSwaps(swapCount);
        await updateVisualization(arr, [], [j, j + 1]);
      }
    }
    await updateVisualization(arr, [], [], [n - i - 1]);
  }
  await updateVisualization(arr, [], [], Array.from({ length: n }, (_, i) => i));
};

const selectionSort: SortFn = async (arr, updateVisualization, setComparisons, setSwaps) => {
  const n = arr.length;
  let compCount = 0, swapCount = 0;
  
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    await updateVisualization(arr, [i]);
    
    for (let j = i + 1; j < n; j++) {
      compCount++; setComparisons(compCount);
      await updateVisualization(arr, [j, minIdx]);
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    
    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
      swapCount++; setSwaps(swapCount);
      await updateVisualization(arr, [], [i, minIdx]);
    }
    await updateVisualization(arr, [], [], [i]);
  }
  await updateVisualization(arr, [], [], Array.from({ length: n }, (_, i) => i));
};

const insertionSort: SortFn = async (arr, updateVisualization, setComparisons, setSwaps) => {
  const n = arr.length;
  let compCount = 0, swapCount = 0;
  
  for (let i = 1; i < n; i++) {
    const key = arr[i];
    let j = i - 1;
    
    while (j >= 0) {
      compCount++; setComparisons(compCount);
      await updateVisualization(arr, [j, j + 1]);
      
      if (arr[j] <= key) break;
      
      arr[j + 1] = arr[j]; 
      swapCount++; setSwaps(swapCount);
      await updateVisualization(arr, [], [j, j + 1]);
      j--;
    }
    arr[j + 1] = key;
    await updateVisualization(arr, [], [], [i]);
  }
  await updateVisualization(arr, [], [], Array.from({ length: n }, (_, i) => i));
};

const quickSort: SortFn = async (arr, updateVisualization, setComparisons, setSwaps) => {
  const compCount = { count: 0 }; 
  const swapCount = { count: 0 };
  
  const partition = async (a: number[], low: number, high: number) => {
    const pivot = a[high]; 
    let i = low - 1;
    await updateVisualization(a, [high]);
    
    for (let j = low; j < high; j++) {
      compCount.count++; setComparisons(compCount.count);
      await updateVisualization(a, [j, high]);
      if (a[j] < pivot) {
        i++; 
        [a[i], a[j]] = [a[j], a[i]]; 
        swapCount.count++; setSwaps(swapCount.count);
        await updateVisualization(a, [], [i, j]);
      }
    }
    [a[i + 1], a[high]] = [a[high], a[i + 1]]; 
    swapCount.count++; setSwaps(swapCount.count);
    await updateVisualization(a, [], [i + 1, high]);
    return i + 1;
  };
  
  const helper = async (a: number[], l: number, r: number) => {
    if (l < r) { 
      const pi = await partition(a, l, r); 
      await helper(a, l, pi - 1); 
      await helper(a, pi + 1, r); 
    }
  };
  
  await helper(arr, 0, arr.length - 1);
  await updateVisualization(arr, [], [], Array.from({ length: arr.length }, (_, i) => i));
};

const mergeSort: SortFn = async (arr, updateVisualization, setComparisons, setSwaps) => {
  const compCount = { count: 0 }; 
  const swapCount = { count: 0 };
  
  const merge = async (a: number[], left: number, mid: number, right: number) => {
    const L = a.slice(left, mid + 1); 
    const R = a.slice(mid + 1, right + 1);
    let i = 0, j = 0, k = left;
    
    while (i < L.length && j < R.length) {
      compCount.count++; setComparisons(compCount.count);
      await updateVisualization(a, [left + i, mid + 1 + j]);
      if (L[i] <= R[j]) { 
        a[k] = L[i]; 
        i++; 
      } else { 
        a[k] = R[j]; 
        j++; 
      }
      swapCount.count++; setSwaps(swapCount.count); 
      k++;
      await updateVisualization(a, [], [k - 1]);
    }
    
    while (i < L.length) { 
      a[k] = L[i]; 
      i++; 
      k++; 
      await updateVisualization(a, [], [k - 1]); 
    }
    
    while (j < R.length) { 
      a[k] = R[j]; 
      j++; 
      k++; 
      await updateVisualization(a, [], [k - 1]); 
    }
  };
  
  const helper = async (a: number[], l: number, r: number) => {
    if (l < r) { 
      const m = Math.floor((l + r) / 2); 
      await helper(a, l, m); 
      await helper(a, m + 1, r); 
      await merge(a, l, m, r); 
    }
  };
  
  await helper(arr, 0, arr.length - 1);
  await updateVisualization(arr, [], [], Array.from({ length: arr.length }, (_, i) => i));
};

const heapSort: SortFn = async (arr, updateVisualization, setComparisons, setSwaps) => {
  const n = arr.length; 
  let compCount = 0, swapCount = 0;
  
  const heapify = async (a: number[], len: number, i: number) => {
    let largest = i; 
    const l = 2 * i + 1; 
    const r = 2 * i + 2;
    
    if (l < len) { 
      compCount++; setComparisons(compCount); 
      await updateVisualization(a, [l, largest]); 
      if (a[l] > a[largest]) largest = l; 
    }
    
    if (r < len) { 
      compCount++; setComparisons(compCount); 
      await updateVisualization(a, [r, largest]); 
      if (a[r] > a[largest]) largest = r; 
    }
    
    if (largest !== i) { 
      [a[i], a[largest]] = [a[largest], a[i]]; 
      swapCount++; setSwaps(swapCount); 
      await updateVisualization(a, [], [i, largest]); 
      await heapify(a, len, largest); 
    }
  };
  
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) 
    await heapify(arr, n, i);
    
  for (let i = n - 1; i > 0; i--) { 
    [arr[0], arr[i]] = [arr[i], arr[0]]; 
    swapCount++; setSwaps(swapCount); 
    await updateVisualization(arr, [], [0, i], [i]); 
    await heapify(arr, i, 0); 
  }
  
  await updateVisualization(arr, [], [], Array.from({ length: n }, (_, i) => i));
};

export const sortingAlgorithms: Record<AlgorithmKey, SortFn> = {
  bubbleSort,
  selectionSort,
  insertionSort,
  quickSort,
  mergeSort,
  heapSort
};