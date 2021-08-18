# rnb

React Native Boilerplate (RNB) based on TS react-native cli default boilerplate with a few additions.


## Comes with

- TypeScript 
- Atomic Design structure 
- Splash Screen.
- Test file example
- GitHub workflow yml file for CI automated build
- Script for renaming project title
- Configured Lint


## Scripts

There are a few bash scripts inside `/scripts` directory. 
To use any one of them, you need to first set them as executable with `chmod +x <script_file_name>`
E.g.: `chmod +x scripts/rename_project_title.sh`, if you are in the project root, to set `rename_project_title.sh` script file as executable

*Ps.: The scripts were only tested on Arch Linux, but since they are simple bash scripts, they should probably work on other linux distros, but less likely on other Operational Systems.*


### rename_project_title.sh

Usage: `./scripts/rename_project_title.sh <current_project_title> <new_project_title>`

This script will rename your project title in different files to reflect on your project and app. These files paths can be found in the script file under "*Changes directories and files names*" section.
It accepts two arguments, being the:
- Arg 1: The old (current) project name
- Arg 2: The new project name

If you only provide one argument, the old or current project name will be assumed to be 'RNBoilerplate', since it's the default name of the project when you clone this repository.

E.g.: `./scripts/rename_project_title.sh RNBoilerplate AwesomeRNProject`

### clean_up.sh

Usage: `./scripts/clean_up.sh`

This script will remove this 'README.md' file and '.git' hidden folder.
