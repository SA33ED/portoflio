if (process.stdin && typeof process.stdin.off !== "function") {
  process.stdin.off = process.stdin.removeListener.bind(process.stdin);
}