module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Add an application component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Named your component:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{dashCase name}}/index.tsx',
        templateFile: 'templates/index.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{dashCase name}}/stories.tsx',
        templateFile: 'templates/stories.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{dashCase name}}/styles.ts',
        templateFile: 'templates/styles.ts.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{dashCase name}}/test.tsx',
        templateFile: 'templates/test.tsx.hbs',
      },
    ],
  });
};
