import HelloWorld from './HelloWorld';
import Props from './Props';
import State from './State';
import Style from './Style';
import HeightAndWidth from './HeightAndWidth';
import HeightAndWidthFlex from './HeightAndWidthFlex';


const ExampleRoutes = {
  HelloWorld: {
    name: 'Hello World',
    description: 'Hello World!',
    screen: HelloWorld,
  },
  Props: {
    name: 'Props',
    description: '大多数组件在创建时就可以使用各种参数来进行定制。用于定制的这些参数就称为props（属性）。',
    screen: Props,
  },
  State: {
    name: 'State',
    description: '我们使用两种数据来控制一个组件：props和state。props是在父组件中指定，而且一经指定，在被指定的组件的生命周期中则不再改变。 对于需要改变的数据，我们需要使用state。',
    screen: State,
  },
  Style: {
    name: 'Style',
    description: '所有的核心组件都接受名为style的属性。这些样式名基本上是遵循了web上的CSS的命名，只是按照JS的语法要求使用了驼峰命名法，例如将background-color改为backgroundColor',
    screen: Style,
  },
  HeightAndWidth: {
    name: 'Height and Width',
    description: '高度与宽度,React Native中的尺寸都是无单位的，表示的是与设备像素密度无关的逻辑像素点',
    screen: HeightAndWidth,
  },
  HeightAndWidthFlex: {
    name: '弹性（Flex）宽高',
    description: '在组件样式中使用flex可以使其在可利用的空间中动态地扩张或收缩。',
    screen: HeightAndWidthFlex,
  },
};

export default ExampleRoutes;