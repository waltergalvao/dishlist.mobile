# DishList

You need Docker to run this application.

--- 

#### First Time Usage

1: Set the environment variable `ANDROID_HOME` on your local machine. It should point to your Android SDK directory. You can install Android SDKs on your machine with Android Studio. You need to install SDK for Android 8.1 (Oreo).

2: Run `docker-compose up -d` in the project root directory. Wait for the containers to be built.

3: Run `docker exec -ti dishlist_workspace bash` to enter the container.

4: Run `npm install` to install the packages

5: Duplicate `.env.example`, renaming it to `.env`. You can change the configuration if needed.

---

#### Running the application

1: Inside the container, run `quasar dev` to start the application. You'll be able to access the application in the address: `http://localhost`

#### Building Android App

1: Inside the container, run `quasar build -m cordova -T android`
2: Go to the generated .apk folder and run `jarsigner -verbose -siga
lg SHA1withRSA -digestalg SHA1 -keystore ~/.android/debug.keystore app-release-unsigned.apk androiddebugkey -storepass android
` - this is for Ubuntu, may not work for other platforms. Google how to self-sign android apk.

#### Testing Cordova on Browser

1: Inside the container, run `quasar dev -m cordova -T browser`
