import React, { HTMLAttributes, PropsWithChildren } from 'react';

// add xmlns="http://www.w3.org/1999/xhtml" to div
declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    xmlns?: string;
  }
}

type AspectRatioPreserveOptions =
  | 'xMinYMin'
  | 'xMidYMin'
  | 'xMaxYMin'
  | 'xMinYMid'
  | 'xMidYMid'
  | 'xMaxYMid'
  | 'xMinYMax'
  | 'xMidYMax'
  | 'xMaxYMax';

export interface ScalingViewProps extends PropsWithChildren {
  children?: React.ReactNode;
  canvasSettings?: {
    aspectRatioPreserveOption?: AspectRatioPreserveOptions;
    mainWidth?: number;
    mainHeight?: number;
    contentX?: number;
    contentY?: number;
    contentWidth?: number;
    contentHeight?: number;
  };
  propsFor?: {
    parentSvg?: React.SVGAttributes<SVGElement>;
    parentForeignObject?: React.SVGAttributes<SVGElement>;
    parentDiv?: HTMLAttributes<HTMLDivElement>;
  };
}

const ScalingView: React.FC<ScalingViewProps> = (props) => {
  const { children, ...otherProps } = props;

  const svgWidth = otherProps.canvasSettings?.mainWidth ?? 100;
  const svgHeight = otherProps.canvasSettings?.mainHeight ?? 100;
  const aspectRatioPreserveOption = otherProps.canvasSettings?.aspectRatioPreserveOption ?? 'xMidYMid meet';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
      preserveAspectRatio={aspectRatioPreserveOption}
      {...(otherProps.propsFor?.parentSvg ?? {})}
      style={{
        ...(otherProps.propsFor?.parentSvg?.style ?? {}),
        padding: 0,
        margin: 0,
        boxSizing: 'border-box',
      }}
    >
      <foreignObject
        {...(otherProps.propsFor?.parentSvg ?? {})}
        style={{
          ...(otherProps.propsFor?.parentForeignObject?.style ?? {}),
          padding: 0,
          margin: 0,
          // paddingRight: 2, // temporary fix for text overflow
          boxSizing: 'border-box',
          width: '100%',
          height: '100%',
        }}
        x={props.canvasSettings?.contentX ?? 0}
        y={props.canvasSettings?.contentY ?? 0}
        width={props.canvasSettings?.contentWidth ?? svgWidth}
        height={props.canvasSettings?.contentHeight ?? svgHeight}
      >
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          {...(otherProps.propsFor?.parentDiv ?? {})}
          style={{
            width: '100%',
            height: '100%',
            ...(otherProps.propsFor?.parentDiv?.style ?? {}),
          }}
        >
          {children}
        </div>
      </foreignObject>
    </svg>
  );
};

export { ScalingView };
