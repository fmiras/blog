---
title: Decentraland + Now 2.0
publish_date: 2019-06-07
---

We’re glad to announce that with the latest CLI release we introduce the dcl export command and with this the full support of Now 2.0

How does dcl export work?#
Before this latest version of the CLI, some of you may remember that the only way to share Decentraland scenes was by using either Docker containers or servers through running dcl start --ci, both of which had to disable some features in order to make everything work on standard linux servers. However, now you can export your scene to static HTML, CSS, and JS files which allows you to upload and serve your scene as serverless static content through providers like GitHub Pages, Amazon S3, or ZEIT Now. These services are often free thanks to how affordable it is to host static files.

Many Decentraland users are familiar with the Now 1.0 platform (which supports Docker) to share their experiences, but why should we use Docker? We need to be able to run the dcl command in the context of a Now server in order to build the project. That’s why we used to provide a Dockerfile in project samples in the past. This was very inefficient and still displayed unsightly developer stats such as FPS, PING, etc. With the new command we have disabled these features to provide a cleaner way for you to upload your scenes to your own providers or servers.

The ZEIT Now 2.0 role#
As of today, the Now platform provides a completely serverless experience, where developers don’t have to worry about anything other than their product. We wanted to bring that same experience to Decentraland developers.

How do I deploy my Decentraland Scene to Now 2.0?#
Below are the detailed steps you need to follow, from creating a scene to deploying a preview to Now 2.0.

First, install the latest Decentraland SDK and Now CLI:

npm i -g decentraland now

Then, create a folder and a new scene:

mkdir my-scene
cd my-scene
dcl init
npm run build

Run the export command which will give us the static website files we need:

dcl export # using `dcl help export` you can find more options

Navigate to the exported folder (this will be named “export” by default if not specified via a flag), and the run now command:

cd export
now

Optionally, you can alias your deployment with now.sh domain, or any domain you have registered at Now. In our case we’re going to alias it to a decentraland.now.sh domain:

now alias {deploymentId} decentraland.now.sh

We’re now running an initial preview scene at decentraland.now.sh. Try it for yourself!

Prepare already existing scenes to support the export subcommand#
We’ve made some adjustments to the dcl init boilerplate to allow users deploy to Now, if you want to use already existing scenes, you’ll have to make these adjustments by yourself:

Update the SDK by running:

npm i decentraland-ecs

Edit the .dclignore file (which is also used for both the dcl deploy and dcl export commands to only use production-ready assets). Just replace the content of the file with:

.*
package.json
package-lock.json
yarn-lock.json
build.json
tsconfig.json
tslint.json
node_modules
*.ts
*.tsx
dist
Dockerfile

Your scene is now ready for exporting to Now 2.0! We’re ready to follow the steps of the previous section:

npm run build && dcl export && cd export && now

If you have any questions or problems, feel free to reach out to me (@fmiras) on Decentraland’s Discord in any of the SDK or developer channels!

