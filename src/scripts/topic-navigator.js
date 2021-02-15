const inquirer = require('inquirer');
const cp = require('child_process');

inquirer.prompt([
  {
    type: 'list',
    message: 'choose the topic',
    name: 'navigateTo',
    choices: [
      { name: '1. useState and Co-location', value: 'useState' },
      { name: '2. useState and Callbacks', value: 'useState-and-callbacks' },
      { name: '3. state lifting', value: 'state-lifting' },
      { name: '4. useContext', value: 'useContext' },
      { name: '6. exit', value: 'exit' },
    ],
  },
]).then(({ navigateTo }) => {
  switch (navigateTo) {
    case 'exit':
      cp.execSync(`git stash && git checkout main`);
      // eslint-disable-next-line no-console
      console.log('adios amigo ... :)');
      // process.exit(0);
      break;
    default:
      cp.execSync(`git stash && git checkout ${navigateTo}`);
  }
});
