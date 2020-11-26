import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Avatar } from "react-native-paper";
import { TouchableOpacity, View } from "react-native";
import HeaderIcon from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/Ionicons";
import CarttIcon from "react-native-vector-icons/Feather";
import OrderIcon from "react-native-vector-icons/AntDesign";

import HomePage from "../screens/Home";
import ProdutPage from "../screens/Product";
import ProductDetail from "../screens/Product/Detail";
import CartPage from "../screens/Cart";
import OrderPage from "../screens/Order";
import UserPage from "../screens/User";

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "#ffa695",
        inactiveTintColor: "#212121",
        style: {
          justifyContent: "center",
          backgroundColor: "#fff",
          elevation: 2
        },
        labelStyle: {
          textTransform: "uppercase",
          alignItems: "center",
          fontSize: 14,
          fontFamily: "PT-sans-bold"
        },
        labelPosition: "beside-icon"
      }}
      screenOptions={({ route, navigation }) => {
        return { tabBarLabel: navigation.isFocused() ? route.name : "" };
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({ color }) => (
            <HeaderIcon name="home" size={22} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartPage}
        options={{
          tabBarIcon: ({ color }) => (
            <CarttIcon name="shopping-cart" size={22} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Order"
        component={OrderPage}
        options={{
          tabBarIcon: ({ color }) => (
            <OrderIcon name="hearto" size={22} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="User"
        component={UserPage}
        options={{
          tabBarIcon: ({ color }) => (
            <HeaderIcon name="user" size={22} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#25d06f",
          elevation: 0,
          borderBottomRightRadius: 25,
          borderBottomLeftRadius: 25,
          height: 100
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          fontFamily: "PT-sans-bold",
          textTransform: "uppercase",
          fontSize: 16
        }
      }}
    >
      <Stack.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{
          title: "Welcome",
          headerLeft: () => (
            <View style={{ marginLeft: 20 }}>
              <Icon.Button
                name="ios-menu"
                size={25}
                color="#fff"
                backgroundColor="transparent"
              />
            </View>
          ),
          headerRight: () => (
            <View style={{ flexDirection: "row", marginRight: 20 }}>
              <TouchableOpacity
                style={{ paddingHorizontal: 10, marginTop: 5 }}
                onPress={() => {
                  console.log("clicked");
                }}
              >
                <Avatar.Image
                  source={require("../assets/images/banner_one.jpg")}
                  size={30}
                />
              </TouchableOpacity>
            </View>
          )
        }}
      />
      <Stack.Screen
        name="Products"
        component={ProdutPage}
        options={{
          title: "Products",
          headerLeft: () => (
            <View style={{ marginLeft: 20 }}>
              <Icon.Button
                name="ios-menu"
                size={25}
                color="#fff"
                backgroundColor="transparent"
              />
            </View>
          ),
          headerRight: () => (
            <View style={{ flexDirection: "row", marginRight: 20 }}>
              <TouchableOpacity
                style={{ paddingHorizontal: 10, marginTop: 5 }}
                onPress={() => {
                  console.log("clicked");
                }}
              >
                <Avatar.Image
                  source={require("../assets/images/banner_one.jpg")}
                  size={30}
                />
              </TouchableOpacity>
            </View>
          )
        }}
      />
      <Stack.Screen
        name="Detail"
        component={ProductDetail}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
