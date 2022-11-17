# time2dine
monorepo for an app that helps a group pick a place to eat

## Background

This app is supposed to be a supplement to this paper

https://docs.google.com/document/d/1tMo1FPdVn7WaN-E8CSyJiQcm2itT_Oe0QIFp5e9cfRw/edit

## Monorepo

This is a monorepo which we plan on holding two deployable artifacts at the moment.

1) `t2d-web` a nextjs react-redux project to serve as a simple frontend. Deployed via Vercel hobby account. Can visit here: https://time2dine.vercel.app/

2) `t2d-api` a unison web server. Likely to be deployed on AWS.


## Dev

### t2d-web

Make sure you have `yarn` installed.

From inside the `t2d-web` directory, run `yarn install` to make sure you have all of the dependencies set up. Then run `yarn dev` to start the development server!

### t2d-api

TBD