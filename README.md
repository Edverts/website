# Edverts Website with eleventy
A simple website to feature the app deployments and a bit of marketing for a starter.

## Source
The site is build with eleventy, a simple static site generator (SSG) written in JavaScript. It transforms a directory of templates (of varying types) into HTML.

See also: https://www.11ty.dev/

## Installation
Clone the repo and run:

`npm install @11ty/eleventy --save-dev`

To run the website locally (e.g. localhost:8080 by default):

`npx @11ty/eleventy --serve`

See also: https://www.npmjs.com/package/@11ty/eleventy

## Build process on Github
A GH action is setup (`Deploy Eleventy to GH Pages`) to run every time something is pushed to a feature branch.