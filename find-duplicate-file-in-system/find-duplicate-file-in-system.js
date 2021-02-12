/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
    // create an object to hold arrays for each set of file contents
        // i.e. {abcd:[root/a/1.txt, root/c/3.txt], efgh: [root/a/2.txt, ...]}
    let fileContents = {}
    let result = []
    // loop over paths array and split(" ")
    for (let i = 0; i < paths.length; i++) {
        paths[i] = paths[i].split(" ")
    }
    
    // loop each inner path array, starting at j = 1
        // place each file path in the relative fileContents obj key, joined with it's directory path
    // console.log(paths)
    for (let i = 0; i < paths.length; i++) {
        for (let j = 1; j < paths[i].length; j++){
            
            let split = paths[i][j].split('(')
            let n = split[1].length
            let contents = split[1].substr(0, n-1)
            let name = split[0]
            if (!fileContents[contents]) {
                fileContents[contents] = [paths[i][0]+`/${name}`]
            } else {
                fileContents[contents].push(paths[i][0]+`/${name}`)
            }
        }
    }
    // loop through fileContents and push each array into the return array
    for (const filePath in fileContents) {
        if (fileContents[filePath].length > 1) {
            result.push(fileContents[filePath])
        }
        
    }
    
    return result
};