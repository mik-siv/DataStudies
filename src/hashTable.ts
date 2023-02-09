class HashTable {
  #data;
  constructor(size: number) {
    this.#data = new Array(size);
  }

  _hash(key: string) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.#data.length;
    }
    return hash;
  }
  set(key: string, value: any) {
    const address = this._hash(key);
    if (!this.#data[address]) {
      this.#data[address] = [];
    }
    this.#data[address].push([key, value]);
    return this.#data;
  }

  get(key: string) {
    const address = this._hash(key);
    if (this.#data[address]) {
      return this.#data[address].find((element: any[]) => {
        return element[0] === key;
      });
    }
    return undefined;
  }
}

const myHashTable = new HashTable(50);
console.log(myHashTable.set("grapes", 10000));
console.log(myHashTable.get("grapes"));
// myHashTable.set("apples", 9);
// myHashTable.get("apples");
