
# Change Log
All notable changes to this project will be documented in this file.
 
The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [1.0.0] 🎉 - 2022-09-23
### Added
- Added README.md with overview of application and setup instructions

### Changed
- Tidied up client folders and code slightly

## [0.5.0] - 2022-09-23
### Added
- Implemented API in frontend interface for shortening URL
- Added alert for user if URL entered already exists in the database + output existing short URL

### Changed
- Routes for server updated to alow automatic redirection of short URLs to actual URLs

### Fixed
- DB error when long urls are too long by increasing size allocated from VARCHAR(255) to VARCHAR(510)
- Fixed route for helper API getAllURLs()

## [0.4.0] - 2022-09-23
### Added
- Add frontend interface

### Removed
- Remove unnecessary files from react template

## [0.3.0] - 2022-09-23
### Added
- Add axios and Material UI dependencies for React 
- Add API to retrieve existing long URL using short URL
- Add API to insert new long URL into DB, and create and return short URL
- Add helper API to retrieve all entries in DB
- Add helper API to delete entry in DB using short URL

## [0.2.0] - 2022-09-22
### Added
- Add initial React setup

### Changed
- docker-compose to contain container for React on port 3000

### Fixed
- Fix initialisation DB bug for docker-compose command

## [0.1.0] - 2022-09-21
### Added
- Add initial NodeJs setup
- Add initial MySQL setup
- Create initial database for URLs
- Dockerize both NodeJs and MySQL