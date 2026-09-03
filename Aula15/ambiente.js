var nums = [5,8,4]
nums[3] = 6 //incluindo num local especifico possível
nums.push(7) //incluindo no final do array
//nums.pop() //removendo o último elemento do array
console.log(`Tamanho da array ${nums.length}`) //mostrando o tamanho do array
nums.sort() //ordenando o array

for (let c = 0; c < nums.length; c++) {
    console.log(nums[c])
}
