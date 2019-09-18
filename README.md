# DishList

You need Docker to run this application.

--- 

#### First Time Usage

1: Set the environment variable `ANDROID_HOME` on your local machine. It should point to your Android SDK directory. You can install Android SDKs on your machine with Android Studio. You need to install SDK for Android 8.1 (Oreo).

2: Run `docker-compose up -d` in the project root directory. Wait for the containers to be built.

3: Run `docker exec -ti dishlist_workspace bash` to enter the container.

4: Run `npm install` to install the packages

---

#### Running the application

1: Inside the container, run `quasar dev` to start the application. You'll be able to access the application in the address: `http://localhost`

#### Building Android App

1: Inside the container, enter `src-cordova` directory and run `cordova build android`
