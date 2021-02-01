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
    
    employees.forEach(employee => {obj[employee['id']] = {importance: employee['importance'], subordinates: employee['subordinates']}})
    
    if (obj[id]['subordinates'].length === 0) return obj[id]['importance']
  
    let sum = obj[id]['importance']
    
    for (let i = 0; i < obj[id]['subordinates'].length; i++) {
        sum += GetImportance(employees, obj[id]['subordinates'][i])
    }
    
    return sum
};
