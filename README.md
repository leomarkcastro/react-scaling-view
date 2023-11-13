# React Scaling View

When designing components for the web, we usually think of how would we create a component that is fluid in width and height. This is because we want our components to be responsive to different screen sizes. However, there are times when we want to create a component that is fixed in width and height. This is usually the case when we want to create a modal or a dialog. There are also times when we are creating pixel perfect designs and we want to create a component that is fixed in width and height.

This is where could use React Scaling View. It takes a dom component and a desired content width and height. After supplying those info, your component becomes aspect ratio responsive. This means that your component will always have the same aspect ratio regardless of the screen size. This is useful when you want to create a component that is fixed in width and height.

## Demo

![Demo](https://raw.githubusercontent.com/leomarkcastro/react-scaling-view/main/demo.gif)

## Components

```jsx
export interface ScalingViewProps {
  children?: React.ReactNode;
  canvasSettings?: {
    aspectRatioPreserveOption?: AspectRatioPreserveOptions,
    mainWidth?: number,
    mainHeight?: number,
  };
  propsFor?: {
    parentSvg?: React.SVGAttributes<SVGElement>,
    parentForeignObject?: React.SVGAttributes<SVGElement>,
    parentDiv?: HTMLAttributes<HTMLDivElement>,
  };
}
```

Contains the dialog component.

- `children`: This is the content of the scalable view.
- `canvasSettings.aspectRatioPreserveOption`: This is the aspect ratio preserve option. The default value is `xMidYMid meet`. You can read more about this in [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio).
- `canvasSettings.mainWidth`: This is the desired native width of the content. This will set the pixel size of where the children component would be rendered. To resize the actual scalable width, use `propsFor.parentSvg.width` The default value is `100`.
- `canvasSettings.mainHeight`: This is the desired native height of the content. This will set the pixel size of where the children component would be rendered. To resize the actual scalable height, use `propsFor.parentSvg.height` The default value is `100`.
- `propsFor.parentSvg`: This will pass the props to the parent svg element.

- `propsFor.parentForeignObject`: This will pass the props to the parent foreignObject element.
- `propsFor.parentDiv`: This will pass the props to the parent div element.

## Sample

```jsx
import { ScalingView, ScalingViewProps } from 'react-scaling-view';

const app = () => {
  return (
    <div
      style={{
        width: '95vw',
        height: '95vh',
      }}
    >
      <ScalingView
        canvasSettings={{
          mainWidth: 475,
          mainHeight: 475,
        }}
        propsFor={{
          parentSvg: {
            width: '100%',
            height: '100%',
          },
        }}
      >
        <div
          style={{
            borderRadius: '50px',
            width: '100%',
            height: '100%',
            backgroundColor: '#C08F27',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <p
            style={{
              fontSize: '75px',
              paddingBottom: '10px',
              fontFamily: 'comic sans ms',
            }}
          >
            Doge!
          </p>
          <img
            style={{
              borderRadius: '50px',
            }}
            src="doge.jpg"
          />
        </div>
      </ScalingView>
    </div>
  );
};
```

### License

MIT license, Copyright (c) Leo Mark Castro. For more information see `LICENSE`.
