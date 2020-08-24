🚧👷🏽‍♀️ WIP 👷🏼🚧

We're still figuring out our Air Robe architecture as we go, but for now, this repo is for a hosted shopify app that our clients can use to integrate with their Shopify stores, to connect with our Air Robe marketplace.

## Overview

- When integrated with a Shopify store, javascript files allow for customisation of the UI
- Webhook configuration sends data to AirRobe of customer purchases
- Hosted UI allows store managers to view data relating to this integration

## Javascripts

- Currently, we use two javascript files, as files specified in config/initializers/shopify_app.rb appear to be cached by each store, which means that if we were to only use one script file, updates may not be reliably rolled out
- public/app-install.js is installed into the theme, which injects the next script
- public/airrobe-plugin.js modifies the markup on the product page

## Webhooks

- We install a webhook for the "orders/create" action, which is triggered after an order is finalised in one of our client's stores. This webhook sends data to _TBD_
