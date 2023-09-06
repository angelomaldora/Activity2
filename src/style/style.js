import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8fa",
    flexDirection: "column",
  },
  head: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 15,
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
  log: {
    flex: 1,
    alignItems: "flex-end",
  },
  body: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#f8f8fa",
    padding: 25,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  box1: {
    backgroundColor: "#FFF",
    padding: 15,
    borderWidth: 0.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderColor: "#bdbdbd",
    marginTop: 10,
  },
  box2: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    padding: 15,
    borderColor: "#bdbdbd",
  },
  box3: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderWidth: 0.5,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    padding: 15,
    borderColor: "#bdbdbd",
  },
  box4: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  box5: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    padding: 15,
    borderColor: "#bdbdbd",
    borderWidth: 0.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "white",
  },
  box6: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderColor: "#bdbdbd",
    borderWidth: 0.5,
    backgroundColor: "white",
  },
  foot: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    height: 61,
    backgroundColor: "white",
    paddingTop: 10,
    borderTopWidth: .3,
    borderColor: "#bdbdbd",
  },
  foot1: {
    flexDirection: "column",
  },
  foot2: {
    flexDirection: "column",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 5,
  },
  text: {
    textAlign: "right",
    borderColor: "#bdbdbd",
    borderWidth: 1,
    padding: 8,
    borderRadius: 5,
    fontSize: 13,
    fontWeight: 'bold',
    color: 'grey'
  },
  dev: {
    flex: 1,
    color: "#757575",
    fontWeight: "bold",
  },
  help: {
    marginRight: 10,
    color: "#757575",
    fontSize: 12,
    fontWeight: 'bold'
  },
  columntext1: {
    fontSize: 16,
  },
  columntext2: {
    flex: 1,
    fontSize: 16,
    marginLeft: 5,
    fontWeight: 'bold'
  },
  columntext3: {
    flex: 1,
    fontSize: 17,
    marginLeft: 5,
  },

  recent: {
    flex: 1,
    color: "#757575",
    fontWeight: "bold",
  },
  clr: {
    alignContent: "center",
    color: "#757575",
    fontWeight: 'bold',
    fontSize: 12
  },
  home: {
    color: "blue",
    fontSize: 12,
  },
  image: {
    borderRadius: 10,
    height: 50,
    width: 50,
  },
  image1: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
  image2:{
    borderRadius: 5,
    borderWidth: .1,
    borderColor: 'grey',
    height: 30,
    width: 30
  }
});
