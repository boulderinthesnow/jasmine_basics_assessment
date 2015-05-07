var grades = require("../grades.js") 

describe("grade Check", function(){
	it("95 should be an A",function(){
		expect(grades.letterGrade(95)).toEqual("A")
	});
	it("80 should be an B",function(){
		expect(grades.letterGrade(80)).toEqual("B")
	});	
	it("25 should be an F",function(){
		expect(grades.letterGrade(25)).toEqual("F")
	});
	// ***
	//avg
	it("avg of 0 and 100 should be 50",function(){
		expect(grades.averageScore([0,100])).toEqual(50)
	});
	it("avg of 90 and 100 should be 95",function(){
		expect(grades.averageScore([90,100])).toEqual(95)
	});
	it("avg of 0 and 0 should be 0",function(){
		expect(grades.averageScore([0,0])).toEqual(0)
	});		
//***
//median
	it("if array is [1,2,3,4,5] should return 3", function(){
		expect(grades.medianScore([4,5,7,3,9,1,3])).toEqual(4)
	})
	it("if array is [1,2,3,4,5,6,7,8,9,10] should return 5.5", function(){
		expect(grades.medianScore([1,2,3,4,5,6,7,8,9,10])).toEqual(5.5)
	})

//mode
	it("if array is [1,1,1,1,2,2,2,4,5,6,7] should return 3", function(){
		expect(grades.medianScore([1,1,1,1,2,2,2,4,5,6,7])).toEqual(1)
	})

});



// 	it("it maps stuff to a new array", function(){
// 		expect(app.map([1,2,3], function(x){
// 			return x * 2;
// 		})).toEqual(2,4,6);
// 	});
// });