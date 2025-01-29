SELECT 
	mc.country_code,
	m.mountain_range,
	p.peak_name,
	p.elevation
FROM 
	mountains AS m
JOIN
	peaks AS p
ON
	m.id = p.mountain_id
JOIN
	mountains_countries AS mc
ON
	m.id = mc.mountain_id
WHERE
	country_code = 'BG'
		AND
	elevation > 2835
ORDER BY
	elevation DESC
;