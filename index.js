#!/usr/bin/env node

const cp = require("child_process");
const cron = require("node-cron");
const notifier = require("node-notifier");

const command = process.argv[2];
const argsArr = process.argv.slice(3);

switch (command) {
  case "run":
    let cSchedule = argsArr[0];
    cron.schedule(
      cSchedule,
      () => {
        let cJobName = argsArr[1];
        let cJobAction = cp.fork(argsArr[2]);
        cJobAction.on("message", (msg) => {
          notifier.notify({
            title: cJobName,
            message: msg,
            appID: "Node Cron Notifier Service",
          });
        });
        cJobAction.on("exit", () => {
          if (cJobAction.exitCode !== 0) {
            console.log('Error Occured in Cron job!')
            process.exit(1);
          }
        });
      });
    break;
  default:
    console.log(`Usage: node-cron-notifier run <crontime> <taskname> <absolutejsfilepath>`);
    break;
}
