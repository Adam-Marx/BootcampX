SELECT cohorts.name as cohort_name, COUNT(assignment_submissions.*)
FROM assignment_submissions
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
GROUP BY cohort_name
ORDER BY COUNT(assignment_submissions.*) DESC;