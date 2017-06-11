# albatros-club-de-plage

## Install Git
On MacOs, install XCode from Appstore. Then execute
```
sudo xcodebuild -license
xcode-select --install
```

## Install Nodejs
Download [here](https://nodejs.org/en/).

### Install Yarn (in global)
(sudo) npm install --global yarn

### Clone from Git
```
git clone git@github.com:kevin-lot/albatros-club-de-plage.git
```

If you have some authentication issues. Check this github [page](https://help.github.com/articles/connecting-to-github-with-ssh/) to add credential keys.

### Start the project
cd albatros-club-de-plage
yarn install
yarn start

### Install and initialize Gcloud
[https://cloud.google.com/sdk/docs/quickstarts](https://cloud.google.com/sdk/docs/quickstarts)
Don't enable API compute-component.googleapis.com.

### Build the project
yarn run build

### Deployment into Gcloud
gcloud app deploy app.yaml --project=albatros-kevinlot-me --version=2
