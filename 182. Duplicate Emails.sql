# Write your MySQL query statement below
SELECT
  email as Email
FROM
  (
    SELECT
      email, COUNT(email) AS c
    FROM
      Person
    GROUP BY email
  ) AS t
WHERE
  c > 1;