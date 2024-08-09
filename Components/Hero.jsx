import React from 'react';
import { Image, Text, View } from 'react-native';
import heroImage from '../assets/Hero.jpg';

const Hero = () => {
  return (
    <View className="mt-10">
      <View className="flex items-center">
        <Text className="text-3xl font-semibold">
          Free <Text className="text-orange-600">Aktu Quantum</Text>
        </Text>
        <Text className="text-3xl font-semibold">Study Guides</Text>
        <Text className="text-3xl font-semibold">Ace your exams</Text>
        <Text className="text-3xl font-semibold">In last minutes</Text>
      </View>
      <View className="px-7 mt-1">
        <Text className="text-slate-500">
          Drive into Aktu quantum pdf with our app, offering free aktu quantum pdfs. Explore comprehensive resources for free quantum pdfs. Get your aktu quantum solutions hassle-free! Get all year AKTU quantum pdf download.
        </Text>
      </View>
      <View className=" px-10 mt-5 flex justify-center items-center">
        <Image 
          source={heroImage}
          style={{ width: 224, height: 150, resizeMode: 'contain' }} // Adjust width and height as needed
        />
      </View>
    </View>
  );
};

export default Hero;
