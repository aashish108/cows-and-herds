import generateAFarm from '../functions/generateAFarm';
import { useEffect, useState } from 'react';

const FarmLand = () => {
  const [cowsFound, setCowsFound] = useState<number>(0);
  const [herds, setHerds] = useState<number>(0);

  const newFarm = generateAFarm();
  const [farm, setFarm] = useState<number[][]>(
    JSON.parse(JSON.stringify(newFarm))
  );
  const [initialFarm] = useState<number[][]>(
    JSON.parse(JSON.stringify(newFarm))
  );

  const isPathTraversable = (array: number, column: number) => {
    if (
      array <= farm.length - 1 &&
      array >= 0 &&
      column <= farm[array].length &&
      column >= 0
    ) {
      return true;
    }
    return false;
  };

  const herdTraversal = (array: number, column: number) => {
    if (farm[array][column] === 1) {
      console.log(`Cow found at ${array} ${column}`);
      setCowsFound((cowsFound) => cowsFound + 1);
      let newFarm = farm;
      newFarm[array][column] = 0;
      setFarm(newFarm);
      // Left
      if (isPathTraversable(array, column - 1)) {
        herdTraversal(array, column - 1);
      }
      // Right
      if (isPathTraversable(array, column + 1)) {
        herdTraversal(array, column + 1);
      }
      // Up
      if (isPathTraversable(array - 1, column)) {
        herdTraversal(array - 1, column);
      }
      // Down
      if (isPathTraversable(array + 1, column)) {
        herdTraversal(array + 1, column);
      }
    }
  };

  const traverse = (array: number, column: number) => {
    for (let i = 0; i < farm.length; i++) {
      for (let j = 0; j < farm[array].length; j++) {
        if (farm[i][j] === 1) {
          herdTraversal(i, j);
          setHerds((herds) => herds + 1);
        }
      }
    }
  };

  useEffect(() => {
    traverse(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [farm]);

  return (
    <>
      {initialFarm.map((data: any, x: any) => (
        <div key={x}>{data}</div>
      ))}

      <div>Cows: {cowsFound}</div>
      <div>Herds: {herds}</div>
    </>
  );
};

export default FarmLand;
