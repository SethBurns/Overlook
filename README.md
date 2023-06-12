# Overview
## Project
This project involved fetching and posting to a locally hosted API that you can download here:
https://github.com/turingschool-examples/overlook-api

The project required the ability for users to login through a login page and be able to view previously booked rooms, as well as search to make new bookings by room type and date. Customers can search for available rooms. If there are no rooms available, an apology message is rendered. Customers can then book rooms, receive and confirmation message, and see that new booking appear in their list of booked rooms. A total amount spent is also rendered for each customer, which gets updated as they book more rooms.

## Goals
My goals during this project were to successfully use FETCH to receive and post data to a running server while staying up to date with the server at all times during changes. I attempted to use Test Driven Development and Single Responsibility Principle to have my code clean and easy to debug. While I can improve on both of these aspects of my code, I'm proud of what I accomplished in this project.

# Challenges, Wins, Reflections
## Challenges
I ran into some issues toward the end of my project when trying to write tests. Since Mocha and Chai do not like DOM related functions, I had to split out some inner functions that were testable, and refactor some of my functions so they were pure. This was challenging and tedious as I was constantly checking to make sure I didn't break the functionality of my code, but I was successful.

# Wins
I'm proud of the overall design of the site, as well as the functionality and how I approached handling fetches and posts. Overall, I learned a ton on this project and will greatly improve the next time around.

# Reflections
On the next project, I will start with tests. This will help me ensure clean and SRP code with pure functions that can then later be used to manipulate the DOM. I started fast and hard on this project, and taking more time to zoom out and plan would have benefited my sanity toward the end. On the next project, I will also split out my functions into easier to follow files, to be more organized for others to review.

# Screenshots
