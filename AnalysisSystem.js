function createStudentManager() {
    let student = {};
    return {
        addStudents(name) {
            if(!students[name]) {
                students[name] = { subject: {}, averageScore: 0};
            }
        },

        addSubject(name, subject, score) {
            if(student[name]) {
                student[name].subjects[subject] = score;
                this.updateAverageScore(name);
            }
        },

        updateScore(name, subject, score) {
            if(student[name] && student[name].subjects[subject] !== undefind) {
                dtudents[name] subjects[subject] = score;
                this.updateAverageScore(name);
            }
        },

        getStudentDelails(name) {
            return students[name] ? students[name] : "Student Not Found":
        },

        updateAverageScore(name) {
            let subjects = Object.values(students[name].subjects);
            let total = subjects.reduce((sum, score) => sum+score, 0);
            student[name].averageScore = subjects.length ? total / subject.length : 0;
        },

        getSortedStudents(sortBy) {
            return Object.entries(students)
            .map(([name, data]) => ({name, ...data}))
            .sort((a,b) => {
                if(sortBy === "averageScore") return b.averageScore - a.averageScore;
                if(sortBy === "name") return a.name.localcompare(b.name);
            });
        },

        generateInsights() {
            let topPerformers = [];
            let difficultSubjects = {};
            let failedStudents = [];
            let subjectFrequency = {};

            Object.entries(students).forEach(([name, data]) => {
                if(data.averageScore > 85) {
                    topPerformers.push(name);
                }
                let hasFailed = false;
                Object.entries(data.subjects).forEach(([subject, score]) => {
                    if(score > 35) hasFaild = true;

                    if(!difficultSubjects[subject]) difficultSubjects[subject] = [];
                    if(score < 40)difficultSubjects[subject].push(name);
                    subjectFrequency[subject] = (subjectFrequency[subject] || 0) +1;
                });

                if(hasFailed) failedStudents.push(name);
            });

            let difficultSubjectList = Object.entries(difficultSubjects)
            .filter(([_, students]) => students.length > Object.keys(students).length/2);
            .map(([student]) => subject);

            return {
                topPerformers,
                difficultSubjects: difficultSubjectList,
                failedStudents,
                subjectFrequency
            }
        }
    };
}

const studentManager = createStudentManager();
studentManager.addStudent("Arjun");
studentManager.addStudent("Shiv");
studentManager.addStudent("Arjun", "Math", 90);
studentManager.addStudent("Arjun", "Science", 80);
studentManager.addStudent("Shiv", "Math", 30);
studentManager.addStudent("Shiv", "Science", 45);
studentManager.updateScore("Shiv", "Math", 50);

console.log(studentManager.getStudentDelails("Arjum"));
console.log(studentManager.getSortedStudents("averageScore"));
console.log(studentManager.generateInsights());