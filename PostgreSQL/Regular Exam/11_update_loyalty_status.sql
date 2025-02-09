CREATE OR REPLACE PROCEDURE udp_update_loyalty_status(
	min_orders INT
)
AS
$$
BEGIN
	UPDATE
		customers
	SET
		loyalty_card = TRUE
	WHERE id IN (
		SELECT 
			c.id
		FROM 
			customers AS c
		JOIN
			orders AS o
		ON
			o.customer_id = c.id
		GROUP BY
			c.id
		HAVING
			COUNT(o.customer_id) >= min_orders
				AND
			c.loyalty_card = FALSE
		);
END;
$$
LANGUAGE
	plpgsql
;