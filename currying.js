const studentGrades = [ 
  {name: 'Joe', grade: 88},
  {name: 'Jen', grade: 94},
  {name: 'Steph', grade: 77},
  {name: 'Allen', grade: 60},
  {name: 'Gina', grade: 54},
];

const getFeedback = (gradeMessages) => (student) => {
    let letterGrade;
    if (student.grade >= 90) letterGrade = 'a';
    else if (student.grade >= 80) letterGrade = 'b';
    else if (student.grade >= 70) letterGrade = 'c';
    else if (student.grade >= 60) letterGrade = 'd';
    else letterGrade = 'f';

    const message = gradeMessages[letterGrade] || 'Keep trying';
    return `${message} ${student.name}, you got an ${letterGrade}`;
};

const myGradeMessages = {
    a: 'Excellent Job',
    b: 'Nice Job',
    c: 'Well done',
    d: 'What happened',
    f: 'Not good'
};
const feedbackGenerator = getFeedback(myGradeMessages);

const studentFeedback = studentGrades.map(feedbackGenerator);

console.log(studentFeedback);
