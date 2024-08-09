import { useState } from "react";
import { View } from "react-native";
import List from "./List";
import Search from "./Search";

const QuantumList=()=>{
  const [searchText,setSearchText] = useState("");
  const handleSearch=(text)=>{
   
     setSearchText(text);
  }
  return(
    <View >
        <Search onSearch={handleSearch} />
        <List searchTerm = {searchText} />
    </View>
  )
}
export default QuantumList;