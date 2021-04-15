/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity
    this.keys = []
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let newArray = [...this.keys]

    let found = this.keys.find(pair => pair[0] === key)

    if (found) {
        newArray = newArray.filter(pair => pair[0] !== found[0])
        newArray.push(found)
        this.keys = [...newArray]
    }
    
    return found?.[1] !== undefined ? found[1] : -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {

    if (this.get(key) !== -1) {
        this.keys.pop()
        this.keys.push([key, value])
    } else {
        this.keys.push([key, value])
    }

    if (this.keys.length > this.capacity) {
        this.keys.shift()
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */