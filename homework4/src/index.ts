enum DaysOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function getActivity(dayOfweek: DaysOfWeek): string {
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

class Queue<T> {
  private data: T[] = [];

  enqueue(item: T) {
    this.data.push(item);
  }

  dequeue(): T | undefined {
    return this.data.shift();
  }
}

type StringOrNumber = string | number;

function combine(input1: StringOrNumber, input2: StringOrNumber) {
  if (typeof input1 === 'string' && typeof input2 === 'string') {
    return input1 + ' ' + input2;
  } else if (typeof input1 === 'number' && typeof input2 === 'number') {
    return input1 + input2;
  } else {
    throw new TypeError('Input types missmatch');
  }
}

interface IWorker {
  position: string;
  salary: number;
}

interface IPerson extends IWorker {
  name: string;
  age: number;
}

class Worker implements IWorker {
  constructor(public position: string, public salary: number) {}
  setSalary(salary: number) {
    this.salary = salary;
  }
  getSalary() {
    return this.salary;
  }
}

// Description mentions IPerson interface but it is not used in the code
// I'll create a WorkablePerson class that implements IPerson interface
class WorkablePerson implements IPerson {
  constructor(public name: string, public age: number, public position: string, public salary: number) {}
  setSalary(salary: number) {
    this.salary = salary;
  }
  getSalary() {
    return this.salary;
  }
}

export { DaysOfWeek, getActivity, Queue, StringOrNumber, combine, Worker, WorkablePerson };