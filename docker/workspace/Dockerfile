FROM ubuntu:18.10

MAINTAINER Walter Galvao <walterbgneto@gmail.com>

SHELL [ "/bin/bash", "-l", "-c" ]

# Update Package Sources
RUN apt-get update

# Copy SDK
COPY jdk-8u221-linux-x64.tar.gz /opt/jdk-8u221-linux-x64.tar.gz

RUN \
apt-get update && \
apt-get install -y software-properties-common && \
apt-get install -y lib32stdc++6 lib32z1

RUN mkdir /opt/jdk
RUN tar -zxf /opt/jdk-8u221-linux-x64.tar.gz -C /opt/jdk
RUN update-alternatives --install /usr/bin/java java /opt/jdk/jdk1.8.0_221/bin/java 100
RUN update-alternatives --install /usr/bin/javac javac /opt/jdk/jdk1.8.0_221/bin/javac 100

# Install Node
RUN apt-get install -y curl git make
RUN curl --silent -o- https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
ENV NVM_DIR=/root/.nvm
RUN . /root/.nvm/nvm.sh && nvm install 10 && nvm use 10

# Define commonly used JAVA_HOME variable
ENV JAVA_HOME /usr/lib/jvm/default-java

# download and extract android sdk
RUN curl http://dl.google.com/android/android-sdk_r24.2-linux.tgz | tar xz -C /usr/local/
ENV ANDROID_HOME /usr/local/android-sdk-linux
ENV PATH $PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
RUN /usr/local/android-sdk-linux/tools/android update sdk --no-ui

# Install Android SDK & Gradle
RUN apt-get install -y gradle

# Install Cordova
RUN . /root/.nvm/nvm.sh && npm i -g cordova && npm i -g @quasar/cli

# Create working dir
RUN mkdir /var/www
WORKDIR /var/www
