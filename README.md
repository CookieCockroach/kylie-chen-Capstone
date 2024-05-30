# Project Title

## Overview

A closet management app that allows users to organize their clothes in a way that makes it easy to check what they have and get inspirations on what to wear.

### Problem

- Closet management is a pain for people who have a lot of clothes.
- It is hard to find inspiration for what to wear.
- Having a digital inventory can help people to keep track of their clothes and save money.

### User Profile

Young students, mother with kids, busy-schedule workers, and anyone who wants to keep track of their clothes.

### Features
- a database to store clothes details/descriptions ("my closet")
  - a library to store clothes icons/images; or a ready to use API
  - in terms of images, pre-define some clothes 'prototypes' and assign to items based on the category user chooses?
  - find little icons of t-shirts, pants, dresses, etc. i need to control the amount of prototypes to bigger categories?
  - is there an API to get clothes images?
- a way to get inspiration for what to wear
  - find a fashion API to get outfit specific photos
  - pull a pair of keywords from closet and get inspiration from the fashion API (randomized pair)
- a laudry basket to show checked-out clothes
  - a button attached to each item to check it out to laundry basket
  - shopping-cart to collect & restore all laundry basket items 
  - another seperate database to store laundry basket items?

## Implementation

### Tech Stack

- React
- Node.js
- Express
- database
- any library/package to show clothes inventory?
- any library/package to display inspiration cards?

### APIs

- is there an API to get mini clothes images?

### Sitemap

- Homepage
- Closet page
  - Add clothes
  - Existing closets
- Inspiration page

### Mockups

Provide visuals of your app's screens. You can use tools like Figma or pictures of hand-drawn sketches.

### Data

- Closet: id, description{color, style}, category, image
- Laundry basket: id, description{color, style}, category, image

### Endpoints
- GET /closet
- POST /closet
- PUT /closet
- DELETE /closet
- GET /inspiration
- POST /laundry
- DELETE /laundry

### Auth

Not required? it's just a personal assistant app

## Roadmap

- [ ] Add clothes
- 

## Nice-to-haves

Incorporate local weather data to suggest outfits based on the weather.
