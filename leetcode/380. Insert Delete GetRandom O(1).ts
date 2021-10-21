// problem link: https://leetcode.com/problems/insert-delete-getrandom-o1
class RandomizedSet {
  // index signature
  [key: string]: any;

  constructor() {
    
  }

  insert(val: number): boolean {
    if(this[`${val}`] != null || this[`${val}`] != undefined) return false;
    this[`${val}`] = val;
    return true;
  }
  
  remove(val: number): boolean {
    if(this[`${val}`] == null || this[`${val}`] == undefined) return false;
    delete this[`${val}`];
    return true;

  }

  getRandom(): number {
    let values = Object.values(this);
    return values[Math.floor(Math.random() * values.length)];
  }
}

/**
* Your RandomizedSet object will be instantiated and called as such:
* var obj = new RandomizedSet()
* var param_1 = obj.insert(val)
* var param_2 = obj.remove(val)
* var param_3 = obj.getRandom()
*/