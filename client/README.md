# CDM Launch

[![made-with-angular](https://img.shields.io/badge/Made%20with-Angular-blue.svg)](https://angular.io/) [![made-with-nw.js](https://img.shields.io/badge/Made%20with-NW.js-blue.svg)](https://www.python.org/)

CDM Lauch is a Windows shell replacement to allow users to install and launch Steam, Uplay, Origin, GOG, Battle.net, LOL games. It allows all domain users to have administrative access to a machine, but it locks down access to specific applications. 

## Packaging

Package all CDMLaunch files into a zip file and rename it as `package.nw`. Move the zipp file into the same folder as NW.js binaries. Run the following command to generate an executable package:
```sh
copy /b nw.exe+package.nw app.exe
```

## Required Windows Group Policies
The following group policy changes must be configured to prevent a user from escaping the shell
- TODO

## Todo
 - Utilize [Windows 10 Shell Launcher](https://docs.microsoft.com/en-us/windows-hardware/customize/enterprise/shell-launcher) feature