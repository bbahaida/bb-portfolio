import { motion } from "framer-motion";
import React, { ComponentType, forwardRef, memo } from "react";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

// Define a generic function that takes a React component and an idName string
// and returns a new component with forwarded refs.
export const SectionWrapper = <P extends any>(
  Component: ComponentType<P>,
  idName: string
): React.FC<P> => {
  // Define the wrapped component using memo for performance optimization and forwardRef to handle refs
  const WrappedComponent = memo(
    forwardRef<HTMLDivElement, P>((props, ref) => (
      <motion.section
        variants={staggerContainer(0.1, 1)}
        viewport={{ once: true, amount: 0.25 }}
        initial="hidden"
        whileInView="show"
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        {/* Spread the incoming props to the Component and attach the ref */}
        <Component {...props} ref={ref} />
      </motion.section>
    ))
  );

  // Assign a display name for development and debugging purposes
  WrappedComponent.displayName = `SectionWrapper(${
    Component.displayName || Component.name || "Component"
  })`;

  return WrappedComponent;
};
