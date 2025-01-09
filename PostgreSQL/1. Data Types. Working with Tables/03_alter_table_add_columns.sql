ALTER TABLE minions_info
ADD COLUMN code CHAR(4),
ADD COLUMN task text,
ADD COLUMN salary NUMERIC(8, 3);