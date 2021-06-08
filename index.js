class Node {
	constructor(val){
		this.value = val;
	}
}

class GenericTree {
	constructor(val) {
		this.value = val;
		this.children = [];
	}

	addChild(...val) {
		val.forEach(v => this.children.push(new GenericTree(v)))
	}

	search(val) {
		return this.children.find(v => v.value === val);
	}

	addChildTo(val, target) {
		if (this.value === target) {
			this.addChild(val);
		} else {
			this.children.find(v => v.value === target).addChild(...val);
		}
	}
}

let GT = new GenericTree(4);

GT.addChild(92, 42, 5, 23, 12, 98, 2);


GT.addChild(26);
GT.addChild(22);
GT.addChild(42);

console.log(GT);

GT.addChildTo([212,324, 'Fernando', 566, 232], 92);

GT.addChildTo([122,187, 175, 199, 123], 22);

console.log(GT.search(92));

console.log(GT.search(22));

console.log(GT);