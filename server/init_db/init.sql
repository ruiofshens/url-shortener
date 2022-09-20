CREATE DATABASE IF NOT EXISTS urlsdb;

USE urlsdb;

DROP TABLE IF EXISTS urls;

CREATE TABLE urls (
    short_url VARCHAR(255) NOT NULL,
    long_url VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (short_url),
    CONSTRAINT UQ_long_url UNIQUE (long_url)
);