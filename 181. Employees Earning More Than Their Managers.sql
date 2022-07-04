# Write your MySQL query statement below
SELECT
  t.name AS Employee
FROM
  (
    SELECT
      e.name, e.salary as salary, m.salary as manager_salary
    FROM
      Employee AS e
    LEFT JOIN
      Employee AS m
    on
      e.managerId = m.id
  ) AS t
WHERE
  t.salary > t.manager_salary;