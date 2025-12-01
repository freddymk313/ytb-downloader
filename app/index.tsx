import React, { useState } from "react";
import { View, Text, Pressable, TextInput, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Info, Link2, Video, Download, Loader2 } from "lucide-react-native";

interface VideoQuality {
  resolution: string;
  size: string;
  selected: boolean;
}

const VideoDownloader = () => {
  const [url, setUrl] = useState("");
  const [videoData, setVideoData] = useState<any>(null);
  const [qualities, setQualities] = useState<VideoQuality[]>([
    { resolution: "144p", size: "1.3 MB", selected: false },
    { resolution: "240p", size: "5.6 MB", selected: false },
    { resolution: "360p", size: "18.2 MB", selected: false },
    { resolution: "480p", size: "39.8 MB", selected: true },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFetchVideo = async () => {
    if (!url.trim()) return;

    setIsLoading(true);

    try {
      // Simule la récupération de données
      const data = {
        id: "abc123",
        title: "Exemple de vidéo",
        author: "Auteur",
        thumbnail: "https://i.ytimg.com/vi/xEN4kQudnOA/hqdefault.jpg",
        thumbnailMedium: "https://i.ytimg.com/vi/xEN4kQudnOA/mqdefault.jpg",
      };
      // Ici, remplacer par ton appel à Supabase
      setVideoData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleQuality = (index: number) => {
    setQualities(qualities.map((q, i) => ({ ...q, selected: i === index })));
  };

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-gray-900">
      <ScrollView className="px-6 py-6">
        {/* Header */}
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center">
            <Image
              source={require("@/assets/images/splash-icon.png")}
              className="w-12 h-12 rounded-full"
              resizeMode="contain"
            />
            <Text className="text-2xl ml-2 font-bold dark:text-white">
              TB Downloader
            </Text>
          </View>
          <Pressable className="p-2">
            <Info size={25} color="hsl(10, 90%, 58%)" />
          </Pressable>
        </View>

        {/* Input */}
        <View className="space-y-4 mt-12">
          <View className="relative w-full">
            <TextInput
              placeholder="Ex: https://youtube.com/watch?v=xEN4kQudnOA"
              placeholderTextColor="hsl(0,0%,45%)"
              className="h-16 px-4 rounded-full bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-100"
              value={url}
              onChangeText={setUrl}
            />
            <Pressable className="absolute right-2 top-4 p-2">
              <Link2 size={20} color="hsl(0,0%,45%)" />
            </Pressable>
          </View>

          {/* Bouton Fetch / Download */}
          {!videoData ? (
            <Pressable
              onPress={handleFetchVideo}
              className="w-full mt-6 rounded-full py-4 items-center justify-center bg-orange-500"
            >
              {isLoading ? (
                <Loader2 size={24} color="white" />
              ) : (
                <Text className="text-gray-50 font-bold">Download</Text>
              )}
            </Pressable>
          ) : (
            <View className="space-y-4 mt-6">
              {/* Miniature */}
              <View className="w-full h-48 rounded-2xl overflow-hidden bg-gray-200">
                <Image
                  source={{ uri: videoData.thumbnailMedium || videoData.thumbnail }}
                  className="w-full h-full"
                  resizeMode="cover"
                />
              </View>

              {/* Infos vidéo */}
              <View className="p-4 bg-gray-100 rounded-2xl">
                <View className="flex-row gap-3">
                  <View className="w-20 h-16 rounded-lg overflow-hidden bg-gray-200" />
                  <View className="flex-1 justify-center">
                    <Text className="text-gray-900 font-medium text-sm">{videoData.title}</Text>
                    <Text className="text-gray-500 text-xs">{videoData.author}</Text>
                  </View>
                </View>
              </View>

              {/* Qualities */}
              {qualities.map((q, i) => (
                <Pressable
                  key={i}
                  onPress={() => toggleQuality(i)}
                  className={`w-full flex-row justify-between mb-2 items-center p-4 rounded-2xl border ${
                    q.selected ? "bg-orange-100 border-orange-500" : "bg-white border-gray-300"
                  }`}
                >
                  <View className="flex-row items-center gap-3">
                    <Video size={20} color="hsl(10, 90%, 58%)" />
                    <Text className="text-gray-900 font-medium">{q.resolution}</Text>
                  </View>
                  <Text className="text-gray-500 text-sm">{q.size}</Text>
                </Pressable>
              ))}

              <Pressable
                className="w-full mt-6 rounded-full py-4 items-center justify-center bg-orange-500"
              >
                {isLoading ? <Loader2 size={24} color="white" /> : <Text className="text-gray-50 font-bold">Download</Text>}
              </Pressable>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VideoDownloader;
