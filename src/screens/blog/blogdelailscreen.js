import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity, ScrollView, Image } from 'react-native';
import Colors from '../../color/commoncolor';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Icons } from '../../color/icon';
const { height, width } = Dimensions.get('window');

const Paymentscreen = (props) => {
    const Data = [
        {
            image: 'https://www.babyamore.in/wp-content/uploads/2022/02/eliza-and-august-test-mini-cup-and-straw_3-768x525.jpg',
            title: 'Why You Should Make the Switch to Open Cup Drinking for Your Baby',
            description: `At six months, several changes occur in a baby.They start teething and are gradually making a switch to solid foods. They pick up several table etiquettes when  they are six months to a year old. Apart from teaching  them how to eat, it is equally important to introduce to them the concept of an open cup.When a baby begins to consume solid food, they require at least 20-50 ml of water to wash down the food and  prevent constipation. You may choose a sippy cup, straw cup or even an open cup. However, take a moment to evaluate the most effective type of cup.We recommend you choose an open cup or a straw cup. It builds a lifelong skill when compared to drinking through  a sippy cup. When you introduce babies to a sippy cup, they learn a drinking method that does not work when trying to drink through an open cup. Therefore, introducing them to an open cup is more effective than learning the skill later in life.`,
            title2: 'Why Your Child Needs an Open Cup',
            description2: `At around 6 months old, every child starts learning the skill of eating, drinking, moving food in their mouth, and  babbling. These are oral motor skills that babies need to  hone before transitioning off bottles or breastfeeding.An open cup teaches your baby a more mature swallow from cups and bottles. The overall idea is to keep them engaged while drinking rather than simply pouring liquid into their open mouth.Switching to open cups at 6 months will give your child the basic oral motor skills needed to control the cup and reduce water spills by the age of 1. It’s also easier for a baby to transition off a bottle at 11 to 12 months when they already know how to drink from an open cup.`,
            title3: 'Open Cup vs. Sippy Cup',
            descriptio3: `The sippy cup does not help your baby develop basic oral motor skills. The reason to limit its use is that your  baby already knows how to suckle. Continuing their use will limit your child’s skills.Repeated use of sippy cups can increase the risk of speech delays, and breathing issues. These make an open cup a preferable choice to sippy cups.`,
            title4: 'Why Your Child Needs an Open Cup',
            descriptio4: `How to Choose The Best Open Cup For Your Baby There are two main things to look for in open cups for your baby – the softness of the rim and the size of the cup.Go for soft or semi-soft rims because harder rims like glass or metal can cause your baby’s teeth some serious damage. The best material to opt for is silicone. It is flexible, soft and durable. There are several options in the market. The EZPZ Mini Cups or Avanchy straw cups are excellent choices in this segment. These are made of soft silicone and protect your baby’s developing teeth. Its non-slip silicone grip makes movements to the mouth easier. Additionally, they come with an option of straw cups and you can serve your baby cold, warm or hot liquids in it.Choose small sized open cups to start. Then, it is much easier for a baby to access just a small amount of water in the cup with less tilting needed. Additionally, it  prevents them from gobbling large amounts of water that may cause them to cough and spit. Brands like EZPZ and Avanchy provide various sizes of mini cups for different age groups. Gradually increasing the quantity of water and making them practice will help your child pick up the skill quickly.Additionally, you can look for optional criteria based on your baby’s preferences. Handles offer extra support for your baby to grab onto the cup, and angled rims make it so that your baby does not have to tilt their head back too much. Weighted bottoms make it difficult for the cup to topple over or spill water.`,
            img: 'https://www.babyamore.in/wp-content/uploads/2022/02/eliza-and-august-test-mini-cup-and-straw_3-768x525.jpg',
            title5: 'How to Teach Your Baby to Drink From an Open Cup',
            subtitle1: "1.Start small",
            subtitle2: "2. Demonstrate",
            subtitle3: "3. Let your child reach out",
            subtitle1des1: "Start with only a small amount of water, breast milk or  formula in the cup (about 20-50 ml) to minimize the amount of spilling. Bring the cup to your child’s table every time they eat a meal.",
            subtitle1des2: "Lead your child by example. Model how they can use the cup and then offer it to them. Avoid bringing the cup near their mouth, instead place it in front of them and  watch them reach out for it. Let them reach out for the cup without bringing it to their mouth.",
            subtitle1des3: `Guide the cup to their mouth. By sitting down and smiling at your baby, you can catch their attention, gently place  your hands over theirs and bring it up to their mouth slowly.You want to make your child independent as they learn to drink from an open cup. Guide them in a minimal capacity and allow them to pick up the skill in their way. Your baby  might lick the liquid, spill it or cough and splutter but this is all normal! With practice and time, they will learn the trick`,
            title6: 'In conclusion',
            descriptio6: `The art of drinking is a skill that requires practice. Introducing your baby to the concept of open cups instead of sippy cups can help them hone a lifelong skill.  It supports their oral health and speech development You can begin it at early as six months using soft silicone mini cups that can hold 20-50 ml of liquid. Starting with small quantities is easier for your baby and prevent spilling. Lead by example but let them learn in their own ways and at their own pace.`,
        }
    ]
    const [favBtn, setFavBtn] = React.useState(false)
    return (
        <SafeAreaView style={styles.maincontainer}>
            <ScrollView>
                {Data.map((val, i) => {
                    return (
                        <View key={i} style={{ height: height / 100 * 50, }}>
                            <View style={{ flex: 0.2, flexDirection: 'row' }}>
                                <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image style={{ height: height / 17, width: height / 17 }}
                                        source={require('../../assets/images/profileicon.png')}
                                    />
                                </View>
                                <View style={{ flex: 0.4, justifyContent: 'center' }}>
                                    <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Regular', color: Colors.commoncolor }}>
                                        HAMEEDHUDEEN
                                    </Text>
                                    <Text style={{ fontSize: height / 72, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>
                                        Feb 22 / 2022
                                    </Text>
                                </View>
                                <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'flex-end', marginHorizontal: 10 }}>
                                    <TouchableOpacity style={{
                                        height: height / 20, width: height / 20, borderRadius: 50, justifyContent: 'center', alignItems: 'center',
                                        elevation: 3, backgroundColor: 'white'
                                    }}
                                        onPress={() => { setFavBtn(!favBtn) }}>
                                        {favBtn ? <Icon style={[styles.cardTitleIcon, { color: Colors.commoncolor }]} name="heart" /> :
                                            <Icons.FontAwesome style={[styles.cardTitleIcon, { color: '#58668c' }]} name="heart-o" />}
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>
                                <Image style={{ height: '95%', width: '90%', borderRadius: 15, }}
                                    source={{ uri: (val.image) }}
                                />
                            </View>
                        </View>
                    )
                })}
                {Data.map((item, i) => {
                    return (
                        <View key={i} style={{ marginTop: 10 }}>
                            <View style={{ flex: 0.99, borderRadius: 20, marginHorizontal: 10 }}>
                                <View style={{ marginHorizontal: 25, marginTop: 5 }}>
                                    <Text style={{ fontSize: height / 62, fontFamily: 'Poppins-SemiBold', color: '#373737' }}>
                                        {item.title}
                                    </Text>
                                </View>
                                <View style={{ marginTop: 5, marginHorizontal: 25, }}>
                                    <Text style={{ fontSize: height / 68, letterSpacing: 1, fontFamily: 'Poppins-Regular', color: '#555555', textAlign: 'left' }}>{item.description}</Text>
                                </View>

                                <View style={{ marginHorizontal: 25, flexDirection: 'row', marginTop: 10 }}>
                                    <Text style={{ fontSize: height / 62, fontFamily: 'Poppins-SemiBold', color: '#373737' }}>
                                        {item.title2}
                                    </Text>
                                </View>
                                <View style={{ marginTop: 5, marginHorizontal: 25, }}>
                                    <Text style={{ fontSize: height / 68, letterSpacing: 1, fontFamily: 'Poppins-Regular', color: '#555555', textAlign: 'left' }}>{item.description2}</Text>
                                </View>
                                <View style={{ marginHorizontal: 25, flexDirection: 'row', marginTop: 10 }}>
                                    <Text style={{ fontSize: height / 62, fontFamily: 'Poppins-SemiBold', color: '#373737' }}>
                                        {item.title3}
                                    </Text>
                                </View>
                                <View style={{ marginTop: 5, marginHorizontal: 25, }}>
                                    <Text style={{ fontSize: height / 68, letterSpacing: 1, fontFamily: 'Poppins-Regular', color: '#555555', textAlign: 'left' }}>{item.descriptio3}</Text>
                                </View>

                                <View style={{ marginHorizontal: 25, flexDirection: 'row', marginTop: 10 }}>
                                    <Text style={{ fontSize: height / 62, fontFamily: 'Poppins-SemiBold', color: '#373737' }}>
                                        {item.title4}
                                    </Text>
                                </View>
                                <View style={{ marginTop: 5, marginHorizontal: 25, }}>
                                    <Text style={{ fontSize: height / 68, letterSpacing: 1, fontFamily: 'Poppins-Regular', color: '#555555', textAlign: 'left' }}>{item.descriptio4}</Text>
                                </View>
                                <View style={{ marginTop: 10, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image style={{ height: height / 100 * 40, width: width / 100 * 90, borderRadius: 15, }}
                                        source={{ uri: (item.img) }}
                                    />
                                </View>
                                <View style={{ marginHorizontal: 25, flexDirection: 'row', marginTop: 15 }}>
                                    <Text style={{ fontSize: height / 62, fontFamily: 'Poppins-SemiBold', color: '#373737' }}>
                                        {item.title5}
                                    </Text>
                                </View>
                                <View style={{ marginHorizontal: 25, flexDirection: 'row', marginTop: 10 }}>
                                    <Text style={{ fontSize: height / 62, fontFamily: 'Poppins-SemiBold', color: '#373737' }}>
                                        {item.subtitle1}
                                    </Text>
                                </View>
                                <View style={{ marginTop: 5, marginHorizontal: 25, }}>
                                    <Text style={{ fontSize: height / 68, letterSpacing: 1, fontFamily: 'Poppins-Regular', color: '#555555', textAlign: 'left' }}>{item.subtitle1des1}</Text>
                                </View>
                                <View style={{ marginHorizontal: 25, flexDirection: 'row', marginTop: 10 }}>
                                    <Text style={{ fontSize: height / 62, fontFamily: 'Poppins-SemiBold', color: '#373737' }}>
                                        {item.subtitle2}
                                    </Text>
                                </View>
                                <View style={{ marginTop: 5, marginHorizontal: 25, }}>
                                    <Text style={{ fontSize: height / 68, letterSpacing: 1, fontFamily: 'Poppins-Regular', color: '#555555', textAlign: 'left' }}>{item.subtitle1des2}</Text>
                                </View>
                                <View style={{ marginHorizontal: 25, flexDirection: 'row', marginTop: 10 }}>
                                    <Text style={{ fontSize: height / 62, fontFamily: 'Poppins-SemiBold', color: '#373737' }}>
                                        {item.subtitle3}
                                    </Text>
                                </View>
                                <View style={{ marginTop: 5, marginHorizontal: 25, }}>
                                    <Text style={{ fontSize: height / 68, letterSpacing: 1, fontFamily: 'Poppins-Regular', color: '#555555', textAlign: 'left' }}>{item.subtitle1des3}</Text>
                                </View>

                                <View style={{ marginHorizontal: 25, flexDirection: 'row', marginTop: 10 }}>
                                    <Text style={{ fontSize: height / 62, fontFamily: 'Poppins-SemiBold', color: '#373737' }}>
                                        {item.title6}
                                    </Text>
                                </View>
                                <View style={{ marginTop: 5, marginHorizontal: 25, }}>
                                    <Text style={{ fontSize: height / 68, letterSpacing: 1, fontFamily: 'Poppins-Regular', color: '#555555', textAlign: 'left' }}>{item.descriptio6}</Text>
                                </View>
                            </View>
                        </View>
                    )
                })}
                <View style={{ height: height / 100 * 6, justifyContent: 'center', alignItems: 'center', marginHorizontal: 10 }}>
                    <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Regular', color: '#555555' }}>This entry was posted in<Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Bold', color: '#FC8181' }}>  Blog</Text><Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Regular', color: '#555555' }}>. Bookmark the</Text><Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Bold', color: '#FC8181' }}> permalink</Text></Text>
                </View>
                <View style={{ height: height / 100 * 1, }}></View>
            </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    maincontainer: {
        flex: 1, backgroundColor: Colors.background
    },
    buttonStyle: {
        backgroundColor: '#b8baba',
        borderRadius: height / 81,
        margin: 5
    },
    subText2: {
        color: '#ffffff',
        padding: height / 81,
        fontSize: 20,
        margin: 'auto',
    },
    buttonLeft: {
        width: height / 100 * 5
    },
    leftIcon: {
        color: '#1C2340',
        fontSize: height / 40,
    },
    cardTitleIcon: {
        fontWeight: 'bold',
        fontSize: height / 40,

    },
    centeredView: {
        flex: 1,
        alignItems: "center",
    },
    modalView: {
        flex: 0.5,
        width: width / 1.1,
        marginTop: height / 8,
        backgroundColor: '#EEEEEE',
        borderRadius: 20,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 2,
        alignItems: 'center'
    },
})
export default Paymentscreen;