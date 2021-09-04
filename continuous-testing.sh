#!/usr/bin/env bash

fdfind . test | entr -c npm run test
