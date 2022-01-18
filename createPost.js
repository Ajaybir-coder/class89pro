return (
    <View style={styles.container]>
    <SafeAreaView style={styles.droidSafeArea) />
    <View style={styles.appTitle>
    <View style={styles.appIcon}>
    <Image
    source={require("../assets/logo.png") }
    style={styles.icon Image)
    X/Image>
    </View
    <View style={styles.appTitleTextContainer}>
    <Text style={styles.appTitleText}>New Post</Text>
    </View
    </View>
    <View style={styles.fieldsContainer}>
    <ScrollViews
    <Image
    source=preview_images [this.state-previewImage] }
    style={styles.previewImage)
    X/Image>

    <View style={{ height:
        REValue (this.state.dropdownHeight) }}>
        // code for dropdown picker
        <DropDownPicker
        items=[[
        { label: "Image 1", value: "image_1" },
        { label: "Image 2", value: "image_2" },
        { label: "Image 3", value: "image_3" },
        { label: "Image 4", value: "image_4" },
        { label: "Image 5", value: "image_5" },
        { label: "Image 6", value: "image_6" },
        { label: "Image 7", value: "image_7" }
        defaultValue={this.state.previewImage)
        containerStyle={{
        height: 40,
        borderRadius: 20,
        marginBottom: 10
        }}
        onOpen={( =>
        this.setState({ dropdownHeight: 170 });
        }}
        onClose={() => {
            this.setState({ dropdownHeight: 40 });
            style={{ backgroundColor: "transparent" }}
            itemStyle={{
            justifyContent: "Elex-start"
            }}
            dropDownStyle={{ backgroundColor: "#2a2a2a"
            labelStyle={{
            color: "white"
            }}
            arrowStyle={{
            color: "white"
            }}
            onChange Item-item =>
            this.setState({
            previewImage: item.value
            })
            />
            </View
            <TextInput
style={styles.input Font)
onChangeText=[caption => this.setState({ caption
placeholder={ "Caption"}
placeholderTextColor="white"
</ScrollView>
</View>
<View style={{ flex: 0.08 }} />
</View>
);

async addPost() {
    if (
    this.state.caption
    ) {
    let postData = {
    preview_image: this.state.previewImage,
    caption: this.state.caption,
    author: firebase.auth().currentUser.displayName,
    created on: new Date(),
    author_uid: firebase.auth().currentUser.uid,
    profile_image: this.state.profile_image,
    likes: 0
    };
    await firebase
    database
    .refl
    "/posts/"
    Math.random()
    .toString(36)
    .slice(2)
    )
    .set(postData)
    .then(function (snapshot) { });
    this.props.setUpdateToTrue();
    this.props.navigation navigate("Feed");
    } else {
    Alert alert(
    "Error",
    "All fields are required!",
    [{ text: "OK", onpress : () => console.log("OK Pressed") }],
    { cancelable: false }
    );
    }
    }

    constructor(props) {
        super(props) ;
        UF) ae G
        light_theme: true,
        post_id: this.props.post.key,
        post_data: this.props.post.value
    }}
