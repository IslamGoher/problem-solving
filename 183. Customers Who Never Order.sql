SELECT
  name AS Customers
FROM
  Customers
WHERE
  id NOT IN (SELECT customerId as id FROM Orders);