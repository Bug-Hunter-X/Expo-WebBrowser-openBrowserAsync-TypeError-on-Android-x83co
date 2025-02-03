import * as WebBrowser from 'expo-web-browser';

async function handlePress() {
  let result = await WebBrowser.openBrowserAsync('https://example.com');
  console.log({result});
}

//The above code might work fine on iOS but it might fail on Android, returning a 'TypeError: undefined is not an object (evaluating 'WebBrowser.openBrowserAsync')'
//The reason of the error might be a missing or wrongly configured config file for Android.
