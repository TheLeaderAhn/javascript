const stats = (function () {
  const sum = (x, y) => x + y;
  const square = (x) => x * x;

  function mean(data) {
    return data.reduce(sum) / data.length;
  }

  function stddev(data) {
    let m = mean(data);
    return Math.sqrt(
      data
        .map((x) => x - m)
        .map(square)
        .reduce(sum) /
        (data.length - 1)
    );
  }

  return { mean, stddev };
})();

stats.mean([1, 3, 5, 7, 9]); // => 5
stats.stddev([1, 3, 5, 7, 9]); // => Math.sqrt(10)
