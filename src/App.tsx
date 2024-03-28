import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, View, Button} from 'react-native';

const App = () => {
  const [helloFlag, setHelloFlag] = useState(true);

  const updateFlag = () => {
    setHelloFlag(!helloFlag);
  };

  return (
    <SafeAreaView>
      <Text>Hello Lifecycle</Text>
      <Button title="Up!" onPress={updateFlag} />
      {helloFlag && <Hello />}
    </SafeAreaView>
  );
};

const Hello = () => {
  useEffect(() => {
    console.log('Hello');

    return () => {
      console.log('Goodbye');
    };
  }, []);

  return (
    <View style={{backgroundColor: 'aqua', padding: 10}}>
      <Text>I'm Hello Component</Text>
    </View>
  );
};

export default App;
