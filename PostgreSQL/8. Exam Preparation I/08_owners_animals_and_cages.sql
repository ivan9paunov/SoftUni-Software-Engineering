SELECT
	CONCAT(o.name, ' - ', a.name) AS "owners-animals",
	o.phone_number,
	ac.cage_id
FROM
	animals AS a
JOIN
	owners AS o
ON
	a.owner_id = o.id
JOIN
	animals_cages AS ac
ON
	a.id = ac.animal_id
WHERE
	a.animal_type_id = (SELECT id FROM animal_types WHERE animal_type = 'Mammals')
ORDER BY
	o.name ASC,
	a.name DESC
;