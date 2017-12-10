*Travis*

[![Build Status](https://travis-ci.org/bredsjomagnus/ramverk2.svg?branch=master)](https://travis-ci.org/bredsjomagnus/ramverk2)

*Scrutinizer*

[![Build Status](https://scrutinizer-ci.com/g/bredsjomagnus/ramverk2/badges/build.png?b=master)](https://scrutinizer-ci.com/g/bredsjomagnus/ramverk2/build-status/master)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/bredsjomagnus/ramverk2/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/bredsjomagnus/ramverk2/?branch=master)
[![Code Coverage](https://scrutinizer-ci.com/g/bredsjomagnus/ramverk2/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/bredsjomagnus/ramverk2/?branch=master)

*Coveralls*

[![Coverage Status](https://coveralls.io/repos/github/bredsjomagnus/ramverk2/badge.svg?branch=master)](https://coveralls.io/github/bredsjomagnus/ramverk2?branch=master)

*Codecov*

[![codecov](https://codecov.io/gh/bredsjomagnus/ramverk2/branch/master/graph/badge.svg)](https://codecov.io/gh/bredsjomagnus/ramverk2)

*Codeclimate*

[![Maintainability](https://api.codeclimate.com/v1/badges/a0743fcaaf6e31f8e958/maintainability)](https://codeclimate.com/github/bredsjomagnus/ramverk2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/a0743fcaaf6e31f8e958/test_coverage)](https://codeclimate.com/github/bredsjomagnus/ramverk2/test_coverage)

*Codeacy*

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/59e45be9ec944a0b8b08992f61086b85)](https://www.codacy.com/app/bredsjomagnus/ramverk2?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=bredsjomagnus/ramverk2&amp;utm_campaign=Badge_Grade)

# Ramverk2
För utbildning, PA1442 H17 Lp2 Webbaserade ramverk 2 (distans) BTH.

Ett demo för repot finns [här](http://82.102.5.98:1337/). Demot kör via docker.

### Tekniker
Följande tekniker har använts för redovisningssidan.

* Server - Express
* Vy - Pug
* Tester - Mocha
* Databas - MongoDB

### Uppstart
Man kan starta upp sidan med `npm start` och om man sitter i windowsmiljö är det bättre att använda `./restart.bat` för att forcera avslutande av pågående processer, för att det inte skall krocka.

Med `npm run start-docker` körs `docker-compose up -d express` som bygger på imagen `node-alpine`.

Docker fungerar dock inte i Windows utan enbart i Linux.

### Miljövariabler
DBWEBB_PORT används för att ange vilken port som kopplas upp mot. Är variablen inte satt används port 1337 som default.

DBWEBB_DSN sätts till mongo som körs i docker kontainer. Annars används dsn mot [mlab](https://mlab.com/) som default.

### Tester
Man kan utföra tester mot tre olika docker images; node 6_alpine, node 7_alpine och node latest.

##### npm
* `npm run test` - för enhetstest
* `npm run test-6` - för linter och test mot node 6_alpine
* `npm run test-7` - för linter och test mot node 7_alpine
* `npm run test-latest` - för linter och test mot node latest

##### make

* `make test` - linter plus enhetstest
* `make test1` - för linter och test mot node 6_alpine
* `make test2` - förlinter och test mot node 7_alpine
* `make test3` - förlinter och test mot node latest
