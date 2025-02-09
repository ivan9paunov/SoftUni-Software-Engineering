UPDATE
	reviews
SET
	rating = CASE
		WHEN item_id = customer_id THEN 10.0
		WHEN customer_id > item_id THEN 5.5
		ELSE rating
	END
;