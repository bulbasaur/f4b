"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkablePerson = exports.Worker = exports.combine = exports.Queue = exports.getActivity = exports.DaysOfWeek = void 0;
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["Monday"] = 0] = "Monday";
    DaysOfWeek[DaysOfWeek["Tuesday"] = 1] = "Tuesday";
    DaysOfWeek[DaysOfWeek["Wednesday"] = 2] = "Wednesday";
    DaysOfWeek[DaysOfWeek["Thursday"] = 3] = "Thursday";
    DaysOfWeek[DaysOfWeek["Friday"] = 4] = "Friday";
    DaysOfWeek[DaysOfWeek["Saturday"] = 5] = "Saturday";
    DaysOfWeek[DaysOfWeek["Sunday"] = 6] = "Sunday";
})(DaysOfWeek || (exports.DaysOfWeek = DaysOfWeek = {}));
function getActivity(dayOfweek) {
    switch (dayOfweek) {
        case DaysOfWeek.Monday:
        case DaysOfWeek.Tuesday:
        case DaysOfWeek.Wednesday:
        case DaysOfWeek.Thursday:
        case DaysOfWeek.Friday:
            return "Work";
        case DaysOfWeek.Saturday:
        case DaysOfWeek.Sunday:
            return "Rest";
    }
}
exports.getActivity = getActivity;
class Queue {
    constructor() {
        this.data = [];
    }
    enqueue(item) {
        this.data.push(item);
    }
    dequeue() {
        return this.data.shift();
    }
}
exports.Queue = Queue;
function combine(input1, input2) {
    if (typeof input1 === 'string' && typeof input2 === 'string') {
        return input1 + ' ' + input2;
    }
    else if (typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2;
    }
    else {
        throw new TypeError('Input types missmatch');
    }
}
exports.combine = combine;
class Worker {
    constructor(position, salary) {
        this.position = position;
        this.salary = salary;
    }
    setSalary(salary) {
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
}
exports.Worker = Worker;
// Description mentions IPerson interface but it is not used in the code
// I'll create a WorkablePerson class that implements IPerson interface
class WorkablePerson {
    constructor(name, age, position, salary) {
        this.name = name;
        this.age = age;
        this.position = position;
        this.salary = salary;
    }
    setSalary(salary) {
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
}
exports.WorkablePerson = WorkablePerson;
