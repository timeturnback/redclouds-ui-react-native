import * as React from 'react';

import {
  SafeAreaView,
  ScrollView,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { Button } from '../components/Button';
import { AutoImage } from '../components/AutoImage';
import { Text } from '../components/Text';
import { Card } from '../components/Card';
import { Header } from '../components/Header';
import { Icon } from '../components/Icon';
import { ComponentCard } from '../components/ComponentCard';
import { ListItem } from '../components/ListItem';
import { TextField } from '../components/TextField';

export function DemoPage() {
  return (
    <SafeAreaView style={$safeView}>
      <Text style={$title} text="Component List" />
      <ScrollView>
        <View style={$container}>
          <ComponentCard title="Button">
            <Button text="Button" />
          </ComponentCard>
          <ComponentCard title="Text">
            <Text text="Text" />
          </ComponentCard>
          <ComponentCard title="TextField">
            <TextField text="TextField" />
          </ComponentCard>
          <ComponentCard title="AutoImage">
            <AutoImage
              maxWidth={200}
              source={{
                uri: 'https://www.seriouseats.com/thmb/xw1krLC9Yh85qx1wl5jw0BPCWHk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2015__07__20210324-SouthernFriedChicken-Andrew-Janjigian-21-cea1fe39234844638018b15259cabdc2.jpg',
              }}
            />
          </ComponentCard>
          <ComponentCard title="Card">
            <Card
              heading="Card heading"
              footer="Card footer"
              content="Card content"
            />
          </ComponentCard>
          <ComponentCard title="Header">
            <Header title="Header" />
          </ComponentCard>
          <ComponentCard title="Icon">
            <Icon icon="ladybug" color="red" />
          </ComponentCard>
          <ComponentCard title="ListItem">
            <ListItem text="ListItem1" leftIcon="ladybug" />
            <ListItem text="ListItem2" leftIcon="ladybug" />
            <ListItem text="ListItem3" leftIcon="ladybug" />
          </ComponentCard>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const $safeView: ViewStyle = {
  flex: 1,
};
const $container: ViewStyle = {
  flex: 1,
  padding: 8,
};
const $title: TextStyle = {
  fontWeight: '500',
  fontSize: 30,
  marginBottom: 16,
  textAlign: 'center',
};
