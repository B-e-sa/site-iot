"use client"
import Image from "next/image";
import { useState } from "react";
import circles from '../utils/circles.json';
import TendencieInfo from "./components/TendenceInfo";

export default function Home() {

  const [selectedCircle, setSelectedCircle] = useState<number>(5)

  const cord: number[][] = [
    [-120, 120],
    [120, 120],
    [120, -120],
    [-120, -120],
    [0, 0]
  ]

  const printCircles = () => {
    
    const circleElements: JSX.Element[] = []

    for (let i = 0; i < circles.length; i++) {

      const { id, color, icon } = circles[i]

      const [x, y] = [cord[i][0], cord[i][1]]

      const isCircleSelected = selectedCircle === id

      const circleScale = isCircleSelected ? '1.1' : ''

      circleElements.push(
        <div
          onClick={() => setSelectedCircle(id)}
          className={`items-center flex justify-center rounded-full absolute cursor-pointer transition-all duration-300`}
          style={{
            zIndex: 1000,
            transform: `translate(${x}px, ${y}px)`,
            scale: circleScale,
            width: 140,
            height: 140,
            background: color,
          }}
        >
          <Image
            className="-animate-axis-spin z-50 select-none"
            width={80}
            draggable="false"
            height={80}
            alt=""
            src={icon}
          />
          <div className="absolute">
            {isCircleSelected &&
              <svg
                className="rounded-full relative"
                viewBox="-100 -100 200 200"
                xmlns="http://www.w3.org/2000/svg"
                width={170}
                height={170}
              >
                <path fill={color}>
                  <animate
                    repeatCount="indefinite"
                    attributeName="d"
                    dur="2s"
                    values="
                      M44.1,-75.2C58.4,-68.2,72.1,-58.9,79.3,-45.9C86.6,-33,87.4,-16.5,86.3,-0.6C85.3,15.3,82.4,30.6,75.6,44.3C68.8,57.9,58.1,70,44.8,77.1C31.6,84.2,15.8,86.3,0.3,85.9C-15.3,85.4,-30.5,82.4,-44.4,75.7C-58.3,68.9,-70.8,58.5,-79,45.3C-87.2,32.1,-91,16,-91.3,-0.2C-91.7,-16.4,-88.6,-32.9,-80.9,-47C-73.3,-61.2,-61.1,-73,-46.9,-80C-32.7,-87,-16.3,-89.2,-0.7,-88C14.9,-86.7,29.8,-82.1,44.1,-75.2Z;
                      M46,-78C60.3,-71.5,73,-60.5,80.8,-46.7C88.7,-33,91.8,-16.5,90.5,-0.8C89.2,15,83.5,29.9,75.9,44.2C68.3,58.5,59,72.2,46,79.4C33,86.7,16.5,87.5,0.9,86C-14.8,84.5,-29.6,80.7,-43.8,74.2C-57.9,67.6,-71.4,58.3,-78.6,45.5C-85.8,32.7,-86.8,16.3,-86.7,0.1C-86.5,-16.2,-85.2,-32.3,-78.5,-46C-71.7,-59.6,-59.5,-70.7,-45.5,-77.3C-31.5,-84,-15.7,-86.3,0.1,-86.4C15.9,-86.6,31.8,-84.5,46,-78Z;
                      M44.5,-77.4C57.3,-69.7,67.2,-57.1,75.3,-43.4C83.4,-29.6,89.7,-14.8,90.5,0.5C91.3,15.7,86.5,31.4,78.8,45.8C71,60.1,60.4,73.1,46.8,79.9C33.1,86.7,16.6,87.2,0.8,85.8C-15,84.5,-30,81.2,-44,74.7C-58.1,68.2,-71.2,58.4,-79.8,45.4C-88.3,32.5,-92.3,16.2,-91.8,0.3C-91.2,-15.6,-86.1,-31.1,-78.2,-45.4C-70.4,-59.6,-59.8,-72.5,-46.3,-79.8C-32.9,-87.2,-16.4,-89,-0.3,-88.5C15.8,-88,31.7,-85.2,44.5,-77.4Z;
                      M45.1,-78.7C57.9,-70.7,67.5,-57.6,74.4,-43.6C81.3,-29.6,85.7,-14.8,86.9,0.7C88.1,16.2,86.2,32.4,78.6,45.4C71.1,58.3,57.9,67.9,43.9,75.5C29.9,83.1,14.9,88.6,-0.1,88.8C-15.1,88.9,-30.2,83.6,-44.1,76C-57.9,68.3,-70.6,58.2,-78.9,45.1C-87.1,32.1,-90.9,16,-91.3,-0.2C-91.7,-16.5,-88.6,-33,-80.5,-46.1C-72.3,-59.3,-59,-69.2,-44.7,-76.4C-30.4,-83.6,-15.2,-88.2,0.5,-89C16.1,-89.8,32.2,-86.8,45.1,-78.7Z;
                      M44.1,-75.2C58.4,-68.2,72.1,-58.9,79.3,-45.9C86.6,-33,87.4,-16.5,86.3,-0.6C85.3,15.3,82.4,30.6,75.6,44.3C68.8,57.9,58.1,70,44.8,77.1C31.6,84.2,15.8,86.3,0.3,85.9C-15.3,85.4,-30.5,82.4,-44.4,75.7C-58.3,68.9,-70.8,58.5,-79,45.3C-87.2,32.1,-91,16,-91.3,-0.2C-91.7,-16.4,-88.6,-32.9,-80.9,-47C-73.3,-61.2,-61.1,-73,-46.9,-80C-32.7,-87,-16.3,-89.2,-0.7,-88C14.9,-86.7,29.8,-82.1,44.1,-75.2Z;
                    "
                  >

                  </animate>
                </path>
              </svg>}
          </div>
        </div>
      )
    }

    return circleElements
  }

  return (
    <article className="flex items-center justify-center w-screen overflow-hidden">
      <div className="animate-axis-spin w-2/5 flex justify-center items-center">
        {printCircles()}
      </div>
      <TendencieInfo tendenceId={selectedCircle} />
    </article>
  )
}
