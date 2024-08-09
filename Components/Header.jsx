import React from 'react';
import { Linking, Text, TouchableOpacity, View } from 'react-native';

const Header = () => {
  // Function to open the Google Form URL
  const openForm = () => {
    const formURL = 'https://forms.gle/6RecfFfitN3b6pCq5';
    Linking.openURL(formURL).catch((err) => console.error("Failed to open URL", err));
  };

  return (
    <View className="flex flex-row justify-between items-center px-5 mt-2">
      <View>
        <Text className="text-2xl text-black font-bold">
          Aktu<Text className="text-orange-600">Quantum</Text>
        </Text>
      </View>
      <TouchableOpacity onPress={openForm}>
        <Text className="text-lg text-orange-600 font-semibold">Form</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
