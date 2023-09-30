CREATE DATABASE unimapper;
USE unimapper;

-- Tabela Miasta
CREATE TABLE cities (
                        id INT PRIMARY KEY AUTO_INCREMENT,
                        name VARCHAR(255) NOT NULL
);

-- Tabela University
CREATE TABLE universities (
                            id INT PRIMARY KEY AUTO_INCREMENT,
                            name VARCHAR(255) NOT NULL,
                            location VARCHAR(255) NOT NULL,
                            city_id INT,
                            FOREIGN KEY (city_id) REFERENCES cities(id)
);

-- Tabela Departaments
CREATE TABLE departaments (
                              id INT PRIMARY KEY AUTO_INCREMENT,
                              name VARCHAR(255) NOT NULL,
                              latitude DECIMAL(10,8),
                              longtitude DECIMAL(11,8),
                              university_id INT,
                              FOREIGN KEY (university_id) REFERENCES universities(id)
);

-- Tabela FieldsOfStudy
CREATE TABLE fields_of_study (
                               id INT PRIMARY KEY AUTO_INCREMENT,
                               name VARCHAR(255) NOT NULL,
                               threshold INT,
                               year INT,
                               departament_id INT,
                               FOREIGN KEY (departament_id) REFERENCES departaments(id)
);

-- Tabela Zainteresowania
CREATE TABLE fields_of_interest (
                                 id INT PRIMARY KEY AUTO_INCREMENT,
                                 name VARCHAR(255) NOT NULL
);

-- Tabela Praca
CREATE TABLE jobs (
                     id INT PRIMARY KEY AUTO_INCREMENT,
                     name VARCHAR(255) NOT NULL,
                     salary DECIMAL(10,2) NOT NULL,
                     fieldOfStudy_id INT,
                     FOREIGN KEY (fieldOfStudy_id) REFERENCES fields_of_study(id)
);

-- Tabela Akademik
CREATE TABLE dorms (
                      id INT PRIMARY KEY AUTO_INCREMENT,
                      name VARCHAR(255) NOT NULL,
                      price INT NOT NULL
);

-- Populate cities
INSERT INTO cities (name) VALUES
                              ('Warszawa'),
                              ('Kraków'),
                              ('Wrocław'),
                              ('Poznań'),
                              ('Gdańsk'),
                              ('Szczecin'),
                              ('Bydgoszcz'),
                              ('Lublin'),
                              ('Katowice'),
                              ('Łódź');

-- Populate university
INSERT INTO universities (name, location, city_id) VALUES
                                                     ('Uniwersytet Warszawski', 'Warszawa', 1),
                                                     ('Uniwersytet Jagielloński', 'Kraków', 2),
                                                     ('Uniwersytet Wrocławski', 'Wrocław', 3),
                                                     ('Uniwersytet im. Adama Mickiewicza', 'Poznań', 4),
                                                     ('Uniwersytet Gdański', 'Gdańsk', 5),
                                                     ('Uniwersytet Szczeciński', 'Szczecin', 6),
                                                     ('Uniwersytet Kazimierza Wielkiego', 'Bydgoszcz', 7),
                                                     ('Uniwersytet Marii Curie-Skłodowskiej', 'Lublin', 8),
                                                     ('Uniwersytet Śląski', 'Katowice', 9),
                                                     ('Uniwersytet Łódzki', 'Łódź', 10);

-- Populate departaments
INSERT INTO departaments (name, latitude, longtitude, university_id) VALUES
                                                                         ('Wydział Prawa', 52.2297, 21.0122, 1),
                                                                         ('Wydział Medyczny', 50.0647, 19.9450, 2),
                                                                         ('Wydział Informatyki', 51.1079, 17.0385, 3),
                                                                         ('Wydział Nauk Ekonomicznych', 52.4064, 16.9252, 4),
                                                                         ('Wydział Filologiczny', 54.3721, 18.6386, 5),
                                                                         ('Wydział Humanistyczny', 53.4289, 14.5530, 6),
                                                                         ('Wydział Pedagogiki', 53.1235, 18.0084, 7),
                                                                         ('Wydział Biologii', 51.2465, 22.5684, 8),
                                                                         ('Wydział Socjologii', 50.2649, 19.0238, 9),
                                                                         ('Wydział Historii', 51.7689, 19.4560, 10);

-- Populate fieldsOfStudy
INSERT INTO fields_of_study (name, threshold, year, departament_id) VALUES
                                                                      ('Prawo', 90, 2023, 1),
                                                                      ('Medycyna', 92, 2023, 2),
                                                                      ('Informatyka', 85, 2023, 3),
                                                                      ('Ekonomia', 80, 2023, 4),
                                                                      ('Filologia polska', 75, 2023, 5),
                                                                      ('Historia sztuki', 70, 2023, 6),
                                                                      ('Pedagogika wczesnoszkolna', 74, 2023, 7),
                                                                      ('Biologia molekularna', 88, 2023, 8),
                                                                      ('Socjologia', 78, 2023, 9),
                                                                      ('Historia', 76, 2023, 10);

-- Populate fieldOfInterest
INSERT INTO fields_of_interest (name) VALUES
                                       ('Programowanie'),
                                       ('Czytanie'),
                                       ('Podróże'),
                                       ('Muzyka'),
                                       ('Sport'),
                                       ('Fotografia'),
                                       ('Gotowanie'),
                                       ('Malarstwo'),
                                       ('Film'),
                                       ('Teatr');

-- Populate job
INSERT INTO jobs (name, salary, fieldOfStudy_id) VALUES
                                                    ('Programista', 8000.00, 3),
                                                    ('Lekarz', 12000.00, 2),
                                                    ('Ekonomista', 6500.00, 4),
                                                    ('Nauczyciel języka polskiego', 4000.00, 5),
                                                    ('Kurator sztuki', 5500.00, 6),
                                                    ('Nauczyciel wczesnoszkolny', 4200.00, 7),
                                                    ('Badacz biologiczny', 7000.00, 8),
                                                    ('Socjolog', 5000.00, 9),
                                                    ('Historyk', 4800.00, 10),
                                                    ('Prawnik', 8500.00, 1);

-- Populate dorm
INSERT INTO dorms (name, price) VALUES
                                   ('Akademik Królewski', 1000),
                                   ('Akademik Jagielloński', 1100),
                                   ('Akademik Wrocławski', 950),
                                   ('Akademik Mickiewicz', 980),
                                   ('Akademik Gdański', 1020),
                                   ('Akademik Szczeciński', 900),
                                   ('Akademik Bydgoszcz', 910),
                                   ('Akademik Lublin', 930),
                                   ('Akademik Katowice', 940),
                                   ('Akademik Łódź', 960);
