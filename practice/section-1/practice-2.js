'use strict';

function collectSameElements(collectionA, collectionB) {
	var array=new Array();
	var k=0;
	for(var i in collectionA){
		for(var j=0;j<collectionB.length;j++){
			for(var v=0;v<collectionB[j].length;v++){
				if(collectionA[i]==collectionB[j][v]){
					array[k]=collectionA[i];k++;
				}
			}
		}
	}	
	return array;
}
