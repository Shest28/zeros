module.exports = function getZerosCount(number) {

	let fact = factorial(number).split('');
	let countZeros = 0;
	while(fact.pop() == '0') {
		countZeros++;
	}
	return countZeros;

	function multiply(first, second) {
	  let firstArray = first.split("").reverse();
	  let secondArray = second.split("").reverse();
	  let result = [];

	  for (let i = 0; i < firstArray.length; i++) {
		  for (let j = 0; j <secondArray.length; j++) {
			  let index = i + j;
			  if (index >= result.length) result[index] = firstArray[i] * secondArray[j]
				else result[index] = firstArray[i] * secondArray[j] + result[index];
			  if (result[index] > 9) {
				if ((index + 1) >= result.length) result[index + 1] = Math.floor(result[index] / 10)
				  else result[index + 1] = Math.floor(result[index] / 10) + result[index + 1];
				result[index] -= Math.floor(result[index] / 10) * 10;
			  }
		  }
	  }
	  return result.reverse().join("");
	}

	function factorial(number) {
	  let result = '1';
		for(let i = 1; i <= +number; i++) {
		  result = multiply(result, i+'');
		}
	  return result;
	}
}
