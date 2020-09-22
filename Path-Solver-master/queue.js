class Queue {
  constructor(){
		this.items = [];
		this.length = this.items.length;
  }

  enqueue(ele){
    this.length += 1;
		return this.items.push(ele);
  }

  dequeue(){
    if (this.length > 0) {
			this.length -= 1;
		}
		return this.items.shift();
  }
  size(){
  	return this.length;
  }
}
