import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import { getLatestGames } from "../lib/metacritic";
import { AnimatedGameCard } from "./GameCard";
import { Screen } from "./Screen";

//Las view son como div
export function Main() {
  const [games, setGames] = useState([]);
  // const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    // No es necesario el style insets.top y botton para el padding porque el <Stack/> ya lo "arregla"
    <Screen
    // style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
    >
      {games.length === 0 ? (
        <ActivityIndicator color={"#fff"} size={"large"} />
      ) : (
        <FlatList
          data={games}
          key={(game) => game.slug}
          renderItem={({ item, index }) => (
            <AnimatedGameCard game={item} index={index} />
          )}
        ></FlatList>
      )}
    </Screen>
  );
}
