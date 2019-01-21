# Game Launch Shell

[![made-with-angular](https://img.shields.io/badge/Made%20with-Angular-blue.svg)](https://angular.io/) [![made-with-nw.js](https://img.shields.io/badge/Made%20with-NW.js-blue.svg)](https://nwjs.io/)

![GameLaunch Shell screenshot](https://i.imgur.com/HRxzMga.jpg)

Game Launch is a Windows shell replacement which allows users to install and launch Steam, Uplay, Origin, GOG, Battle.net, LOL games. It allows all domain users to have administrative access to a machine, but it locks down access to specific applications exposed by the shell. 

## Testing and Packaging

In order to quickly test changes on Windows, the easiest way to run the app is to drag the folder onto ```nw.exe```, or a shortcut to ```nw.exe```. Remember to drag the folder containing ```package.json```, and not ```package.json``` itself.

Package all Game Launch files into a zip file and rename it as `package.nw`. Move the zip file into the same folder as NW.js binaries. Run the following command to generate an executable package:
```sh
copy /b nw.exe+package.nw gamelaunch.exe
```

## Required Windows Group Policies
The following group policy changes must be configured to prevent a user from escaping the shell
- ```User Configuration/Administrative Templates/System/Ctrl+Alt+Del Options/Remove Change Password``` must be **Enabled**
- ```User Configuration/Administrative Templates/System/Ctrl+Alt+Del Options/Remove Lock Computer``` must be **Enabled**
- ```User Configuration/Administrative Templates/System/Ctrl+Alt+Del Options/Remove Task Manager``` must be **Enabled**
-  ```User Configuration/Administrative Templates/Windows Components/File Explorer/Prevent access to drives from my computer``` must be **Enabled**
-  ```User Configuration/Administrative Templates/Windows Components/File Explorer/Remove File Explorer's default context menu``` must be **Enabled**

## Installation
1. Copy gamelaunch.exe to the System32 folder.
2. Locate and modify the shell registry key  ```HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Policies\System``` to match ```C:\Windows\System32\gamelaunch.exe```

## Features Todo
 - Utilize [Windows 10 Shell Launcher](https://docs.microsoft.com/en-us/windows-hardware/customize/enterprise/shell-launcher) feature instead of modifying reg key
