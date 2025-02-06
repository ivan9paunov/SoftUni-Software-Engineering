CREATE OR REPLACE FUNCTION fn_get_volunteers_count_from_department(
	searched_volunteers_department VARCHAR(30)
)
RETURNS INT
AS
$$
DECLARE
	total_volunteers INT;
BEGIN
	SELECT 
		COUNT(department_id)
	FROM 
		volunteers
	WHERE
		department_id = (SELECT id FROM volunteers_departments WHERE department_name = searched_volunteers_department)
	INTO total_volunteers;

	RETURN total_volunteers;
END;
$$
LANGUAGE
	plpgsql
;