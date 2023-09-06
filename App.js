import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Image, View } from "react-native";
import { styles } from "./src/style/style.js";
import Icon from "react-native-vector-icons/Entypo";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon1 from "react-native-vector-icons/MaterialIcons";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        
      <Image
          style={styles.image2}
          source={require("./src/image/big_logo.png")} // static image
        />
        <Text style={styles.title}>Expo Go</Text>
        <View style={styles.log}>
          <Text style={styles.text}>Log In</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.row}>
        <Image
          style={styles.image1}
          source={require("./src/image/logo.jpg")} // static image
        />
          <Text style={styles.dev}>Development servers</Text>
          <Text style={styles.help}>HELP</Text>
        </View>
        <View style={styles.box1}>
          <Text style={styles.columntext1}>
            Please here to sign in to your Expo account and see the projects you
            have recently been working on.
          </Text>
        </View>
        <View style={styles.box2}>
          <Icon name="chevron-small-right" size={20} color="grey" />
          <Text style={styles.columntext3}>Enter URL manually</Text>
        </View>
        <View style={styles.box3}>
          <Icons name="qrcode" size={20} color="grey" />
          <Text style={styles.columntext3}>Scan QR Code</Text>
        </View>
        <View style={styles.box4}>
          <Text style={styles.recent}>Recently opened</Text>
          <Text style={styles.clr}>CLEAR</Text>
        </View>
        <View style={styles.box5}>
        <Image
          style={styles.image}
          source={require("./src/image/pic.jpg")} // static image
        />
          <Text style={styles.columntext2}>actfin</Text>
          <Icon name="chevron-small-right" size={30} color="#bdbdbd" />
        </View>
        <View style={styles.box6}>
        <Image
          style={styles.image}
          source={require("./src/image/pic.jpg")} // static image
        />
          <Text style={styles.columntext2}>actfin</Text>
          <Icon name="chevron-small-right" size={30} color="#bdbdbd" />
        </View>
        <View style={styles.box6}>
        <Image
          style={styles.image}
          source={require("./src/image/pic.jpg")} // static image
        />
          <Text style={styles.columntext2}>TiktokLite</Text>
          <Icon name="chevron-small-right" size={30} color="#bdbdbd" />
        </View>
        <View style={styles.box6}></View>
      </View>
      <View style={styles.foot}>
      <View style={styles.foot1}>
      <Icon name="home" size={28} color="blue" />
        <Text style={styles.home}>Home</Text>
      </View>
      <View style={styles.foot2}>
      <Icon1 name="settings" size={30} color="grey" />
      
      </View>
       
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
