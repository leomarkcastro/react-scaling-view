import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ScalingView } from './ScalingView';

export default {
  title: 'Scaling View',
  component: ScalingView,
} as ComponentMeta<typeof ScalingView>;

const Template: ComponentStory<typeof ScalingView> = (args) => {
  return (
    <>
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
              src="https://www.coindesk.com/resizer/mQZ_9BEZ03jLBF2mjGzcoNOIUl8=/400x300/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/coindesk/URUQSUQQQ5FPBM7AFMX7FKSRCQ.jpg"
            />
          </div>
        </ScalingView>
      </div>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
