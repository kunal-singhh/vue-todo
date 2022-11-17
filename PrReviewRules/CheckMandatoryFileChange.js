/* eslint-disable no-undef */

(async () => {

    let hasDependencyChange = false;

    const hasPackageChange = danger.git.modified_files.includes('package.json');
    const hasLockfileChange = danger.git.modified_files.includes('yarn.lock');

    if(hasPackageChange) {
      const packageChanges = await danger.git.JSONDiffForFile('package.json');
      hasDependencyChange = packageChanges.dependencies || packageChanges.devDependencies;
    }

    if(hasDependencyChange && !hasLockfileChange) {
      warn(`:worried: <b>yarn warning!</b> - <i>
      Changes were made to \`package.json\` but not to \`yarn.lock\`.
      Did you forget to do \`yarn install\` before commit?
      </i> 🔒`);
    }

  })();