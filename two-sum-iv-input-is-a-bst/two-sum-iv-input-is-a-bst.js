        visited.push(node.val)
        
        if (node.left) {
            queue.push(node.left)
        }
        
        if (node.right) {
            queue.push(node.right)
        }
    }
​
    let numHash = {}
    console.log(visited)
    for (let i = 0; i < visited.length; i++) {
        let diff = k - visited[i]
        if (diff in numHash) {
            return true
        } else {
            numHash[visited[i]] = i
        }
    }
    console.log(numHash)
    return false
};
