#!/bin/bash
cd examples/react-sandbox
yarn unlink "@shapeshiftoss/metamask-snaps" && yarn install --force
cd ../..
yarn unlink
