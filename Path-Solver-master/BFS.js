var pred=[];
var Call=[];

function PRINT(){
	for(var z=0;z<Call.length;z++){
		Task(z);
	}
}
function PrintPath(){
	var i=9,j=9;
	while(!(i==-1 && j==-1)){
		var ID=id[0]+(id[1]-'0'+i)+(id[2]-'0'+j);
		var X=document.getElementById(ID);
		X.style.background="tomato"; 
		var t=i;
		i=pred[i][j][0];
		j=pred[t][j][1];
	}
}
function Task(i) { 
  	var cor=Call[i];
	var ID=id[0]+(id[1]-'0'+cor[0])+(id[2]-'0'+cor[1]);
	
	setTimeout(function() {
		var X=document.getElementById(ID);
		X.style.background="skyblue"; 
		if(ID=="_99"){
  			PrintPath(); 
  		}
  	}, 100*i);
} 

function bfs(){
	for(var i=0;i<10;i++){
		var t=[];
		for(var j=0;j<10;j++){
			if(i==0 && j==0){
				t.push([-1,-1]);
				continue;
			}
			t.push([0,0]);
		}
		pred.push(t);
	}
	var q = new Queue();
	q.enqueue([0,0]);
  	while(1){
	  	var Size=q.size();
	  	// console.log(Size);
	  	if(Size==0)
	  		return;
	  	// var temp=[];
	  	for(var j=0;j<Size;j++){ 
			var u=q.dequeue();
			var x=u[0], y=u[1];

			if(matrix[x][y]==1)
			continue;
			matrix[x][y]=1;
			Call.push(u);
			if(x==9 && y==9){
				PRINT();
				return;
			}
			for(var i=0;i<4;i++){ 
				if(x+dx[i]<0 || y+dy[i]<0 || x+dx[i]>9 || y+dy[i]>9 || matrix[x+dx[i]][y+dy[i]]==1)
					continue;
				pred[x+dx[i]][y+dy[i]]=u;
				console.log(x+dx[i]);
				console.log(y+dy[i]);
				q.enqueue([x+dx[i], y+dy[i]]);
			}
		}
	}
}