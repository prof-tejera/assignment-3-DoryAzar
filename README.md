# Assignment 3

## Submission 

[Visit Neumorphic Workout](https://prof-tejera.github.io/assignment-3-DoryAzar/)

## What has been implemented

+ Workout Home that executes all the configured timers
+ The total workout duration
+ The total number of timers configured in a workout
+ Ability to see the list of all timers that have been configured
+ Ability to add and remove workout sets from an "/add" route
+ Ability to update the settings of a timer contextually
+ Ability to remove a timer from a workout contextually
+ Ability to start/pause workout
+ Ability to skip (fast-forward) a workout set
+ Ability to restart the whole workout
+ BONUS: Cypress tests written and deployed as actions on Github
+ FEEDBACK: 
    - Feedback from previous assignments has been corrected
    - Feedback to include list of counters in the workout creation was implemented

## Known Issues

+ Visual issue with Firefox as identified in previous assignments. The issue has been resolved with a slight visual change on Firefox only.
+ Some of the input fields in the settings do not react to the click from the first try as mentioned in the feedback. After investigating this might be a byproduct of the react synthesized divs. Clicking on an area where there is no text works.


## Credits

+ Illustration in empty states are created by Iconscout and published on for public use [Pinterest](https://www.pinterest.com/pin/732960908102202953/)

##  Inspiration

We decided for this design to revisit a novel and modern approach to Skeumorphism. This new trend - called Neumorphism - started in 2020 and aims to add more depth and more layering to the contemporary flat design.


Here are some of the references that inspired this work:
+ [Neumorphism and CSS](https://css-tricks.com/neumorphism-and-css/)
+ [Neumorphism in CSS with just two variables](https://dev.to/aritik/neumorphism-in-css-with-just-two-variables-2p30)
+ [Neumorphism Tool](https://neumorphism.io)
+ [Neumorphism in user interfaces](https://uxdesign.cc/neumorphism-in-user-interfaces-b47cef3bf3a6)
+ [Neumorphism: why it's all the hype in UI design](https://www.justinmind.com/blog/neumorphism-ui/)
+ [Neumorphism the right way -  A 2020 Design Trend](https://artofofiare.medium.com/neumorphism-the-right-way-a-2020-design-trend-386e6a09040a)

## Objective for Assignment 3

This is the 3rd and last assignment (A3) for E-39 Design Principles in React. Using our timers from Assignment 2 (A2), we will build a workout app that allows our users to assemble **multiple timers** into a workout queue. This workout queue will be executed in the order that the timers were added. Let's take a look at an example:


## Structural Changes to Context

We will have to make changes to our context in order to support the requirements for A3. In A2 we had to store the state of only one timer that we were configuring, now we will have to store all of the timers that the user has configured and the order that the timers will be executed when the user runs the workout. The order that the timers are created is the order in which they are executed.

The choice of data structure should be a queue, which follows First-In-First-Out, and supports the normal enqueue (add item to the queue) and dequeue (removes item from the queue). How you implement the queue is up to you, but things to consider are that:

1. Each timer can be in one of three states: running, completed, and not running. You will need a way to keep track of what state the timer is in, so that you can display it accordingly (see the image above) 
2. During configuration, the user can remove any timer from the queue, so you will be supporting deleting
3. While the timer is running, you will need to either store or dynamically calculate which timer is active. 
4. You don't want to clear the configurations as the timers are running. The user should be able to restart the entire workout at anytime

## Changes to Routing

Currently we have two routes `/` and `/docs`. We are going to be modifying our `/` screen and add a new one called `/add` using react-router.
### Home - Path should be `/`

- List of timers to be run for a workout. User should be able to remove a timer
- The total time the workout will take
- A button to "Add" a new timer. This button brings the user to the `/add` screen
- Controls to Pause/Resume the workout
- Controls to reset the workout back to its initial state
- Controls to "fast-forward" - ends the current running timer and moves onto the next one

### Add Timer - Path should be `/add`

- When user clicks "Add" from **Home** screen, they are routed to this page, where they can choose the type of timer and configure all inputs for each timer. After configuring, the user confirms and the timer is added to the list.
- The `/add` page should allow the user to configure any of the four timers (stopwatch, countdown, XY, and tabata)
- The user should be able to go back to the home page from here

## Installing and Running the project

As you have noticed this repository is empty. To begin this assignment you must copy over all of our files from A2 into this repo. **Do not copy over the `.git` directory and the `.gitignore` file.**. 

## Deliverable
- A user can configure (combination of any timers in any order) and execute a workout 
- All four timers must be functional: stopwatch, countdown, tabata, and XY.
- Routing must be configured to support the home route (`/`) and add route (`/add`)
- As you make modifications to your generic components, make sure to update documentation and prop-types. 


## Grading Rubric
- A workout can be configured with any combination of timers
- Final workout application should be bug free
- DRY (do not repeat yourself). Try to make sure common code is shared and not copy/pasted
- Console is free of warnings/errors
- Documentation and prop-types are defined and accurate
- Deploy your application

### Deployment Instructions (GH actions)

- Go to `Settings`
- Go to `Pages`
- in `Source`, select `gh-pages` branch
- Click Save
- In `package.json`, add a new key/value as: `"homepage": "https://prof-tejera.github.io/<repo>"`

Once the `build-deploy` action finishes running, the app should be live
at `https://prof-tejera.github.io/<repo>`

For other ways to deploy see https://github.com/prof-tejera/react-deployment-code

## Bonus

- Add full test coverage using Cypress.io. This will require that you get your tests running locally and then add a new Github action that will run the tests every time you commit to GitHub. Note that the Cypress setup is not part of this project and must be configured by you (max 8 points)
