'use strict';

function collectSameElements(collectionA, objectB) {
	var array=new Array();
	var k=0;
	for(var i in collectionA){
		for(var j=0;j<objectB.value.length;j++){
			if(collectionA[i]==objectB.value[j]){
				array[k]=collectionA[i];
				k++;
			}
		}
	}
	return array; 
}
