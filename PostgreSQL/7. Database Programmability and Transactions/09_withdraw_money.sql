CREATE OR REPLACE PROCEDURE sp_withdraw_money(
	account_id INT,
	money_amount NUMERIC(15, 4)
)
AS
$$
BEGIN
	IF money_amount <= (SELECT balance FROM accounts WHERE account_id = id) THEN
		UPDATE 
			accounts
		SET 
			balance = balance - money_amount
		WHERE
			id = account_id
		;
	ELSE
		RAISE NOTICE
			'Insufficient balance to withdraw %', money_amount;
	END IF;
END;
$$
LANGUAGE
	plpgsql
;