import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Linking, Text, TouchableOpacity, View } from "react-native";

const DownloadPage = () => {
  const router = useRoute();
  const { src } = router.params; // Google Drive link

  
  const [timer, setTimer] = useState(15);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const time = setInterval(() => setTimer((prev) => prev - 1), 1000);

    if (timer === 0) {
      setShow(true);
      clearInterval(time);
    }

    return () => clearInterval(time);
  }, [timer]);

  const handleDownload = () => {
    if (src) {
      Linking.openURL(src).catch((err) => console.error("Failed to open URL", err));
    }
  };

  return (
    <View className="flex flex-col justify-center items-center mt-10">
      <View>
        <Text className="text-2xl font-semibold">Yours pdf is on the way 🏃‍♂️...</Text>
      </View>
      <View>
        <Text className="text-xl mt-4">Waiting time: {timer} sec</Text>
      </View>
      <View className="mt-6">
        {show ? (
          <TouchableOpacity
            className="bg-orange-600 px-4 py-2 rounded-lg"
            onPress={handleDownload}
          >
            <Text className="text-white text-lg font-semibold">Download..</Text>
          </TouchableOpacity>
        ) : null}
      </View>
      <View className="px-4 mt-7">
        <Text className="font-semibold text-xl">What if I can't get the AKTU Quantum?</Text>
        <Text className="text-slate-700">In the header section, you get the Google form. You need to enter some details like Pdf name, code, Sem, year that's it and click on submit button. Withiin 1 hour we will upload the pdf and you will get the access to that AKTU quantum PDF.</Text>
    </View>
    </View>
  );
};

export default DownloadPage;
