var call=[];
var printed=0;

function print(){
	printed++;
	for(var z=0;z<call.length;z+=2){
		task(z);
	}
}
function task(i) { 
	var x=call[i];
	var ID=call[i+1];
  setTimeout(function() {
		var X=document.getElementById(ID);
		if(x=="push"){
			X.style.background="tomato"; 
		}else{
			X.style.background="skyblue"; 
		}
  }, 100*i); 
} 

function dfs(i,j){
	if(i<0 || j<0 || i>9 || j>9 || matrix[i][j]==1)
		return;

	matrix[i][j]=1;
	var x=document.getElementById(id[0]+(id[1]-'0'+i)+(id[2]-'0'+j));
	call.push("push");
	call.push(id[0]+(id[1]-'0'+i)+(id[2]-'0'+j));
	if((i==9 && j==9)){
		if(printed==0){
			print();
		}
		return;
	}

	for(var p=0;p<4;p++){
		dfs(i+dx[p], j+dy[p]);
	}
	call.push("pop");
	call.push(id[0]+(id[1]-'0'+i)+(id[2]-'0'+j));
}