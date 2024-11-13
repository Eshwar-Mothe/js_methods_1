//10% increment of the salaries
arr = [30000,40000,50000,35000]
const employeeSalry = arr.map((value) => value + (value * 10/100))  
console.log(employeeSalry)

//Odd Sales Numbers
num = [23,45,60,70,33]
const oddNumbers = num.filter((value) => value % 2 !== 0)
console.log("the odd sales numbers are: ",oddNumbers) //returns in array
console.log(`the odd sales numbers are: ${oddNumbers}`) //returns with comma separated

//Brand names to print on Tags 
products = ['soap', 'shampoo', 'toothpaste']
const tagNames = products.map((product) => product[0].toUpperCase + product.slice(1))
console.log(tagNames)

//Student passed Scores
scores = [55,70,82,47]
passedScores = scores.filter((score) => score > 50)
console.log(passedScores)


//Fetching names for email writing
customers = [{'name':'Alice'},{'name':'Bob'},{'name':'Charlie'}]
emailNames = customers.map((email) => email.name)
console.log(emailNames)