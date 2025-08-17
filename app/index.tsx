import { Link } from "expo-router";
import { Text, View } from "react-native";
import "../global.css";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-7xl font-bold text-primary">
        MovieApp!
      </Text>
      <Link href = "/(tabs)/onboarding" className="text-2xl text-blue-500 mt-4">
        Onboarding
      </Link>
    </View>
  );
}