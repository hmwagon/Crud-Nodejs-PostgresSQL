CREATE DATABASE nodeapi;

create table users(
    id SERIAL primary key,
    name VARCHAR(40),
    email TEXT
)

INSERT INTO users (name, email)values('miguel', 'mdesarrollador23@gmail.com')