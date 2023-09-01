import React from 'react';
import { StyleSheet,
} from 'react-native';
import {WebView} from 'react-native-webview';

const VoltWebView = () => {
  return (
    <WebView
      source={{uri: 'https://test.staging.voltmoney.in/?ref=TATAREF'}}
      style={{flex: 1, width: '100%', height: '100%'}}
      domStorageEnabled={true}
      useWebKit={true}
    />
  );
};

export default VoltWebView;
