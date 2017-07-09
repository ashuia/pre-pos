'use strict';

function countSameElements(collection) {
	var array=new Array();
	var count=1;
	var j=0;
	for(var i=0;i<collection.length;i++){
		if(collection[i]==collection[i+1]) count++;
		else{
		array[j]=new Object();
		array[j].key=collection[i];
		array[j].count=count;
		count=1;
		j++;
		}
	}
	return array;
}
