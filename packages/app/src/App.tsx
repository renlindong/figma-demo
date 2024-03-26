import React from "react";
import { getPreviewUrl } from "snack";

export default function App() {
  return (
    <button
      onClick={async () => {
        const url = await getPreviewUrl({
          files: {
            "App.js": {
              type: "CODE",
              contents: `
    import * as React from 'react';
    import { View, Text } from 'react-native';
    
    export default () => (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{fontSize: 20, textAlign: 'center'}}>
          Hello Snack!
        </Text>
      </View>
    );
    `,
            },
          },
        });
        console.log("预览地址", url);
      }}
    >
      测试snack
    </button>
  );
}
