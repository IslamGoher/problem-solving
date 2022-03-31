# Write your MySQL query statement below
SELECT
CASE
  WHEN COUNT(salary) < 2 THEN NULL
  WHEN MAX(salary) = MIN(salary) THEN NULL
  ELSE MIN(salary)
END AS SecondHighestSalary
FROM
 (
    SELECT
      *
    FROM
      Employee
    ORDER BY salary DESC
    LIMIT 2
 ) AS t;