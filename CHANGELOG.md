
# Change Log
All notable changes to this project will be documented in this file.
 
The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

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