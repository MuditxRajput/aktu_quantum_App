import { useNavigation } from "@react-navigation/native";
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import pdf from '../assets/pdf.png';
import quantum from "../utils/quantum";

const List = ({searchTerm=""}) => {
   const navigation = useNavigation();
    
    const filteredQuantum =  quantum.filter((val)=>val.name.toLowerCase().includes(searchTerm.toLowerCase()))
  const renderItem = ({ item }) => (
    <View className="p-1">
      <TouchableOpacity onPress={()=>navigation.navigate("Download",{src:item.src})} className="border-2 border-gray-300 bg-white w-[150px] h-[300px] flex items-center rounded-xl shadow-lg">
        <View className="mt-2 flex justify-center items-center">
          <Image source={pdf} className="w-[110px] h-[160px] rounded-lg" />
        </View>
        <View className="mt-2 p-2">
          <Text className="text-md font-semibold text-center text-gray-700">{item.name}</Text>
          <Text className="text-md font-semibold text-center text-gray-700"> Year : {item.year}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView>
             <View className=" p-4 mb-20">
      <FlatList
        data={filteredQuantum}
        renderItem={renderItem}
        keyExtractor={(item) => item.src}
        numColumns={2}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </View>
    </SafeAreaView>
   
  );
};

export default List;
