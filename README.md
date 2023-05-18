# account-switcher

Chrome Extension for Switching Google Account in Web Apps

## What's new?

- 📦 NEW: Support for Google meet

## How to use?

Since this is a fork you will have to custom load it. To load the custom extension in Chrome, please follow these steps:

- Download the latest release of the extension in zip format from the releases page of the repository.
- Unzip the downloaded file to extract its contents.
Open the Chrome browser and navigate to the "Manage Extensions" page. You can access this page by clicking on the three-dot menu icon in the - top right corner of the browser window and selecting "More Tools" > "Extensions."
Enable developer mode by toggling the switch located in the top right corner of the "Manage Extensions" page. This allows you to load - unpacked extensions.
After enabling developer mode, you will see a new button labeled "Load Unpacked" appear at the top left corner of the page. Click on this - button.
- A file selection dialog will open. Navigate to the folder that you extracted from the downloaded zip file in step 2, and select it.
- Once you've selected the folder, click on the "Open" button to load the custom extension.
- The extension will now be loaded and activated in Chrome. You should see its icon appear in the Chrome toolbar or extension area.
You can customize the extension's settings, such as the shortcut key, by visiting the following URL in the Chrome browser: chrome://- extensions/shortcuts. Change the desired shortcut key according to your preference.

That's it! You have successfully loaded the custom extension in Chrome. Now you can use the extension to switch between multiple Google accounts seamlessly while using various Google apps.

---

## Archived Readme from the fork of `sidehustlelab/account-switcher`

#### Download and install from the [Chrome Store](https://chrome.google.com/webstore/detail/google-app-account-switch/gkdjdghoaaooagapfhmjgnagiigocjob/related?) | [Firefox Store](https://addons.mozilla.org/en-GB/firefox/addon/account-switcher-google-apps/)

### What does the extension do ?
This extension is for people using multiple Google accounts in their browser.
It often becomes a hassle switching between the different accounts for various Google apps like Gmail, Google Docs, Google Play Music, Google Drive etc.
This extension gives you the ability to switch across accounts seamlessly using keyboard shortcuts in Chrome.

So google gives logged in accounts numbers: 0, 1, 2...
![image](https://user-images.githubusercontent.com/36476228/79776588-9b584900-8353-11ea-9ddb-ec6aa25fa018.png)

So the extension makes use of that numbering.

To switch to say account number 2, you have to press `Alt + 2` once you have already opened any of the supported google apps mentioned above.

Say you have gmail account 0 open, you can press `Alt+2` to open the gmail account associated with account 2.

### To Setup manually

1. Download the latest release in zip format from the [releases page](https://github.com/anshulahuja98/account-switcher/releases) of the repo.
1. Open `Manage Extensions` page in chrome settings.
1. Turn on developer mode on top right corner
1. Unzip the downloaded file
1. Select the option "Load Unpacked" and select the unzipped folder that you got.


### Customization

You can change the shortcut key from default `Alt + <num>` to any preferred shortcut key. Change them on chrome://extensions/shortcuts
