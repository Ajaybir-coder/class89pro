return (
    <View style={styles.container}>
    <SafeAreaView style={styles.droidSafeArea} />
    <View style={styles.appTitle}>
    <View style={styles.appIcon}>
    <Image
    source={require("../assets/logo.png")}
    style={styles.icon Image}
    ></Image>
    </View>
    <View style={styles.appTitleTextContainer}>
    <Text style={styles.appTitleText}>Spectagram</Text>
    </View>
    </View>
    <View style={styles.cardContainer}>
    <Flatlist
    keyExtractor={this.keyExtractor}
    data={posts]
    renderItem={this.renderItem}
    </View>
    </View>
    );

    ===
"android" ? StatusBar.currentHeight : RFValue (35)
const styles = Stylesheet.create({
container: {
flex: 1,
backgroundColor: "black"
},
droidSafeArea: {
marginTop: Platform.os
},
appTitle: {
flex: 0.07,
flexDirection: "row"
},
appIcon: {
flex: 0.2,
justifyContent: "center",
alignItems: "center"
},
icon Image: {
width: "100%",
height: "100%",
resizeMode: "contain"
},
appTitleTextContainer: {
flex: 0.8,
justifyContent: "center"
},
appTitleText: {
color: "white",
fontSize: RFValue (28),
},
cardContainer: {
flex: 0.85
}
});