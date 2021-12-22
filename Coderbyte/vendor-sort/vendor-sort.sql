SELECT
  m.GroupId, FirstName, LastName, Job, ExternalId,
  v.CompanyName, COUNT(m.FirstName) AS Count
FROM
  maintable_VPBTF AS m
LEFT JOIN
  cb_vendorinformation AS v
ON
  v.GroupId = m.GroupId
GROUP BY FirstName
ORDER BY Count ,CompanyName ASC;