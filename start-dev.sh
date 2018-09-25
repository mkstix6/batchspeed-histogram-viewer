#!/bin/bash

yarn install
npm run test:watch &
npm run build:watch &
npm run serve &

wait
