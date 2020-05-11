import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import styled from 'styled-components';

const MazWaves = styled.div`
  transform: translateZ(0);

  .svg-waves-maz__wave--1 {
    fill: ${(props) => props.theme.colors.gray};
  }
  .svg-waves-maz__wave--2 {
    fill: ${(props) => props.theme.colors.accent1};
  }
  .svg-waves-maz__wave--3 {
    fill: ${(props) => props.theme.colors.gray2};
  }
  .svg-waves-maz__wave--4 {
    fill: ${(props) => props.theme.colors.primaryDark};
  }
`;

const SvgWavesMaz = (props) => {
  const shouldReduceMotion = useReducedMotion();

  const container = shouldReduceMotion
    ? {}
    : {
        hidden: {
          y: 0,
          transition: {
            duration: 9,
            delay: 3,
            yoyo: Infinity,
            ease: 'easeInOut',
          },
        },
        show: {
          y: 80,
          transition: {
            staggerChildren: 0.5,
            duration: 7,
            delay: 3,
            yoyo: Infinity,
            ease: 'easeInOut',
          },
        },
      };

  const wavesTransition = {
    yoyo: Infinity,
    duration: 5,
    ease: 'easeInOut',
  };

  const item = shouldReduceMotion
    ? {}
    : {
        hidden: { y: 100, transition: { ...wavesTransition } },
        show: { y: 0, transition: { ...wavesTransition } },
      };

  const item2 = shouldReduceMotion
    ? {}
    : {
        hidden: { y: 100, x: 250, transition: { ...wavesTransition } },
        show: { y: 0, x: 0, transition: { ...wavesTransition } },
      };

  return (
    <>
      <MazWaves>
        <svg viewBox="0 0 1366.16 554.6" {...props}>
          <motion.g
            variants={container}
            initial="hidden"
            animate="show"
            className="svg-waves-maz__group"
          >
            <motion.g variants={item}>
              <path
                className="svg-waves-maz__wave svg-waves-maz__wave--1"
                d="M1161.12 260a242 242 0 0 0-35.18-11.47c-74.1-18.4-166.51-10.35-217.07 2.15-12 3-21.18 6.84-28.15 9.36-47.59 17.19-145.89 21.9-272.12 0a503.636 503.636 0 0 0-48.15-5.95 549.06 549.06 0 0 0-90.6.9c-60.26 5.42-108.16 18.55-139.57 22.28-45.77 5.43-107.91-.91-192.47-19q-19.38-4.14-40.34-9.1c-42.19-10-74.12-10.24-97.26-6.94v17.4L.25 694l1365.75-.19V254.06c-49.54 16.33-126.47 38.83-204.88 5.94z"
                transform="translate(.13 -237.73)"
              />
            </motion.g>

            <motion.g variants={item2}>
              <path
                className="svg-waves-maz__wave svg-waves-maz__wave--2"
                d="M1260.56 336.86c-80.84-3.17-127.54 10.63-181.43 23.38s-97-9.54-138.32-17-106-13.78-149.1 0-55.68 19.12-138.32 17-77.25-34-132.93-33.95-97 32.92-167.06 20.19-98.8-4.23-176 3.21-48.5 6.38-152.69-11.65c-9.3-1.61-17.45-3-24.68-4.16L0 694l1366-.2V355.12c-48.24-4.66-37.48-15.59-105.44-18.26z"
                transform="translate(.13 -237.73)"
              />
            </motion.g>

            <motion.g variants={item}>
              <path
                className="svg-waves-maz__wave svg-waves-maz__wave--3"
                d="M1343.6 436.07c-34.61 18.51-75.32 4.95-106.88-14.79s-91.61-24.66-119.09-3.68-69.21 27.15-113 5-69.22-22.2-100.77-4.92-75.32 18.52-103.82 11.12-57-28.37-104.84-9.85-44.79 9.88-95.68-7.39-39.7-16-83.47-1.22-75.31 3.66-139.44-11.15-86.52-14.79-141.49 5-93.64 43.19-143.52 0C59.53 376.4 22.4 356.81 0 346.35v347.74l1366-.19V425.38c-6.65 2.77-14.14 6.27-22.4 10.69z"
                transform="translate(.13 -237.73)"
              />
            </motion.g>

            <motion.g variants={item}>
              <path
                className="svg-waves-maz__wave svg-waves-maz__wave--4"
                d="M1291.49 503.58c-34.45 16.53-96.27 23.62-123.64 24.8s-77-34.22-121.61-15.33-90.24 20.08-145.93 3.57-85.13-17.69-121.61-1.16-76 5.91-124.65-3.52-67.9-11.79-103.37 1.19-70.94 13-123.64-4.7-92.23-17.69-131.75 0-77 18.89-126.68-7.06S77.39 473.06 45 494.31c-15.06 9.87-31.65 13.37-45.1 14.29v283.72l1366.1-.19V498.19c-24.45-5.13-52.87-4.99-74.51 5.39z"
                transform="translate(.13 -237.73)"
              />
            </motion.g>
          </motion.g>
        </svg>
      </MazWaves>
    </>
  );
};

export default SvgWavesMaz;
