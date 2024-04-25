Create DATABASE loginform;

CREATE TABLE shopitems (
    itemId serial PRIMARY KEY,
    img OID ,
    title VARCHAR(50),
    price FLOAT,
    reducedPrice FLOAT
);


CREATE TABLE users (
    id integer PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255) unique,
    password VARCHAR(255)
);

CREATE TABLE cart (
    itemId serial PRIMARY KEY,
    img OID ,
    title VARCHAR(50),
    price FLOAT,
    reducedPrice FLOAT
);