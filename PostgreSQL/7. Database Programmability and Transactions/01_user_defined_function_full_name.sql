CREATE OR REPLACE FUNCTION 
	fn_full_name(first_name VARCHAR(25), last_name VARCHAR(25))
RETURNS
	VARCHAR(51)
AS
$$
	DECLARE
		full_name VARCHAR(51);
	BEGIN
		full_name := INITCAP(LOWER(first_name || ' ' || last_name));
		RETURN full_name;
	END;
$$
LANGUAGE
	plpgsql
;