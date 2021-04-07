/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
            if (rooms.length < 2) return true
        if (!rooms[0].length) return false

        let queue = rooms[0]
        let visited = new Set()
        visited.add(0)


        while (queue.length) {
            let room = queue.shift()

            if (visited.has(room)) continue
            visited.add(room)
            let i = 0
            while (i < rooms[room].length) {
                queue.push(rooms[room][i])
                i++
            }
        }

        return visited.size === rooms.length
};