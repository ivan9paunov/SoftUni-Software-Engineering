CREATE OR REPLACE FUNCTION udf_classification_items_count(
	classification_name VARCHAR(30)
)
RETURNS
	VARCHAR(30)
AS
$$
DECLARE
	items_count INT;
BEGIN
	SELECT 
		COUNT(c.name)
	INTO
		items_count
	FROM 
		items AS i
	JOIN
		classifications AS c
	ON
		c.id = i.classification_id
	WHERE
		c.name = classification_name
	;

	IF items_count = 0 THEN
		RETURN 'No items found.';
	ELSE
		RETURN CONCAT('Found ', items_count, ' items.');
	END IF;
END;
$$
LANGUAGE
	plpgsql
;