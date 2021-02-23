const simpleDFS = (array) => {

  if (!Array.isArray(array)) {
    throw new Error("");
  }

  if (array.length < 1) {
    return [];
  }

  const addElement = array[array.length-1]
  
  if (array.length === 1) {
    return [[addElement], [-addElement]]
  }

  const previousArray = simpleDFS(array.slice(0,-1));
  const result = [];

  for (let i = 0; i <= previousArray.length-1; i++) {
    const plusArray = [...previousArray[i], addElement];
    const minusArray = [...previousArray[i], -addElement];
    result.push(plusArray);
    result.push(minusArray);
  }

  return result;
}

const sample = [1,2,3,4,5];

console.log(simpleDFS(sample))