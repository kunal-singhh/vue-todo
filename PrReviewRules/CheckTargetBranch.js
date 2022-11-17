/* eslint-disable no-undef */

(() => {

    const targetBranch = danger.github.pr.base.ref

    if (targetBranch !== 'main') {
      const message = `This PR targets \`${targetBranch}\``;
      const idea = 'It is likely that the target branch should be `main`';
      warn(`${message} - <i>${idea}</i>`)
    }

  })();
