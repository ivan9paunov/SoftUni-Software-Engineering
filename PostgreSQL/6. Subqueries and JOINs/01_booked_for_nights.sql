SELECT
	CONCAT(address, ' ', address_2) AS apartment_address,
	booked_for AS nights
FROM
	apartments as a
JOIN
	bookings
USING
	(booking_id)
ORDER BY
	a.apartment_id
;