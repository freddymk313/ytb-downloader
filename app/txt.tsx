import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  Pressable,
  TextInput,
} from "react-native";
import { Info, Download, Video, Link2, Checkbox } from "lucide-react-native";

export default function VideoDownloader() {
  const videoData = null;
  const qualities = [
    { resolution: "1080p", size: "100MB", selected: false },
    { resolution: "720p", size: "50MB", selected: false },
  ];

  return (
    <ScrollView className="flex-1 bg-background p-4">
      <View className="flex-1 items-center justify-center">
        <View className="w-full max-w-md p-6 space-y-6 rounded-lg bg-card shadow-soft">
          {/* Header */}
          <View className="flex-row justify-between items-center">
            <Text className="text-xl font-bold text-cardForeground">
              Video Downloader
            </Text>
            <Pressable className="p-2">
              <Info size={24} color="hsl(10, 90%, 58%)" />
            </Pressable>
          </View>

          {/* Input URL */}
          <View className="space-y-4">
            <View className="relative w-full">
              <TextInput
                placeholder="Ex: https://youtube.com/watch?v=xEN4kQudnOA"
                placeholderTextColor="hsl(0,0%,45%)"
                className="h-12 px-4 rounded-full bg-secondary text-secondaryForeground"
              />
              <Pressable className="absolute right-2 top-1/2 -translate-y-1/2 p-2">
                <Link2 size={20} color="hsl(0,0%,45%)" />
              </Pressable>
            </View>

            {!videoData ? (
              <Pressable className="w-full rounded-full py-3 items-center justify-center bg-primary">
                <Text className="text-primaryForeground font-bold">
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
                      <Checkbox checked={q.selected} />
                    </View>
                  </Pressable>
                ))}

                <Pressable className="w-full rounded-full py-3 items-center justify-center bg-primary">
                  <Text className="text-primaryForeground font-bold">
                    Download
                  </Text>
                </Pressable>
              </View>
            )}
          </View>

          {/* Footer */}
          <View className="pt-4 space-y-2 items-center">
            <Text className="text-xs text-mutedForeground text-center">
              Téléchargement YouTube avec Lovable Cloud
            </Text>
            <Text className="text-xs text-destructive text-center">
              ⚠️ Note: Le téléchargement de vidéos YouTube peut violer leurs
              conditions d'utilisation.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
