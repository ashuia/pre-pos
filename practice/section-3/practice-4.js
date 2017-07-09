'use strict';

function createUpdatedCollection(collectionA, objectB) {
	var arrayC=countSameElements(collectionA);
	var arrayD=createUpdatedCollectionA(arrayC, objectB);
	return arrayD;
}
function countSameElements(collection) {
	var array=new Array();
	var count=1;
	var j=0;
	for(var i=0;i<collection.length;i++)
		if(collection[i].length!=1){
		array[j]=new Object();
		collection[i]=collection[i].split('');
		array[j].key=collection[i][0];
		array[j].count=Number(collection[i][2]);
		j++;}
		else{
		if(collection[i]==collection[i+1]) count++;
		else{
		array[j]=new Object();
		array[j].key=collection[i];
		array[j].count=count;
		count=1;
		j++;
		}}
	return array;
}
function createUpdatedCollectionA(collectionA, objectB) {
	for(var i=0;i<collectionA.length;i++){
		for(var j=0;j<objectB.value.length;j++){
			if(collectionA[i].key==objectB.value[j]){
				collectionA[i].count=collectionA[i].count-parseInt(collectionA[i].count/3);
			}
		}
	}
	return collectionA;
}
