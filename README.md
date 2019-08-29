This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Steps to run

- run `yarn install`
- run `yarn start`
- open [`localhost:3000`](http://localhost:3000) in browser

## Public demo URL: [http://fat-turkey.surge.sh/](http://fat-turkey.surge.sh/)

## About 

This is a study on autocomplete dropdown control which will search over a list of users.

The user object has the following fields

- id: a unique id
- name: user’s name
- items: list of items ordered by user
- address: address of the user
- pincode: user address pin code

The behaviour of the control must be as below:

- The list of cards can be navigated through keyboard or mouse
- On typing in the search input box, the search results list opens up. The search could be just a string matching search.
- The list of cards can be navigated through keyboard or mouse
- only one card should highlight at a time if both mouse and keyboard are used for navigation
(keyboard will take preference if mouse is kept hovered on the list, similarly mouse will take preference if keyboard navigation is not used).
- When no search results are found, an empty card is displayed
- The card list would be scrollable
- The highlighted card (via keyboard/mouse) will scroll into view
