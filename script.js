function calculateMinCost() {
  //your code here
var inputarray=document.querySelector("#rope-lengths").value;
	var ansArray=inputarray.split(",");
	for (let index = 0; index < ansArray.length; index++) {
		 ansArray[index]=Number(ansArray[index]);
		}
	ansArray.sort(function (a,b) {return a-b;});
	var cost=0;
	while (ansArray.length>1) {
		var newrope=ansArray[0]+ansArray[1];
		cost+=newrope;
		
		ansArray.splice(0,2,newrope);
		ansArray.sort(function(a,b) {return a-b;});
	}

	document.querySelector("#result").textContent=cost;
  
}  
