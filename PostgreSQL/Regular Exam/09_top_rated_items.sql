SELECT
	i.name AS item_name,
	ROUND(AVG(r.rating), 2) AS average_rating,
	COUNT(r.item_id) AS total_reviews,
	b.name AS brand_name,
	c.name AS classification_name
FROM
	items AS i
JOIN
	reviews AS r
ON
	r.item_id = i.id
JOIN
	brands AS b
ON
	b.id = i.brand_id
JOIN
	classifications AS c
ON
	c.id = i.classification_id
GROUP BY
	i.name,
	b.name,
	c.name
HAVING
	COUNT(r.item_id) >= 3
ORDER BY
	average_rating DESC,
	item_name ASC
LIMIT
	3
;