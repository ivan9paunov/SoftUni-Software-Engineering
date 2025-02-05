SELECT
	name,
	phone_number,
	TRIM(SUBSTRING(address, POSITION(',' IN address) + 1)) AS address
FROM
	volunteers
WHERE
	department_id = (SELECT id FROM volunteers_departments WHERE department_name = 'Education program assistant')
		AND
	address LIKE('%Sofia%')
ORDER BY
	name ASC
;