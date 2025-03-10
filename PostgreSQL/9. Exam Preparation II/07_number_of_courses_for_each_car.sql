SELECT
	ca.id,
	ca.make,
	ca.mileage,
	COUNT(co.car_id) AS count_of_courses,
	ROUND(AVG(co.bill), 2) AS average_bill
FROM
	cars AS ca
LEFT JOIN
	courses AS co
ON
	ca.id = co.car_id
GROUP BY
	ca.id,
	ca.make,
	ca.mileage
HAVING
	COUNT(co.car_id) <> 2
ORDER BY
	count_of_courses DESC,
	ca.id ASC
;