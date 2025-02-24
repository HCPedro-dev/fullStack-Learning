const [a] = [10]
console.log(a) // 10

const [n1, , n3, , n5, n6 = 0] = [10, 20, 30, 40]
console.log(n1, n3, n5, n6) // 10, 30, 0, 40