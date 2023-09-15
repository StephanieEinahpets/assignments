let employees = []
function Employee (name, title, salary, status){
    this.name = name
    this.title = title
    this.salary = salary
    this.status = "full time"
    this.printEmployeeForm = function (){
        console.log("Name: " + this.name + ", Job Title: " + this.title + ", Salary: " + this.salary + ", Status: " + this.status)       
    }
    employees.push(this)
}

const Adam = new Employee("Adam", "CEO", "$500,000")
Adam.status = "part time"
const Kyle = new Employee("Kyle", "IT", "$75,000")
const Allison = new Employee("Allison", "HR", "$75,000")


Adam.printEmployeeForm()
Kyle.printEmployeeForm()
Allison.printEmployeeForm()

console.log(employees)