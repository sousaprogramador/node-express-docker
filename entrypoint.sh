#!/bin/bash

#On error no such file entrypoint.sh, execute in terminal - dos2unix .docker\entrypoint.sh
chown -R root:root /var/www
chown -R root:root .
yarn
yarn typeorm migration:run

yarn dev
