const { pool } = require('./students');

const cohortName = process.argv[2];

pool.query(`
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teachers.id = assistance_requests.teacher_id
JOIN students ON students.id = assistance_requests.student_id 
JOIN cohorts ON cohorts.id = students.id 
WHERE cohorts.name = $1 || 'JUL02'
ORDER BY teacher;
`, [cohortName])
.then(res => {
  res.rows.forEach(row => {
    console.log(`${row.cohort}: ${row.teacher}`);
  })
});