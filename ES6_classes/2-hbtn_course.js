export default class HolbertonCourse {
    constructor(name, length, students) {
        if (typeof(name) !== 'string') {
            throw TypeError("name must be string");
        }
        if (typeof(length) !== 'number') {
            throw TypeError("length must be int");
        }
        if (Array.isArray(students) !== true && typeof(students[0] !== 'string')) {
            throw TypeError("students must be a array of strings");
        }
        this._name = name;
        this._length = length;
        this._students = students;
    }
    
    get name() {
        return this._name;
    }

    get length() {
        return this._length;
    }

    get students() {
        return this._students
    }

    set name(name) {
        if (typeof(name) !== 'string'){
            throw TypeError("name must be string");
        }
        this._name = name
    }

    set length(length) {
        if (typeof(length) !== 'number'){
            throw TypeError("lenght must be inst");
        }
        this._length = length;
    }

    set students(students) {
        if (Array.isArray(students) !== true && typeof(students[0] !== 'string')) {
            throw TypeError("students must be a array of strings");
        }
        this._students = students;
    }
}