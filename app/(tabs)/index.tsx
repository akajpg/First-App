import React, { useRef } from 'react';
import { Image, Pressable, TouchableOpacity, View, ScrollView, Text } from 'react-native';
import { Link } from 'expo-router';
import LottieView from 'lottie-react-native';
import { useRouter } from 'expo-router';

import { styles } from '../../styles/auth.styles';
import typography from '../../styles/typography';
import ButtonStyles from '../../styles/buttons';

const dividerStyle = { height: 1, backgroundColor: '#E0E0E0', marginVertical: 24 };

export default function Index() {
  const router = useRouter();
  const spinDotsRef = useRef<LottieView>(null);
  const pulseDotRef = useRef<LottieView>(null);

  const handlePlay = (ref: React.RefObject<LottieView>) => ref.current?.play();
  const handlePause = (ref: React.RefObject<LottieView>) => ref.current?.pause();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1519455953755-af066f52f1a6?q=80&w=2261&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          style={styles.image} 
        />

        {/* Typography */}
        <Text style={typography.h1}>Heading 1</Text>
        <Text style={typography.h2}>Heading 2</Text>
        <Text style={typography.h3}>Heading 3</Text>
        <Text style={typography.h4}>Heading 4</Text>

        <Text style={typography.bodyCopyMedium}>
          The Jeep SRT delivers thrilling performance wrapped in luxury and muscle...
        </Text>

        <Text style={typography.body}>
          We speak in symbols, loops, and logic — and the universe listens.
          Every bug is a mystery.
          Every function is a spell.
          And every time your code runs?
          That's power. That's creation. That's you bending reality with your mind.
        </Text>

        <Text style={typography.bodyCopySmall}>
          The Jeep Grand Cherokee SRT combines a 6.4L HEMI® V8 engine with sleek styling...
        </Text>

        <Text style={typography.bodyCopyTiny}>
          The Jeep Grand Cherokee SRT is badass because it packs a 475-horsepower engine...
        </Text>

        <View style={dividerStyle} />

        {/* Icons */}
        <View style={styles.containerCenterInline}>
          <Image source={require("../../assets/images/icon.png")} style={styles.iconLarge} />
          <Image source={require('../../assets/images/icon.png')} style={styles.iconMedium} />
          <Image source={require('../../assets/images/icon.png')} style={styles.iconSmall} />
        </View>

        <View style={dividerStyle} />

        {/* Lottie: Pulse Dot */}
        <View style={styles.containerCenterStacked}>
          <LottieView
            ref={pulseDotRef}
            source={require('../../assets/svg/pulse_dot.json')}
            autoPlay
            loop
            speed={1}
            style={{ width: 100, height: 100 }}
            colorFilters={[{ keypath: 'Shape Layer 1', color: '#000000' }]}
          />
          <TouchableOpacity onPress={() => handlePlay(pulseDotRef)} style={[ButtonStyles.button, ButtonStyles.primary]}activeOpacity={0.7}>
            <Text style={ButtonStyles.buttonTextLight}>Play dot</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePause(pulseDotRef)} style={[ButtonStyles.button, ButtonStyles.secondary]}activeOpacity={0.7}>
            <Text style={ButtonStyles.buttonTextLight}>Stop dot</Text>
          </TouchableOpacity>
        </View>

        <View style={dividerStyle} />

        {/* Lottie: Spin Dots */}
        <View style={styles.containerCenterStacked}>
          <LottieView
            ref={spinDotsRef}
            source={require('../../assets/svg/spin_dots.json')}
            autoPlay
            loop
            speed={1}
            style={{ width: 100, height: 100 }}
            colorFilters={[
              { keypath: 'Shape Layer 1', color: '#000000' },
              { keypath: 'Shape Layer 2', color: '#000000' },
              { keypath: 'Shape Layer 3', color: '#000000' },
              { keypath: 'Shape Layer 4', color: '#000000' },
            ]}
          />
          <TouchableOpacity onPress={() => handlePlay(spinDotsRef)} style={[ButtonStyles.button, ButtonStyles.primary]}>
            <Text style={ButtonStyles.buttonTextLight}>Spin dots</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePause(spinDotsRef)} style={[ButtonStyles.button, ButtonStyles.secondary]}>
            <Text style={ButtonStyles.buttonTextLight}>Stop dots</Text>
          </TouchableOpacity>
        </View>

        <View style={dividerStyle} />

        {/* Image Gallery */}
        {[
          "https://images.unsplash.com/photo-1519455953755-af066f52f1a6?q=80&w=2261&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://framerusercontent.com/images/bxI5fyqzx9jF7fcgnPvcBqhKZxQ.png",
          "https://framerusercontent.com/images/EW1FeaBqtGltPQ921YZRMQRl7wU.png",
        ].map((uri, idx) => (
          <Image key={idx} source={{ uri }} style={styles.image} />
        ))}

        <Pressable onPress={() => alert("This works")}style={[ButtonStyles.button, ButtonStyles.primary]}>
        <Text style={ButtonStyles.buttonTextLight}>Pressible test</Text>
        </Pressable>

        {/* Link Navigation */}
        <Link href="/notifications" style={styles.link}>Go to Notifications</Link>

        {/* Buttons */}
        <Text style={typography.h4}>Buttons</Text>

        <TouchableOpacity onPress={() => alert("Primary button pressed")} style={[ButtonStyles.button, ButtonStyles.primary]}activeOpacity={0.7}>
          <Text style={ButtonStyles.buttonTextLight}>Primary Button</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert("Primary button pressed")} style={[ButtonStyles.button, ButtonStyles.secondary]}activeOpacity={0.7}>
          <Text style={ButtonStyles.buttonTextDark}>Secondary Button</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push('/notifications')} // 👈 your target route here
          style={[ButtonStyles.button, ButtonStyles.tertiary]}
          activeOpacity={0.7}
        >
          <Text style={ButtonStyles.buttonTextDark}>Tertiary Button</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
