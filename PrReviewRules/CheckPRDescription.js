/* eslint-disable no-undef */


const checkSourceFiles = (files) => {
    return files.some((file) => {
      return /(components)/g.test(file);
    })
  }

  (() => {
    const addedFiles = danger.git.created_files;
    const modifiedFiles = danger.git.modified_files;

    let fileList = [...addedFiles, ...modifiedFiles];
    const hasSourceFiles = checkSourceFiles(fileList);

    if(hasSourceFiles) {
      const message = `It seems you have made some changes/added in <b>vue component</b>`;
      const idea = 'If possible you can explain your intentions and show off screenshots/diagram for your change';
      warn(`${message} - <i>${idea}</i>`)
    }
  })();
