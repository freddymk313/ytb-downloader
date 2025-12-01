import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native';
import { Info } from 'lucide-react-native';

const index = () => {
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
        </View>
    </SafeAreaView>
  )
}

export default index