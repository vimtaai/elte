INSERT INTO USER (ID, NAME, EMAIL, PASSWORD, ROLE) VALUES (1, 'Anna', 'anna@example.com', '$2a$10$baKB/45SHvjPv7TXKHjNL.fHLZoEEie8.BSls/CtiJk3k/c/7VHja', 'USER');
INSERT INTO USER (ID, NAME, EMAIL, PASSWORD, ROLE) VALUES (2, 'Andris', 'andris@example.com', '$2a$10$baKB/45SHvjPv7TXKHjNL.fHLZoEEie8.BSls/CtiJk3k/c/7VHja', 'USER');
INSERT INTO USER (ID, NAME, EMAIL, PASSWORD, ROLE) VALUES (3, 'Elek', 'elek@example.com', '$2a$10$baKB/45SHvjPv7TXKHjNL.fHLZoEEie8.BSls/CtiJk3k/c/7VHja', 'ADMIN');

INSERT INTO TODO (ID, TEXT, USER_ID) VALUES (1, 'Do stuff', 1);
INSERT INTO TODO (ID, TEXT, USER_ID) VALUES (2, 'Do more stuff', 3);
INSERT INTO TODO (ID, TEXT, USER_ID) VALUES (3, 'Do even more stuff', 1);
INSERT INTO TODO (ID, TEXT, USER_ID) VALUES (4, 'Relax a bit', 2);
INSERT INTO TODO (ID, TEXT, USER_ID) VALUES (5, 'Do more stuff', 1);