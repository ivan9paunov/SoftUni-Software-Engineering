SELECT
	c.id AS customer_id,
	CONCAT(c.first_name, ' ', c.last_name) AS full_name,
	COUNT(o.customer_id) AS total_orders,
	CASE
		WHEN c.loyalty_card IS TRUE THEN 'Loyal Customer'
		ELSE 'Regular Customer'
	END AS loyalty_status
FROM
	customers AS c
JOIN
	orders AS o
ON
	o.customer_id = c.id
LEFT JOIN
	reviews AS r
ON
	r.customer_id = c.id
WHERE
	r.created_at IS NULL
GROUP BY
	c.id,
	full_name,
	loyalty_status
ORDER BY
	total_orders DESC,
	c.id ASC
;