import {View, Image} from 'react-native';
import {Gesture, GestureDetector} from "react-native-gesture-handler";
import Animated, {useAnimatedStyle, useSharedValue, withSpring} from 'react-native-reanimated'

const scaleImage = useSharedValue(imageSize);

const doubleTap = Gesture.Tap()
    // this might be wrddong
    .numberOfTaps(2)
    .onStart(() => {
        if (scaleImage.value !== imageSize * 2) {
           scaleImage.value = scaleImage.value * 2;
        }
    });

const imageStyle = useAnimatedStyle(() => {
    return {
        width: withSpring(scaleImage.value),
        height: withSpring(scaleImage.value),
    }
})

const containerStyle = useAnimatedStyle(() => {
    return {
        transform: [
            {
                translateX: translateX.value
            },
            {
                translateY: translateY.value
            }
        ]
    };
});

const drag = Gesture.Pan()
    .onChange((event) => {
        translateX.value += event.changeX;
        translateY.value += event.changeY;
    })

export default function EmojiSticker({ imageSize, stickerSource}){
    return (
        <GestureDetector gesture={drag}>
            <Animated.View style={{ top:-350}}>
                <GestureDetector gesture={doubleTap}>
                    <Animated.Image
                        source={stickerSource}
                        resizeMode={'contain'}
                        style={{width: imageSize, height:imageSize}}
                    />
                </GestureDetector>
            </Animated.View>
        </GestureDetector>
    )
}