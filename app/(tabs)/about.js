import { Pressable, ScrollView, Text } from "react-native";
import { Link } from "expo-router";
import { HomeIcon } from "../../components/Icons";
import { styled } from "nativewind";
import { Screen } from "../../components/Screen";

//Un mejor manera para cam,biar la opacidad si le pica, en vez de tener que hacer una condicional
const StyledPressable = styled(Pressable);

export default function About() {
  return (
    <Screen>
      <ScrollView className="pt-24 bg-black">
        {/* No es necesario por que <Stack/> ya lo resuelve a su manera */}
        <Link asChild href="/">
          <StyledPressable className={`active:opacity-50`}>
            <HomeIcon />
          </StyledPressable>
        </Link>
        <Text className="text-white font-bold mb-8 text-2xl">
          About the project
        </Text>
        <Text className="text-white text-white/90 mb-4">
          Application for iOS and Android that collects and presents information
          from Metacritic using React Native.
        </Text>
        <Text className="text-white text-white/90 mb-4">
          Integration with the Metacritic API to obtain real-time data on game
          ratings and information, allowing users to access up-to-date, relevant
          information and using expo for faster development.
        </Text>
      </ScrollView>
    </Screen>
  );
}
