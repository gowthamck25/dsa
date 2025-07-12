function kthSetBit(n, k) {
  return (n & (1 << k)) !== 0;
}

console.log(kthSetBit(5, 1));