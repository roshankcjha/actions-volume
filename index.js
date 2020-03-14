const core = require('@actions/core');
const github = require('@actions/github');

try {

  const radius = core.getInput('radius');
  let vol = (4*3.14*radius*radius*radius)/3;
  console.log(`The volume of the cone is ${vol}!`);
  core.setOutput("Volume", vol);

  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
