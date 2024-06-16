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
var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    Queue.prototype.enqueue = function (item) {
        this.data.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.data.shift();
    };
    return Queue;
}());
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
var Worker = /** @class */ (function () {
    function Worker(position, salary) {
        this.position = position;
        this.salary = salary;
    }
    Worker.prototype.setSalary = function (salary) {
        this.salary = salary;
    };
    Worker.prototype.getSalary = function () {
        return this.salary;
    };
    return Worker;
}());
exports.Worker = Worker;
// Description mentions IPerson interface but it is not used in the code
// I'll create a WorkablePerson class that implements IPerson interface
var WorkablePerson = /** @class */ (function () {
    function WorkablePerson(name, age, position, salary) {
        this.name = name;
        this.age = age;
        this.position = position;
        this.salary = salary;
    }
    WorkablePerson.prototype.setSalary = function (salary) {
        this.salary = salary;
    };
    WorkablePerson.prototype.getSalary = function () {
        return this.salary;
    };
    return WorkablePerson;
}());
exports.WorkablePerson = WorkablePerson;
