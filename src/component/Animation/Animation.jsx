import React from 'react'
import { useSpring, animated } from 'react-spring'


const Animation = () => {
    function MyComponent() {
        const animation = useSpring({
          from: { opacity: 0 },
          to: { opacity: 1 },
          config: { duration: 500 },
        });
      
        return (
          <animated.div style={animation}>
            {/* Your content goes here */}
          </animated.div>
        );
      }

  return (
    <div>{MyComponent()}</div>
  )
}

export default Animation