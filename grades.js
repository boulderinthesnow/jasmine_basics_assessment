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

			for(each in array) {
				console.log (each, "each")

				for(var i = 0; i < array.length; i++) {
					console.log (i, "i")
					if ((array[i] > array[i+1])) {
						console.log("YOYO")
						var temp = array[i];
						array[i] = array[i+1];
						array[i+1] = temp;
					}
				}
			}
			return array;
		}






	}
	console.log(module.exports.medianScore([4,5,7,3,9,1,3]))
