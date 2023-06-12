"use client"
import Box from "@mui/material/Box";
import { useState } from "react";
import TendencieInfo from "./components/TendenceInfo";
import circles from '../utils/circles.json'
import Image from "next/image";

export default function Home() {

  // TODO:
  // CIRCLES:
  //   > middle circle should be the main page ~~or the selected page
  //   > other cicles should be the adjacent pages
  //   > add images respective images to the circles
  //   > selected circle should be the text content on the side
  //   > selected circle should be bigger than the others ~~or go to the middle
  //
  // TEXT:
  // > must have a title, paragraph and "find out more about it ->"
  //   > do every text as object
  //   > add arrow icon to the side

  const [selectedCircle, setSelectedCircle] = useState<number>(5)

  const cord = [
    [-120, 120],
    [120, 120],
    [120, -120],
    [-120, -120],
    [0, 0]
  ]

  const printCircles = () => {
    const circleElements = []

    for (let i = 0; i < circles.length; i++) {
      circleElements.push(
        <Box
          onClick={() => setSelectedCircle(circles[i].id)}
          className="rounded-full absolute cursor-pointer"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 140,
            height: 140,
            transform: `
              translate(${cord[i][0]}px, ${cord[i][1]}px) 
              ${selectedCircle === circles[i].id ? 'scale(1.1, 1.1)' : ''}`,
            background: circles[i].color
          }}
        >
          <Image
            className="-animate-axis-spin"
            width={80}
            height={80}
            alt=""
            src={circles[i].icon}
          />
        </Box>
      )
    }

    return circleElements
  }

  return (
    <article className="flex items-center justify-center w-screen">
      <div className="animate-axis-spin w-2/5 flex justify-center items-center">
        {printCircles()}
      </div>
      <TendencieInfo tendenceId={selectedCircle} />
    </article>
  )
}
