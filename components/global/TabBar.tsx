import { icons } from '@/constants';
import { View, Platform } from 'react-native';
import { useLinkBuilder } from '@react-navigation/native';
import { Text, PlatformPressable } from '@react-navigation/elements';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

const BarTab = ({ Icon, label, focused }: { Icon: any, label?: string | undefined | null, focused: boolean }) => {
  return (
    <View className="h-24 w-24 flex-col items-center justify-center">
      <Icon />
      <Text style={{
        color: focused ? '#FF405D' : '#ffffff',
        fontFamily: 'Lexend',
        textTransform: 'capitalize'
      }}>
        {label}
      </Text>
    </View>
  )
}

const TabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const { buildHref } = useLinkBuilder();

  const iconList = [icons.Home, icons.Group, icons.Add, icons.ArrowSplit, icons.Person];

  const DefaultIcon = () => (
    <Text style={{ color: '#ffffff', fontSize: 16 }}>?</Text>
  );


  return (
    <View className='flex flex-row items-center justify-between bg-grey-600'>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };




        const IconComponent = iconList[index] || DefaultIcon;

        console.log(`Icon for route ${route.name}:`, IconComponent);
        return (
          <PlatformPressable
            key={route.name}
            href={buildHref(route.name, route.params)}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <BarTab
              label={route.name}
              focused={isFocused}
              Icon={() => <IconComponent size={32} fill={`${isFocused ? '#FF405D' : '#ffffff'}`} />}
            />

          </PlatformPressable>
        );
      })}
    </View>
  );
}

export default TabBar;
