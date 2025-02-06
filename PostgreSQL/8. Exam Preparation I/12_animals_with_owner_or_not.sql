CREATE OR REPLACE PROCEDURE sp_animals_with_owners_or_not(
	IN animal_name VARCHAR(30),
	OUT pet_owner VARCHAR(30)
)
AS
$$
BEGIN
	SELECT 
		o.name
	INTO 
		pet_owner
	FROM
		owners AS o
	JOIN
		animals AS a
	ON
		o.id = a.owner_id
	WHERE
		a.name = animal_name
	;

	IF pet_owner IS NULL THEN
		pet_owner := 'For adoption';
	END IF;
END;
$$
LANGUAGE
	plpgsql
;