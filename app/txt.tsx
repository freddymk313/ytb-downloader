import { View, Text, Pressable, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import { Info, Link2, Video } from "lucide-react-native";

const index = () => {
    const videoData = null;
  const qualities = [
    { resolution: "1080p", size: "100MB", selected: false },
    { resolution: "720p", size: "50MB", selected: false },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-gray-900">
      <View className="px-6 py-6">
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center">
            <Image
              source={require("@/assets/images/splash-icon.png")}
              className="w-12 h-12 dark:bg-white rounded-full border-none"
              resizeMode="contain"
            />
            <Text className="text-2xl ml-1 font-bold dark:text-white">
              TB Downloader
            </Text>
          </View>

          <Pressable className="p-2">
            <Info size={25} color="hsl(10, 90%, 58%)" />
          </Pressable>
        </View>

        <View className="space-y-4 mt-20">
            <View className="relative w-full">
              <TextInput
                placeholder="Ex: https://youtube.com/watch?v=xEN4kQudnOA"
                placeholderTextColor="hsl(0,0%,45%)"
                className="h-16 px-4 rounded-full py- bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-100"
              />
              <Pressable className="absolute right-2 top-1/2 -translate-y-1/2 p-2">
                <Link2 size={20} color="hsl(0,0%,45%)" />
              </Pressable>
            </View>

            {!videoData ? (
              <Pressable className="w-full mt-8 rounded-full py-4 items-center justify-center bg-orange-500">
                <Text className="text-gray-50 font-bold">
                  Download
                </Text>
              </Pressable>
            ) : (
              <View className="space-y-4">
                {/* Thumbnail */}
                <View className="w-full h-48 rounded-2xl overflow-hidden bg-muted">
                  <Image
                    source={{ uri: videoData.thumbnail }}
                    className="w-full h-full"
                  />
                </View>

                {/* Infos vidéo */}
                <View className="p-4 bg-secondary/30 rounded-2xl">
                  <View className="flex-row gap-3">
                    <View className="w-20 h-16 rounded-lg overflow-hidden bg-muted" />
                    <View className="flex-1 justify-center">
                      <Text className="text-cardForeground font-medium text-sm">
                        {videoData.title}
                      </Text>
                      <Text className="text-mutedForeground text-xs">
                        {videoData.author}
                      </Text>
                    </View>
                  </View>
                </View>

                {/* Qualities */}
                {qualities.map((q, i) => (
                  <Pressable
                    key={i}
                    className="w-full flex-row justify-between items-center p-4 rounded-2xl bg-card border border-border"
                  >
                    <View className="flex-row items-center gap-3">
                      <Video size={20} color="hsl(10, 90%, 58%)" />
                      <Text className="text-cardForeground font-medium">
                        {q.resolution}
                      </Text>
                    </View>
                    <View className="flex-row items-center gap-3">
                      <Text className="text-mutedForeground text-sm">
                        {q.size}
                      </Text>
                    </View>
                  </Pressable>
                ))}

                <Pressable className="w-full mt-8 rounded-full py-4 items-center justify-center bg-orange-500">
                <Text className="text-gray-50 font-bold">
                  Download
                </Text>
              </Pressable>
              </View>
            )}
          </View>
      </View>
    </SafeAreaView>
  );
};

export default index;
