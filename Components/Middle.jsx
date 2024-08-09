import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";

const Middle=()=>{
  const navigation = useNavigation();
  return(
    <View className="flex flex-row gap-3 justify-center items-center mt-5">
        <TouchableOpacity onPress={()=> navigation.navigate('Quantum')} className="px-4 py-2 bg-orange-600 rounded-lg "><Text className="text-lg text-white font-semibold">Quantum</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Notes')} className="px-4 py-2 bg-orange-600 rounded-lg "><Text className="text-lg text-white font-semibold">Notes</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Papers")} className="px-4 py-2 bg-orange-600 rounded-lg "><Text className="text-lg text-white font-semibold">Papers</Text></TouchableOpacity>
  
    </View>
  )
}
export default Middle;