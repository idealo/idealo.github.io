# Landing Page - idealo.github.io

Idealo Organisation Stars ![Idealo Organisation](https://img.shields.io/github/stars/idealo?style=social)

## What this project is all about

This is the landing page for the open source initiative of [idealo.de](https://www.idealo.de/) and provides an overview of idealo’s open source projects.

### Present your project on idealo.github.io

If you want to present your open source project on the landing page, go to **/src/data/projects.js**, copy one of the existing projects within the file and simply alter the project-specific information. Title and project ID should be identical to the name of your GitHub project.

## Release Changes

**Important**: All changes should be made on the **develop** branch! They will then be integrated into the master branch automatically.

1. Build Static Files

```bash
  npm run publish
```

2. Copy content from the folder `static-output` to `master` branch.

## Run Locally

Clone the project

```bash
  git clone https://github.com/idealo/idealo.github.io
```

Go to the project directory

```bash
  cd idealo.github.io
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

#### Docker Version

The [Dockerfile](./Dockerfile) you can use, if you want to move this project to a `non static version`.

### Testing

There are Snaphot Tests available, run those tests using `npm run test`.
Please remember to alter these tests if you’ve modified the structure of the page.

## FAQ

#### Can I add Question here?

Yes for sure, just edit this readme.md and create a pull request!

## Feedback

If you have any feedback, please create a github issue.  
We will respond fast to your request.

## Roadmap

- Add a Login
- Enable automated Process for Releasing OpenSource Projects

## License

[Apache-2.0](https://choosealicense.com/licenses/apache-2.0/)

## Contributing

Send PULL-Requests if you want to contribute your ideas and alterations to the project. Please remember to stick to the common code conventions and make sure that your commit messages are self-explanatory.

See [`contributing.md`](./contributing.md) for ways to get started.

Please use the git-hooks to avoid that you commit unlinted/unformated code.

## Authors

- [@Bogdan Girman](https://github.com/bogdangi)
- [@conrad Kirschner](https://www.github.com/conradkirschner)
- [@Dat Tran](https://github.com/datitran)
- [@Ingo Stoecker](https://github.com/Kobe)
- [@Mike Lesanik](https://github.com/mlesniak)
- [@Marcus Janke](https://github.com/marcus-j)
- [@Peter Jentsch](https://github.com/pjentsch)
- [@Richard Remus](https://github.com/roechi)
- [@Tanuj Jian](https://github.com/tanujjain)

## Thanks

We use/used these Project to make our work easier.  
We are happy for OpenSource and want to thanks to these Projects:

[NextJS](https://github.com/vercel/next.js)
