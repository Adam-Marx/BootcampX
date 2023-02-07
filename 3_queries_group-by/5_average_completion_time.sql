SELECT students.name as student_name, AVG(assignment_submissions.duration) as average
FROM students
JOIN assignment_submissions ON student_id = students.id
WHERE students.end_date IS NULL
GROUP BY student_name
ORDER BY average DESC;