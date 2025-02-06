SELECT
	a.name,
	EXTRACT(YEAR FROM a.birthdate),
	aty.animal_type
FROM
	animals AS a
JOIN
	animal_types AS aty
ON
	a.animal_type_id = aty.id
WHERE
	a.owner_id IS NULL
		AND
	AGE(TIMESTAMP '2022-01-01', a.birthdate) < '5 years'
		AND
	aty.animal_type <> 'Birds'
ORDER BY
	name
;