# Expo WebBrowser.openBrowserAsync TypeError on Android
This repository demonstrates a bug and its solution related to Expo's WebBrowser API on Android. The issue involves a TypeError when using `WebBrowser.openBrowserAsync` which might happen because of the missing or wrongly configured config file for Android.

## Bug
The bug can be reproduced with a simple implementation of the WebBrowser API in an Expo application.  The code might work correctly on iOS but fails on Android returning the following error message:

`TypeError: undefined is not an object (evaluating 'WebBrowser.openBrowserAsync')`

## Solution
The solution involves ensuring the correct configuration of the Android project, specifically, adding the necessary AndroidManifest.xml configuration.  This allows Expo to correctly integrate the WebBrowser functionality on Android devices.
