import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
const Search = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const handleSearch=()=>{
 
    onSearch(search);
  }
  return (
    <View className="flex gap-2 flex-row mt-5 justify-center items-center ">
      <View>
        <TextInput
          onChangeText={setSearch}
          value={search}
          className="border-2 w-[250px] border-black px-2 py-1 rounded-lg"
          placeholder="Enter Quantum name"
        ></TextInput>
      </View>
      <View>
        <TouchableOpacity onPress={handleSearch} className="bg-orange-500 px-2 py-1 rounded-lg">
          <Text className="text-lg text-white font-semibold">Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Search;
