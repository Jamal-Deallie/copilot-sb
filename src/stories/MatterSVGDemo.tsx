'use client';

import React, { useLayoutEffect, useRef } from 'react';
import Matter from 'matter-js';
import { useResizeDetector } from 'react-resize-detector';
import { useMedia } from 'react-use';

type MatterProps = { backgroundColor?: string };

const MatterSVGDemo = ({ backgroundColor = 'transparent' }: MatterProps) => {
  const targetRef = useRef<HTMLDivElement>(null!);
  const canvasRef = useRef(null); //canvas ref
  const headingRef = useRef<HTMLDivElement>(null!); //
  const { width, height } = useResizeDetector<HTMLDivElement>({ targetRef });
  const isWide = useMedia('(min-width: 800px)');

  useLayoutEffect(() => {
    if (!canvasRef.current || !targetRef.current) return;

    let Engine = Matter.Engine;
    let Render = Matter.Render;
    let World = Matter.World;
    let Bodies = Matter.Bodies;
    let Runner = Matter.Runner;
    let engine = Engine.create({});
    let render = Render.create({
      element: targetRef.current,
      engine: engine,
      canvas: canvasRef.current,

      options: {
        width: targetRef.current.clientWidth,
        height: targetRef.current.clientHeight,
        background: 'transparent',
        wireframes: false,
        pixelRatio: window.devicePixelRatio,
      },
    });

    Render.run(render);

    const THICCNESS = 65;
    const BODY_SIZE = isWide ? 0.25 : 0.1;
    const headingHeight = isWide ? 0.1 : 0.4;
    const rect = headingRef.current.getBoundingClientRect();
    const headingWidth = rect.width;
    const headingTop = headingHeight * targetRef.current.clientWidth;
    const size =
      BODY_SIZE *
      targetRef.current.clientWidth *
      (100 / targetRef.current.clientWidth);

    const createShape = function (x: number = 0, y: number = 0) {
      return Bodies.polygon(targetRef.current.clientWidth / 2, -400, 8, size, {
        frictionAir: 0.05,
        render: {
          sprite: {
            texture: '/svgs/star-1.svg',
            yScale: size / 75,
            xScale: size / 75,
          },
        },
      });
    };

    for (let i = 0; i < 100; i++) {
      //Matter.Bodies.circle(x, y, radius, [options], [maxSides])
      let circle = Bodies.polygon(
        targetRef.current.clientWidth * 0.75 + i,
        -400,
        8,
        size,
        {
          //A Number that defines the restitution (elasticity) of the body. The value is always positive and is in the range (0, 1). A value of 0 means collisions may be perfectly inelastic and no bouncing may occur. A value of 0.8
          friction: 0.4,
          //A Number that defines the air friction of the body (air resistance). A value of 0 means the body will never slow as it moves through space. The higher the value, the faster a body slows when moving through space. The effects of the value are non-linear.
          frictionAir: 0.03,
          //A Number that defines the restitution (elasticity) of the body. The value is always positive and is in the range (0, 1). A value of 0 means collisions may be perfectly inelastic and no bouncing may occur. A value of 0.8
          restitution: 0.9,
          //A Number that defines the mass of the body

          render: {
            sprite: {
              yScale: size / 75,
              xScale: size / 75,
              texture: '/svgs/star-1.svg',
            },
          },
        }
      );

      World.add(engine.world, circle);
    }

    let ground = Bodies.rectangle(
      targetRef.current.clientWidth / 2,
      targetRef.current.clientHeight + THICCNESS / 2,
      targetRef.current.clientWidth,
      THICCNESS,
      { render: { fillStyle: '#38a3f5' }, isStatic: true }
    );

    let wallLeft = Bodies.rectangle(
      0 - THICCNESS / 2,
      targetRef.current.clientHeight / 2,
      THICCNESS,
      targetRef.current.clientHeight * 5,
      { render: { fillStyle: 'orange' }, isStatic: true }
    );

    let wallRight = Bodies.rectangle(
      targetRef.current.clientWidth + THICCNESS / 2,
      targetRef.current.clientHeight / 2,
      THICCNESS,
      targetRef.current.clientHeight * 5,

      { render: { fillStyle: 'purple' }, isStatic: true }
    );

    let headingContainer = Bodies.rectangle(
      targetRef.current.clientWidth / 2,
      headingTop + 5,
      headingWidth,
      1,
      { render: { fillStyle: 'transparent' }, isStatic: true }
    );

    World.add(engine.world, [ground, wallLeft, wallRight, headingContainer]);
    const runner = Runner.create();
    Runner.run(runner, engine);

    return () => {
      Render.stop(render);
      render.canvas.remove();
      render.textures = {};
      Render.stop(render);
      Runner.stop(runner);
      World.clear(engine.world, false);
      Engine.clear(engine);
    };
  }, [width, height]);

  return (
    <div
      className='relative w-full lg:aspect-video aspect-[195/422] overflow-hidden bg-[#38a3f5]'
      ref={targetRef}>
      <div className='relative z-10 h-full lg:mt-[10%] mt-[40%]'>
        <div className='w-fit text-center mx-auto' ref={headingRef}>
          <h1 className='font-[cartload] uppercase text-4xl lg:text-10xl  text-red-500 heading-shadows leading-none text-shadow'>
            I Develop <br />
            Creative <br />
            Websites
          </h1>
        </div>
      </div>
      <canvas ref={canvasRef} className='top-0 right-0 left-0 absolute z-10' />
    </div>
  );
};

export default MatterSVGDemo;
