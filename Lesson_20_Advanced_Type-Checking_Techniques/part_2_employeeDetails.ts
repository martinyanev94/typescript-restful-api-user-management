interface Person {
    name: string;
    age: number;
}

interface Employee {
    employeeId: number;
    department: string;
}

type EmployeeDetails = Person & Employee;

const employee: EmployeeDetails = {
    name: "Alice",
    age: 30,
    employeeId: 123,
    department: "Sales"
};
