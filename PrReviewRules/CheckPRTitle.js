/* eslint-disable no-undef */

const PrTitleHasFRTicket = () => {
    const PRtitle = danger.github.pr.title; 
    if(!PRtitle.startsWith('[MP-')) {
      return false;
    }
    return true;
  }

  (() => {
    if(!PrTitleHasFRTicket()) {
      const message = ':worried: Hmm.. It seems you missed to add Freshrelease ticket ID in <b>PR title</b>';
      const idea = 'Please add Freshrelease ticket ID in the title to check the PR in future.'
      warn(`${message} - <i>${idea}</i>`);
    }
  })();
