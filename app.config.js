import 'dotenv/config';

export default {
    "expo": {
      "name": "RNCourse",
      "slug": "RNCourse",
      "version": "1.0.0",
      "orientation": "portrait",
      "icon": "./assets/icon.png",
      "splash": {
        "image": "./assets/splash.png",
        "resizeMode": "contain",
        "backgroundColor": "#ffffff"
      },
      "updates": {
        "fallbackToCacheTimeout": 0
      },
      "assetBundlePatterns": ["**/*"],
      "ios": {
        "supportsTablet": true
      },
      "android": {
        "adaptiveIcon": {
          "foregroundImage": "./assets/adaptive-icon.png",
          "backgroundColor": "#FFFFFF"
        }
      },
      "web": {
        "favicon": "./assets/favicon.png"
      },
      "plugins": [
        [
          "expo-image-picker",
          {
            "cameraPermission": "The app needs access to your camera in order to take photos of your favorite places.",
            "photosPermission": "The app accesses your photos to let you share them with your friends."
          }
        ]
      ],
      extra: {
        API_KEY: process.env.API_KEY,
      }
    }
  }