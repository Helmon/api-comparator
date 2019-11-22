# api-comparator

a library to compare the response list of api

## Prerequisite

1. Install Docker
2. Install Node.js (Min v.10.10.0)

## How to run

1. create image docker by run command
   `docker build -t helmon/api-comparator:3 .`
2. run docker image by command
   `docker run helmon/api-comparator:3`

## Run script for api comparator

1. running unit test
   `docker run helmon/api-comparator:3 npm t`
2. running api comparator test
   `docker run helmon/api-comparator:3`
