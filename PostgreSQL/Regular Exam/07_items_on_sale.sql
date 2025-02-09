SELECT
	i.name,
	CONCAT(UPPER(b.name), '/', LOWER(c.name)) AS promotion,
	CONCAT('On sale: ', i.description) AS description,
	i.quantity
FROM
	items AS i
LEFT JOIN
	orders_items AS oi
ON
	oi.item_id = i.id
JOIN
	brands AS b
ON
	b.id = i.brand_id
JOIN
	classifications AS c
ON
	c.id = i.classification_id
WHERE
	oi.order_id IS NULL
ORDER BY
	i.quantity DESC,
	i.name ASC
;