function getNeighbors(row, col, graph) {

  let ngbs = []

  let height = graph.length
  let width = graph[0].length

  // Check top
  if(row-1>=0 && graph[row-1][col] === 1) ngbs.push([row-1, col])

  // Check bottom
  if(row+1<height && graph[row+1][col] === 1) ngbs.push([row+1, col])

  // Check left
  if(col-1>=0 && graph[row][col-1] === 1) ngbs.push([row, col-1])

  // Check right
  if(col+1<width && graph[row][col+1] === 1) ngbs.push([row, col+1])

  // Return neighbors
  return ngbs

  // Your code here
}


function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes
  let visited = new Set()

  // Create a stack, put the starting node in the stack
  let stack = [[row, col]]

  // Put the stringified starting node in visited
  visited.add(`node-${row.toString()}-${col.toString()}`)

  // Initialize size to 0
  let size = 0

  // While the stack is not empty,
  while(stack.length > 0){

    // Pop the first node
    let curr = stack.pop()

    // DO THE THING (increment size by 1)
    size++

    let ngbs = getNeighbors(curr[0], curr[1], graph)

    ngbs.forEach((ngb)=>{
      let ngbStringfied = `node-${ngb[0]}-${ngb[1]}`
      if(!visited.has(ngbStringfied)){
        visited.add(ngbStringfied)
        stack.push(ngb)
      }
    })

    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!
  }
  // return size
  return size

  // Your code here
}

module.exports = [getNeighbors, islandSize];
