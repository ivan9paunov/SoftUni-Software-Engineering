SELECT
	a.name AS address,
	CASE
		WHEN EXTRACT(HOUR FROM co.start) BETWEEN 6 AND 20 THEN 'Day'
		WHEN EXTRACT(HOUR FROM co.start) <= 5 OR EXTRACT(HOUR FROM co.start) >= 21 THEN 'Night'
	END AS day_time,
	co.bill,
	cl.full_name,
	ca.make,
	ca.model,
	cat.name
FROM
	clients AS cl
JOIN
	courses AS co
ON
	co.client_id = cl.id
JOIN
	addresses AS a
ON
	co.from_address_id = a.id
JOIN
	cars AS ca
ON
	co.car_id = ca.id
JOIN
	categories AS cat
ON
	cat.id = ca.category_id
ORDER BY
	co.id
;