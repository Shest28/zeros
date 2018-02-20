module.exports = function getZerosCount(number) {
	let countZeros = 0;
	while(number > 0){
		number = Math.floor( number / 5 );
		countZeros += number;
	}
  return countZeros;
}
