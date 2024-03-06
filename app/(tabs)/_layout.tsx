import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { FontAwesome6, AntDesign, MaterialIcons } from "@expo/vector-icons";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Tab One",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="account-circle" size={30} color={color} />
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarIcon: ({ color }) => (
            <AntDesign name="clockcircle" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="start" // Unique name for this tab
        options={{
          title: "Start", // Title of the tab
          tabBarIcon: ({ color }) => (
            <AntDesign name="pluscircle" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="dining" // Unique name for this tab
        options={{
          title: "Dining", // Title of the tab
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="bowl-food" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="map" // Unique name for this tab
        options={{
          title: "Map", // Title of the tab
          tabBarIcon: ({ color }) => (
            <FontAwesome name="map" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
