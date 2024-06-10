# Project Title

## Overview

A closet management app that allows users to organize their clothes in a way that makes it easy to check what they have and get inspirations on what to wear.

### Problem

- Closet management is a pain for people who have a lot of clothes.
- It is hard to find inspiration for what to wear based on what you have.
- Having a digital inventory can help people to keep track of their clothes and save money.

### User Profile

Young students, mother with kids, busy-schedule workers, and anyone who wants to keep track of their clothes or need inspiration on daily outfits.

### Features
- a database to store clothes details/descriptions ("my closet")
  - a library to store clothes
  - icons are used to represent different types of clothes
  - a way to add new clothes
  - a way to delete clothes
  - a way to edit clothes
- a way to get inspiration for what to wear
  - pull a pair of existing items from closet (one from top and another from bottom), generate inspiration image for reference
  - if not satisfied, there's a try again button
- a laudry basket to show checked-out clothes
  - a checkbox attached to each item to check it out to laundry basket
  - shopping-cart to display & restore all laundry basket items 

## Implementation

### Tech Stack

- React
- Node.js
- Express
- database/MySQL
- axios
- scss
- CORS
- Knex
- dotenv
- react-router-dom

### APIs

- [API to generate outfit photos based on key words](https://limewire.com/)

### Sitemap
- Homepage
- Closet page
  - Add clothes
  - Edit Clothes
  - Tops
  - Bottoms
  - Laundry basket
- Inspiration page

### Mockups

#### Homepage
![homepage](Home.jpg)

#### Closet feature
![closet_display_edit](/proposal/Closet_display_edit.jpg)
![closet_add](Closet_newitem.jpg)

#### Laundry basket
![laundry_basket](Laundry.jpg)

#### Inspiration page
![inspiration](Inspiration.jpg)

### Data

- Closet: id, color, type, category, icon link, "dirty" tag

### Endpoints
- GET /closet
- POST /closet
- GET /inspiration
- GET /laundry
- PUT /laundry
- GET /closet/:id
- PUT /closet/:id

### Auth

Not required, it's intended to be a local app and the data is not sensitive nor confidential.

## Roadmap
- Create client
    - react project with routes and boilerplate pages

- Create server
    - express project with routing, with placeholder 200 responses

- Create migrations

- Generate a few sample closet items

- Create seeds with sample closet item data

- Deploy client and server projects so all commits will be reflected in production

- feature: my closet
  - create the closet home, top and bottom pages

- feature: laundry basket
  - build endpoint to get all clothes tagged with "dirty"
  - create front-end interfact to display all 'checked-out' clothes, and a button to restore them to closet

- feature: inspiration
  - hookup Endpoint for image API 
  - create front-end interfact to display inspiration image

- Feature: Home page
  - add link to the closet page and inspiration page

- Bug fixes

- DEMO DAY

## Nice-to-haves

Incorporate local weather data to suggest outfits based on the weather.
