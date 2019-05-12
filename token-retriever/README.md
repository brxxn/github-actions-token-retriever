# token-retreiver

This is used to retrieve the `GITHUB_TOKEN` value in GitHub Actions.

## Notice

This should **only be used to test vulnerabilites inside GitHub**. Please do not use it in a production environment. Here are a few examples of where you *can* use this:

* In your own private repo that has GitHub Actions
* In a repository that you are authorized to test in and does not contain code used in a production repository

Here are examples of where you can *not* use this:

* In a production environment where you host code that is used.
* A repository where you are not authorized to grab the `GITHUB_TOKEN`.

**Note:** the token is sent to the output log. All users who are able to access the log will have access to your token, so it should not be used in a production environment.

## Someone told me to use this to do something.

Don't. 11/10 times that person wants access to something they shouldn't have. They can have the same permissions they need with a GitHub app.

## Acknowledgements

- [actions-toolkit](https://github.com/JasonEtco/actions-toolkit) by [Jason Etco](https://github.com/JasonEtco)