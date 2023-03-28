class Graph {
  numberOfNodes: number;
  adjacentList: { [key: string]: any };
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }

  addVertex(node: string) {
    if (this.adjacentList.hasOwnProperty(node)) {
      console.log("Node already exists");
      return;
    }
    this.adjacentList[node] = new Array();
    this.numberOfNodes++;
    return true;
  }

  addEdge(node1: string, node2: string) {
    if (
      !this.adjacentList.hasOwnProperty(node1) ||
      !this.adjacentList.hasOwnProperty(node2)
    ) {
      console.log("Invalid node input");
      return false;
    }
    if (this.adjacentList[node1].indexOf(node2) !== -1) {
      if (this.adjacentList[node2].indexOf(node1) !== -1) {
        console.log("Edge already exists");
        return false;
      }
      this.adjacentList[node2].push(node1);
      return true;
    }
    if (this.adjacentList[node2].indexOf(node1) !== -1) {
      if (this.adjacentList[node1].indexOf(node2) !== -1) {
        console.log("Edge already exists");
        return false;
      }
      this.adjacentList[node1].push(node2);
      return true;
    }
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
    return true;
  }

  showConnections() {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = "";
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      }
      console.log(node + "-->" + connections);
    }
  }
}

/**
 * Using a linked list
 */

class GraphNode {
  value: number;
  next: GraphNode | null;
  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class Graph2 {
  nodes: GraphNode[];
  edges: Map<number, GraphNode>;
  constructor() {
    this.nodes = [];
    this.edges = new Map();
  }

  addNode(value: number) {
    const node = new GraphNode(value);
    this.nodes.push(node);
    this.edges.set(value, node);
  }

  addEdge(node1: number, node2: number) {
    const n1 = this.edges.get(node1);
    const n2 = this.edges.get(node2);

    if (n1 && n2) {
      let curr = n1;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = new GraphNode(node2);

      curr = n2;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = new GraphNode(node1);
    }
  }

  print() {
    for (let i = 0; i < this.nodes.length; i++) {
      let curr: GraphNode | null = this.nodes[i];
      let output = "";
      while (curr) {
        output += curr.value;
        if (curr.next) {
          output += "->";
        }
        curr = curr.next;
      }
      console.log(output);
    }
  }
}

const myGraph = new Graph();
myGraph.addVertex("0");
myGraph.addVertex("1");
myGraph.addVertex("2");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");
myGraph.addEdge("3", "1");
myGraph.addEdge("3", "4");
myGraph.addEdge("4", "2");
myGraph.addEdge("4", "5");
myGraph.addEdge("1", "2");
myGraph.addEdge("1", "0");
myGraph.addEdge("0", "2");
myGraph.addEdge("6", "5");

myGraph.showConnections();
