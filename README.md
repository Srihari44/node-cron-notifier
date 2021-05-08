# Node Cron Notifier

- Execute a node script at any cron time and trigger os native notifications for any event in the script
- Combines the functionalities of `node-cron` and `node-notifier`
- This is intended for use in end systems and not in servers.

## Usage

`node-cron-notifier run <crontime> <taskname> <absolutejsfilepath>`

### Notes

1. Cron time - Refer [cron syntax](https://github.com/node-cron/node-cron#cron-syntax)

2. Notification Trigger
   - To denote success use, `process.send(data)`
   - To denote error and exit use, `process.exit(1)`

Only internal node libraries and globally installed packages can be executed. If you use external package in your script, you must install it globally.

### Adding to System startup

Refer this [link](https://stackoverflow.com/questions/31165661/how-to-call-javascript-js-file-in-system-startup#:~:text=To%20run%20a%20batch%20file,drag%20shortcut%20to%20startup%20folder.) for details on how to add node-cron-notifier to system startup.
