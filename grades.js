module.exports = {
	letterGrade: function(score){
		if (score > 89) {
			return "A"
		}
		if (score > 79 && score < 89) {
			return "B"
		}
		if (score > 69 && score < 79) {
			return "C"
		}
		if (score > 59 && score < 79) {
			return "D"
		}
		if (score < 69) {
			return "F"
		}

	},

	averageScore: function(scoreArr) {
		temp = 0
		for (x in scoreArr) {
			temp += scoreArr[x]
		}
		var result = (temp / scoreArr.length);
		return result;
	},

	medianScore: function(array) {
		//sort
			for(each in array) {
	//		console.log (each, "each")

				for(var i = 0; i < array.length; i++) {
	//				console.log (i, "i")
					if ((array[i] > array[i+1])) {
	//					console.log("YOYO")
						var temp = array[i];
						array[i] = array[i+1];
						array[i+1] = temp;
					}
				}
			}
// end sort

			//console.log (array)
			if (array.length % 2 !== 0) {// if is odd number of items
				//console.log(array.length, "arr.length")
				midpoint = array[(array.length -1) /2]  // finds mid point of odd array
				return midpoint
}
			if (array.length % 2 === 0) {
				var right = array.length / 2
				var left = Math.floor((array.length -1) / 2)
				var leftNum = array[left];
				var rightNum = array[right];
				var combined = (leftNum + rightNum) / 2
				return combined
	//			//console.log(combined);

			}

		},
		modeScore: function(array) {
					//sort
			for(each in array) {
	//		//console.log (each, "each")

				for(var i = 0; i < array.length; i++) {
	//				//console.log (i, "i")
					if ((array[i] > array[i+1])) {
	//					//console.log("YOYO")
						var temp = array[i];
						array[i] = array[i+1];
						array[i+1] = temp;
					}
				}
			}
// end sort
	//console.log(array)
	numCount = {}
	largest = 0
var	largestKey = "";
	for (key in array) {
//		//console.log(numCount[array[key]])
		if (numCount[array[key]] === undefined) {
			numCount[array[key]] = 1 
		} else {
			numCount[array[key]] += 1
		}
	// 	if (numCount[array[key]] > largest) {
	// 		largest = numCount[array[key]]
	// //		//console.log (num)	
	// 	}
		if (numCount[array[key]] > largest) {
			largest = numCount[array[key]]
			var keyStore = key
		}
	}
			largest = 0
			return (array[key])
// 	for (key in numCount) {
// 		if (numCount[key] > largest) {
// 			largest = numCount[key];
// //			//console.log(numCount[key], "numKey")
// //			//console.log (largest, "large")
// 		}

// 	}
//	return largestKey

	//console.log(numCount)
 
		}

	

	}
	//console.log(module.exports.modeScore([1,1,5,5,1,2,3,5,5,5,4,3,5]))
