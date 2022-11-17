/**
 * This will list down all the changed files in the current PR.
 * Changed, Added and Deleted files will be listed.
*/


  (() => {

    const modifiedFiles = danger.git.modified_files;
    const addedFiles = danger.git.created_files;
    const deletedFiles = danger.git.deleted_files;

    const filesList = [...modifiedFiles, ...addedFiles, ...deletedFiles];

    if (modifiedFiles.length > 0) {
      message(':arrows_counterclockwise: Changed Files in this PR: \n - ' + modifiedFiles.join('\n - '));
    }
    if (addedFiles.length > 0) {
      message(':heavy_plus_sign: Added Files in this PR: \n - ' + addedFiles.join('\n - '));
    }
    if (deletedFiles.length > 0) {
      message(':heavy_minus_sign: Deleted Files in this PR: \n - ' + deletedFiles.join('\n - '));
    }

  })();