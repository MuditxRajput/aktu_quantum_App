import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, ScrollView } from 'react-native';
import Footer from './Components/Footer';
import Header from "./Components/Header";
import Hero from './Components/Hero';
import Info from './Components/Info';
import Middle from './Components/Middle';
import NotesScreen from './Components/NotesScreen';
import PaperScreen from './Components/PaperScreen';
import QuantumList from './Components/QuatumList';
import DownloadPage from './Components/DownloadPage';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Quantum" component={QuantumList} />
        <Stack.Screen name="Notes" component={NotesScreen} />
        <Stack.Screen name="Papers" component={PaperScreen} />
        <Stack.Screen name="Download" component={DownloadPage}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = () => {
  return (
    <ScrollView>

    
    <SafeAreaView>
      <Header />
      <Hero />
      <Middle />
      <Info />
      <Footer />
    </SafeAreaView>
    </ScrollView>
  );
};