const alexa = require('alexa-app');
const app = new alexa.app('nodejs-flashcards', 'my-app');

app.pre((req, res, type) => {
  // query db for user data / set-up new session?
});

app.post((req, res, type, exception) => {

  // error handling
  if (expection) {
    res.clear().say(`An error has occurred: ${exception}.`).send();
  }
});

app.launch = ((req, res) => {
  // res.linkAccount();
  const loginPrompt = 'Would you like to load your Node Flashcards account?';
  // const continuePrompt = 'Would you like to continue without loading your account?'
  res.say(loginPrompt).reprompt(loginPrompt).shouldEndSession(false);
  const session = req.getSession();
  // query db for user data
  // session.set('user', data.user)
  // assemble flashcard data into linkedlist format and store on session
  // session.set('flashcards', data.flashcards)
  // session.set('correctAnswers', new LinkedList())
  // session.set('wrongAnswers', new LinkedList())
  // grab first question from flashcards and ask
});

app.intent('AnswerIntent', {
  'slots': {'BOOLEAN': 'LITERAL'},
  'utterances': ['{true|false|BOOLEAN}'],
  function(req, res) {
    const AnswerIntent = req.slot('BOOLEAN');
    const session = req.getSession();
    const flashcards = session.get('flashcards');
    const correctAnswers = session.get('correctAnswers');
    const wrongAnswers = session.get('wrongAnswers');
    if (AnswerIntent !== 'true' || AnswerIntent !== 'false') {
      res.say('Sorry, I didn\'t hear an answer.');
      res.reprompt('Please respond with true or false.');
    }
    else {
      if (AnswerIntent === 'true') {

        // add flashcard to correctAnswers
        session.set('correctAnswers', correctAnswers);
      }
      else if (AnswerIntent === 'false') {

        // add flashcard to wrongAnswers
        session.set('wrongAnswers', wrongAnswers);
      }
    }

    // remove question from flashcards
    session.set('flashcards', flashcards);
    res.shouldEndSession(false);
  },
});

app.sessionEnded((req, res) => {

  // merge correctAnswers and wrongAnswers and store in db
  logout(req.userId);
});

module.exports = app;
