Definition of Done

Please note: We will have to manually delete branches as we go.

For every submission to the codebase, check the following:

 Code fulfils the user story and scenarios set out in the github task and UI prototype.
 The feature has been thoroughly manually tested. (Ask other devs to give some fresh eyes on this as you go.)
 All tests run and passed from terminal. Any broken tests fixed, not disabled or skipped.
npm test

 Tests added or updated where appropriate. (Be pragmatic about adding new tests, think; how critical is this module or function? If this function broke due to changes, how would it affect the user experience?)
 eslint run and passes. Any issues fixed.
npm run lint

 Code is well formatted
npm run format

 Typescript compiles code with no type errors
npm run typecheck

 PR created in Github.
You will get a peer review from one of the teachers. After all the peer review comments are addressed, the branch is merged to main!