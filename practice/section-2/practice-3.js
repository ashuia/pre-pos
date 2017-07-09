'use strict';

function countSameElements(collection) {
	var array=new Array();
	var count=1;
	var j=0;
	var same=0;
	for(var i=0;i<collection.length;i++){
		if(collection[i].length!=1){
			for(var k=0;k<array.length;k++){
				if(collection[i].charAt(0)==array[k].name){
					array[k].summary=array[k].summary+Number(collection[i].match(/\d+/g)[0]);
					same=1;
				}
			}
			if(same==0){
				array[j]=new Object();
	
				array[j].name=collection[i].charAt(0);
				array[j].summary=Number(collection[i].match(/\d+/g)[0]);
				j++;
			}
			same=0;
		}
		else{
			for(var k=0;k<array.length;k++)
				if(collection[i].charAt(0)==array[k].name){
					array[k].summary++;
					same=1;
				}
			if(same==0){
				if(collection[i]==collection[i+1]){
					count++;
				}
				else{
				array[j]=new Object();
				array[j].name=collection[i];
				array[j].summary=count;
				count=1;
				j++;
				}
			}
			same=0;
		}
	}
	return array;
}
