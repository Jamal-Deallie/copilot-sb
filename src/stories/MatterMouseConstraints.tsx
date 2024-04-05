'use client';
import React, { useLayoutEffect, useRef } from 'react';
import { useMeasure } from 'react-use';
import Matter from 'matter-js';
import { useResizeDetector } from 'react-resize-detector';

type MatterProps = { backgroundColor?: string };

const MatterMouseConstraints = ({
  backgroundColor = 'transparent',
}: MatterProps) => {
  //   const [ref, { width }] = useMeasure<HTMLDivElement>();
  const targetRef = useRef<HTMLDivElement>(null!);
  const canvasRef = useRef(null); //canvas ref
  const headingRef = useRef<HTMLDivElement>(null!);

  const { width, height } = useResizeDetector<HTMLDivElement>({ targetRef });
  useLayoutEffect(() => {
    if (!canvasRef.current || !targetRef.current) return;

    let Engine = Matter.Engine;
    let Render = Matter.Render;
    let World = Matter.World;
    let Body = Matter.Body;
    let Bodies = Matter.Bodies;
    let Runner = Matter.Runner;
    let Composites = Matter.Composites;
    let Composite = Matter.Composite;

    let engine = Engine.create({});

    let render = Render.create({
      element: targetRef.current,
      engine: engine,
      canvas: canvasRef.current,

      options: {
        width: targetRef.current.clientWidth,
        height: targetRef.current.clientHeight,
        background: backgroundColor,
        wireframes: false,
        showAngleIndicator: true,
        pixelRatio: window.devicePixelRatio,
      },
    });

    const THICCNESS = 60;
    let boxA = Bodies.rectangle(400, 200, 80, 80);
    let boxB = Bodies.rectangle(450, 50, 80, 80);

    // Matter.Bodies.rectangle(x, y, width, height, [options])
    let ground = Bodies.rectangle(
      targetRef.current.clientWidth / 2,
      targetRef.current.clientHeight + THICCNESS / 2,
      targetRef.current.clientWidth,
      THICCNESS,
      { render: { fillStyle: '#38a3f5' }, isStatic: true }
    );

    console.log([
      targetRef.current.clientWidth / 2,
      targetRef.current.clientHeight + THICCNESS / 2,
      targetRef.current.clientWidth,
      THICCNESS,
    ]);
    // Matter.Bodies.rectangle(x, y, width, height, [options])
    let wallLeft = Bodies.rectangle(
      0 - THICCNESS / 2,
      targetRef.current.clientHeight / 2,
      THICCNESS,
      targetRef.current.clientHeight * 5,
      { render: { fillStyle: 'orange' }, isStatic: true }
    );
    // Matter.Bodies.rectangle(x, y, width, height, [options])
    let wallRight = Bodies.rectangle(
      targetRef.current.clientWidth + THICCNESS / 2,
      targetRef.current.clientHeight / 2,
      THICCNESS,
      targetRef.current.clientHeight * 5,
      //isStatic - A flag that indicates whether a body is considered static. A static body can never change position or angle and is completely fixed.
      { render: { fillStyle: 'purple' }, isStatic: true }
    );

    for (let i = 0; i < 5; i++) {
      //Matter.Bodies.circle(x, y, radius, [options], [maxSides])
      let circle = Bodies.circle(i * 100, 10, 30,  {
        //A Number that defines the restitution (elasticity) of the body. The value is always positive and is in the range (0, 1). A value of 0 means collisions may be perfectly inelastic and no bouncing may occur. A value of 0.8
        friction: 0.3,
        //A Number that defines the air friction of the body (air resistance). A value of 0 means the body will never slow as it moves through space. The higher the value, the faster a body slows when moving through space. The effects of the value are non-linear.
        frictionAir: 0.01,
        //A Number that defines the restitution (elasticity) of the body. The value is always positive and is in the range (0, 1). A value of 0 means collisions may be perfectly inelastic and no bouncing may occur. A value of 0.8
        restitution: 0.8,
        //A Number that defines the mass of the body
        density: 0.75,
      });
      World.add(engine.world, circle);
    }

    let mouse = Matter.Mouse.create(render.canvas);

    let mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    Render.run(render);
    World.add(engine.world, [
      ground,
      boxA,
      boxB,
      wallLeft,
      mouseConstraint,
      wallRight,
    ]);
    const runner = Runner.create();
    Runner.run(runner, engine);

    return () => {
      Render.stop(render);
      render.canvas.remove();
      render.textures = {};
      Render.stop(render);
      World.clear(engine.world, false);
      Engine.clear(engine);
    };
  }, [width, height]);

  return (
    <div className='relative w-full h-[98svh] overflow-hidden' ref={targetRef}>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default MatterMouseConstraints;
