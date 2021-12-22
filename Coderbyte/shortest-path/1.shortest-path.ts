function GraphChallenge(strArr: string[]): string|number {

  // code goes here
  // return -1 if there isn't any connections
  if(!strArr[parseInt(strArr[0]) + 1])
    return -1;

  let startPoint = strArr[1];
  let endPoint = strArr[parseInt(strArr[0])];
  let connectionsArr = extractConnections(strArr);

  // find all paths
  let paths = findAllPaths(startPoint, endPoint, connectionsArr);

  // return -1 if there isn't any path
  if(paths.length === 0) return -1;

  // choose the shortest one
  let shortestPath = paths[0];

  for(let i = 1; i < paths.length; i++) {
    if(paths[i].length < shortestPath.length)
      shortestPath = paths[i];
  }

  return shortestPath;
}

function extractConnections(strArr: string[]): string[] {
  let connectionsArr: string[] = [];
  for(let i = parseInt(strArr[0]) + 1; i < strArr.length; i++) {
    connectionsArr.push(strArr[i]);
  }
  return connectionsArr;
}

function findAllPaths(
  startPoint: string,
  endPoint: string,
  connectionsArr: string[]
): string[] {
  // Bridth First Traversal

  let queue = findWithStartDigit(connectionsArr, startPoint);
  let paths: string[] = [];

  if(queue.length === 0) return [];
  
  // iterative
  while (queue.length) {
    // dequeue connection
    let temp = queue.shift()!;

    if(temp.startsWith(startPoint)) paths.push(temp);
    else {
      let pathIndex = paths.findIndex((el) => el[el.length-1] === temp[0]);
      paths[pathIndex] += `-${temp[2]}`;
    }

    // inqueue connection's children
    let inqueuedConnections = findWithStartDigit(connectionsArr, temp[2]);
    queue = queue.concat(inqueuedConnections);
  }

  // check paths then return the paths those completed
  let finalArray: string[] = [];
  paths.forEach((el) => {
    if(el.startsWith(startPoint) && el[el.length-1] === endPoint)
      finalArray.push(el);
  });

  return finalArray;
}

function findWithStartDigit(strArr: string[], startDigit: string): string[] {

  let finalArray: string[] = [];

  strArr.forEach((el) => {
    if(el.startsWith(startDigit))
      finalArray.push(el);
  });

  return finalArray;
}

console.log(GraphChallenge(["5","A","B","C","D","F","A-B","A-C","B-C","C-D","D-F"]));