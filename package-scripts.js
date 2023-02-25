module.exports = {
    scripts: {
      executeTest: {
        IrisTest:
          'cypress run --spec "cypress/e2e/1/todo.cy.js" --browser chrome --headless',
      },
  };
