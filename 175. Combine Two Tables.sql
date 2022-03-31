# Write your MySQL query statement below
SELECT
  p.firstName, p.lastName, a.city, a.state
FROM
  Address AS a
RIGHT JOIN
  Person AS p
ON
  p.personId = a.personId;