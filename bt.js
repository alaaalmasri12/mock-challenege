class Node {

    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}
class BinaryTree {
    constructor(value) {
        this.root = new Node(value);
        this.counter = 0;
    }
    insert(value) {

        this.counter++;
        let newNode = new Node(value);
        const _add = (node) => {
            if (value < node.data) {
                if (!node.left) {
                    node.left = newNode;
                }
                else {
                    _add(node.left);
                }
            }
            else if (value > node.data) {
                if (!node.right) {
                    node.right = newNode;
                }
                else {
                    _add(node.right);
                }
            }
        }
        _add(this.root);
    }
    contain(value) {
        let curent = this.root;
        while (curent) {
            if (curent.data === value) {
                return true;
            }
            else if (curent.data < value) {
                curent = curent.left;
            }
            else if (curent.data > value) {
                curent = curent.right;
            }
        }
        return false;
    }
    preoder() {
        let results = [];
        const _walk = (node) => {
            results.push(node.data);
            if (node.left) _walk(node.left);
            if (node.right) _walk(node.right);
        }
        _walk(this.root);
        console.log(results);
        return results;
    }
    inorder() {
        let results = [];
        const _walk = (node) => {
            if (node.left) _walk(node.left);
            results.push(node.data);
            if (node.right) _walk(node.right);
        }
        _walk(this.root);
        console.log(results);
        return results;
    }
    postorder() {
        let results = [];
        const _walk = (node) => {
            if (node.left) _walk(node.left);
            if (node.right) _walk(node.right);
            results.push(node.data);
        }
        _walk(this.root);
        console.log(results);
        return results;
    }
    findmaximumvalue() {
        let curent = this.root;
        while (curent.right) {
            curent = curent.right;
        }
        return curent.data;
    }
    bfs() {
        let queue = [];
        let results = [];
        queue.push(this.root);
        while (queue.length) {
            let curentnode = queue.shift();
            results.push(curentnode.data);
            if (curentnode.left) {
                queue.push(curentnode.left);
            }
            if (curentnode.right) {
                queue.push(curentnode.right);
            }
        }
        return results;
    }
    fizzbuzz(tree) {
        let results = []
        let curent = tree.root;
        let _walk = (curent) => {
            if (curent.data % 3 === 0 && curent.data % 5 === 0) {
                curent.data = 'FizzBuzz';
            }
            else if (curent.data % 3 === 0) {
                curent.data = 'fizz';
            }
            else if (curent.data % 5 === 0) {
                curent.data = 'buzz';
            }
            else if(curent.data % 3 !== 0 && curent.data % 5 !== 0)
            {
                curent.data=`${curent.data}`;
            }
            if (curent.left) {
                _walk(curent.left);
            }
            if (curent.right) {
                _walk(curent.right);
            }
        }
        _walk(tree.root);
        return curent;

    }
    sum(tree)
    {
        let curent = tree.root;
        let sum=0;
        let findsum=(curent)=>{
            if(curent.data %2!==0)
            {
sum+=curent.data;
            }
            if(curent.left)
            {
                findsum(curent.left);
            }
            if(curent.right)
            {
                findsum(curent.right);
            }
        }
        findsum(this.root);
        console.log(sum);
        return sum;
    }
}
let bts = new BinaryTree(15);
let newtree = new BinaryTree();
bts.insert(2);
bts.insert(5);
bts.insert(15);
bts.insert(25);
bts.insert(30);
bts.insert(6);
bts.sum(bts);
// console.log(bts.contain(8));
// bts.preoder();
// bts.postorder();

// console.log(newtree.fizzbuzz(bts));
// console.log(bts.findmaximumvalue());
// console.log(bts.bfs());
// console.log(bts);