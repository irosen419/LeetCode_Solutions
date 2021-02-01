/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {

    let obj = {}
    let sum = 0
    
    employees.forEach(employee => obj[employee['id']] = {importance: employee['importance'], subordinates: employee['subordinates']})
    
    let helper = (employeeId) => {
        if (!employeeId) return
        console.log(employeeId)
        sum += obj[employeeId]['importance']
        obj[employeeId]['subordinates'].forEach(sub => helper(sub))
    }
    
    helper(id)
    return sum
};
