# Project Description

This project is a simple Snake game implemented in TypeScript and bundled with Snowpack, a lightning-fast frontend build tool designed for modern web development. Snowpack serves as an alternative to heavier bundlers like webpack or Parcel, focusing on speed and efficiency in the development workflow. The Snake game allows players to control the snake's direction to eat fruits, increasing their score.

![image](https://github.com/diegomottadev/snake-app/assets/64202326/4c254a19-efa2-41a6-927c-7aa51019406c)

## Installation

To install and run the game on your local machine, follow these steps:

    git clone https://github.com/diegomottadev/snake-app
    cd snake-app


## Install Dependencies:

    npm install

## Running the Game

Once you've installed the dependencies, you can start the game with the following command:

    npm start

This will launch the application, and you can access the game through your browser at http://localhost:8080 (or the port assigned by Snowpack).

# Game Controls

## Keyboard Arrows:

    ↑ - Move Up
    ↓ - Move Down
    ← - Move Left
    → - Move Right
    Space: Pause/Resume the game

## Game Rules

- The snake starts with a length of one segment.
- The player controls the snake's direction using the keyboard arrows.
- The goal is to eat the fruit that appears randomly on the screen.
- Each time the snake eats a fruit, its length increases, and score is added.
- The game ends if the snake touches the screen borders or collides with itself.

Enjoy the game and have fun playing Snake!


## Snowpack Usage

This project utilizes Snowpack as its frontend build tool. Snowpack leverages JavaScript's native module system (ESM) to provide a faster development experience, avoiding unnecessary work and maintaining speed as the project scales. Unlike traditional bundlers, Snowpack doesn't bundle your code during development, resulting in quicker build times.
