function memoizedAdd80() {
  let cache: { [key: number]: number } = {};
  return function (n: number) {
    if (n in cache) {
      return cache[n];
    } else {
      cache[n] = n + 80;
      return cache[n];
    }
  };
}

let memoized: (n: number) => number = memoizedAdd80();
memoized(1);
