let addStudent = () => {
    let form = document.getElementById('my-form');

    let { student_name, student_lastname, age, classroom } = form.elements;

    let student = {
        student_name: student_name.value,
        student_lastname: student_lastname.value,
        age: age.value,
        classroom: classroom.value,
    }
    fetch('panel/addStudent', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student)
    })
}



let addClass = () => {
    let form = document.getElementById('my-form2');

    let { class_name } = form.elements;
    let classroom = {
        class_name: class_name.value
    }
    fetch('panel/addClass', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(classroom)
    })
}

