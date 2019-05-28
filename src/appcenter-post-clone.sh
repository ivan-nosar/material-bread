#!/bin/sh

# please specify required Node.js version
NODE_VERSION=8.10.0

# workaround to override the v8 alias
npm config delete prefix
. ~/.bashrc
nvm install "$NODE_VERSION"
nvm alias node8 "$NODE_VERSION"

echo "Node version: $(node -v)"
echo "npm version: $(npm -v)"