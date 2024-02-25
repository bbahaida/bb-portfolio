import { motion } from "framer-motion";
import React, { ComponentType, forwardRef, memo, RefAttributes } from "react";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

export function SectionWrapper<P>(
  Component: ComponentType<P>,
  idName: string
): React.ComponentType<P & RefAttributes<HTMLDivElement>> {
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
        <Component {...props} ref={ref as any} />
      </motion.section>
    ))
  );

  WrappedComponent.displayName = `SectionWrapper(${
    Component.displayName || Component.name || "Component"
  })`;

  // Return the wrapped component directly without explicitly defining it as React.FC
  return WrappedComponent as React.ComponentType<
    P & RefAttributes<HTMLDivElement>
  >;
}
