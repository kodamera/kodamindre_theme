# Documentation
You'll find complete documentation below [Utvecklng --> Frontend](https://kodamera.atlassian.net/wiki/spaces/KOD/pages/702087177/Frontend) in Kodamera's confluence space.

## Get started
First things first, this starterkit is meant to be placed inside the themes folder of a Drupal 8/9 setup. Make sure you have a Drupal setup ready before starting.

1. Fork/copy this repo, **DON'T CLONE IT**, this is a starterkit that is supposed to serve as a starting point.
2. Put it in a Drupal 8/9 theme folder of your choice.
3. Navigate to your theme: `$ cd path/to/theme`.
4. Continue to next step.

### Installation
1. To download and install the starterkit's dependenices, run `$ yarn`.
2. Continue to next step.

### Development
You're now ready start develop with the starterkit as a solid foundation.

You have a bunch of different commands available, take a closer look in `package.json`.

To start compiling and watching for changes in CSS and JavaScript, and start browserstack and the webpack dev server, run:
`$ yarn run dev`.

## Laravel Mix
This setup uses Laravel Mix as build tool.

### Process CSS URLs
Make sure your setup does not process CSS urls, that will cause you problems.

## Questions?
Give [Henrik Larsson](mailto:henrik@kodamera.se) a shout!
