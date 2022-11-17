const bigPRThreshold = 700;
const irrelevantFiles = [
  'yarn.lock'
];

(async () => {

  let excludedLines = 0;
  for(const file of irrelevantFiles) {
    excludedLines += await danger.git.linesOfCode(file);
  }

  const addedLines  = danger.github.pr.additions;
  const deletedLines = danger.github.pr.deletions;
  const totalChanges = addedLines + deletedLines - excludedLines;

  if (totalChanges > bigPRThreshold) {
    warn(`:exclamation: Big PR (${totalChanges} Changes)`);
    markdown('> Pull Request size seems relatively large. If Pull Request contains multiple changes, split each into separate PR will helps to review quickly by the developers');
  } else {
    message(`Total No of changed lines after ignoring yarn.lock - ${totalChanges}`);
  }
})();