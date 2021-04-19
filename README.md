<h1>
  Feedback.io
  <img src="assets/favicon.svg" width="50"/>
</h1>

##### Application hosted at _[heroku](https://www.heroku.com/)_.

##### API url: _https://api-feedbackio.herokuapp.com_.

###### An API built with

<p>
  <img src="https://cdn.svgporn.com/logos/typescript-icon.svg" alt="typescript" width="30" height="30"/>
  <img src="https://cdn.svgporn.com/logos/nodejs-icon.svg" alt="nodejs" width="30" height="30"/>
  <img src="https://cdn.svgporn.com/logos/graphql.svg" alt="graphql" width="30" height="30"/>
  <img src="https://cdn.svgporn.com/logos/socket.io.svg" alt="socket.io" width="30" height="30"/>
  <img src="https://cdn.svgporn.com/logos/docker-icon.svg" alt="docker" width="30" height="30"/>
  <img src="https://cdn.svgporn.com/logos/postgresql.svg" alt="postgresql" width="30" height="30"/>
  <img src="https://cdn.svgporn.com/logos/eslint.svg" alt="eslint" width="30" height="30"/>
  <img src="https://cdn.svgporn.com/logos/jest.svg" alt="jest" height="30">
</p>

## About Feedback.io 📚

[Feedback.io](https://github.com/gabriellopes00/feedbackio-api/) was create to offer a complete platform for everyone seeing have a better control over their services, and their customers opinion about them. Here you can register yourself on the platform and create services, which will be able to receive feedbacks and rates from your customers. This will allow you calculate your services NPS and know how your customer are evaluating your services. A complete API is being built with this purpose. This is a open source application, which is begin built using Nodejs, including a lot of other concepts and new technologies such as Typescript, SOLID principles, Clean Architecture, DDD, TDD, Docker, PostgreSQL...

## Api Structure

![clean-architecture](https://github.com/gabriellopes00/feedbackio-api/blob/main/.github/assets/clean-architecture.jpg)

This project structure is inspired in clean architecture code structure, [by Uncle Bob](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html). The main purpose of clean architecture is creating a strong project structure, splitting all the application in layers. The best advantages of using it, is create a application independent of any frameworks, tool, database or technology, being easy to handle the code, create a new features, fix any issue, or change some framework, thanks to the adapters and ports.

#### Folders 🗂

```
root
├── .github                 - Github setup files
│     └── assets
|     └── workflow
├── assets                  - Project assets (images, logos...)
├── src                     - Application main code
│    │── app                - Composition layer, entry point code
│    ├── config             - Some global config files (.env, path alias, logger)
│    ├── domain             - Business rules definition
│    │     └── entities
│    │     └── usecases
│    ├── infra              - External frameworks and libs implementation
│    └── useCases           - Usecases implementation
└─── tests                  - Components tests
      └── e2e
      └── unit
```

<!-- ###### src code

`src` folder contain all code of the application, and it is subdivided in layers. **_App_** folder, contain the main code of the application, here is mounted the server, and instantiated the entities and usecases. **_config_** folder, contain some global configuration files, such as logger setup, typescript path aliases setup, .env setup... In **_domain_** folder, following DDD, this domain folder contain all business rules of the application, here is only **defined** the entities and the usecases. **_usecases_** layer contain the usecases implementation, this layer will comunicante the application with external libraries and frameworks. And finally, **_infra_** folder, contain all the external libs implementation, all code which involve external tools must be inside here. -->

## Building and contributing 🛠

To run this project locally, you will have to install Nodejs and PostgreSQL on the machine, or run everything with Docker. After run the project, go to **_.env.example_** file, on project root, and rename it to **_.env_**, filling all the properties in the file with your information.

###### Cloning Repository

```git
git clone https://github.com/gabriellopes00/feedbackio-api.git
or
git clone git@github.com:gabriellopes00/feedbackio-api.git
```

###### Running with Docker

```docker
docker-compose up
```

###### Running locally

```bash
npm install
npm run build
npm run start
```

###### Tests (jest) 🧪

- _**All**_ ❯ `yarn test`
- _**Coverage**_ ❯ `yarn test:ci`
- _**Unit**(.spec)_ ❯ `yarn test:unit`
- _**e2e**(.test)_ ❯ `yarn test:e2e`

###### Linting (eslint and prettier) 🎭

- _**Lint**(eslint)_ ❯ `yarn lint`
- _**Style**(prettier)_ ❯ `yarn style`

###### Statistics of the types of commits 📊📈

Following the standard of the [Conventional Commits](https://www.conventionalcommits.org/).

- _**feature** commits(amount)_ ❯ `git shortlog -s --grep feat`
- _**test** commits(amount)_ ❯ `git shortlog -s --grep test`
- _**refactor** commits(amount)_ ❯ `git shortlog -s --grep refactor`
- _**chore** commits(amount)_ ❯ `git shortlog -s --grep chore`
- _**docs** commits(amount)_ ❯ `git shortlog -s --grep docs`
- _**build** commits(amount)_ ❯ `git shortlog -s --grep build`

## License ✒

This project uses [Apache 2](https://github.com/gabriellopes00/feedbackio-api/blob/main/LICENSE.md) license, read to know more about permissions and copyright.

## Contact 📱

[![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=https://github.com/gabriellopes00)](https://github.com/gabriellopes00)
[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/gabriel-lopes-6625631b0/)](https://www.linkedin.com/in/gabriel-lopes-6625631b0/)
[![Twitter Badge](https://img.shields.io/badge/-Twitter-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/_gabrielllopes_)](https://twitter.com/_gabrielllopes_)
[![Gmail Badge](https://img.shields.io/badge/-Gmail-D14836?&style=flat-square&logo=Gmail&logoColor=white&link=mailto:gabrielluislopes00@gmail.com)](mailto:gabrielluislopes00@gmail.com)
[![Facebook Badge](https://img.shields.io/badge/facebook-%231877F2.svg?&style=flat-square&logo=facebook&logoColor=white)](https://www.facebook.com/profile.php?id=100034920821684)
[![Instagram Badge](https://img.shields.io/badge/instagram-%23E4405F.svg?&style=flat-square&logo=instagram&logoColor=white)](https://www.instagram.com/_.gabriellopes/?hl=pt-br)
[![StackOverflow Badge](https://img.shields.io/badge/stack%20overflow-FE7A16?logo=stack-overflow&logoColor=white&style=flat-square)](https://stackoverflow.com/users/14099025/gabriel-lopes?tab=profile)
