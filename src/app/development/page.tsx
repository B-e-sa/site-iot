"use client"
import c from '../../../public/programming-icons/c.png'
import cpp from '../../../public/programming-icons/cpp.svg'
import python from '../../../public/programming-icons/python.svg'
import { Typography } from "@mui/material"
import CircularIcon from "../components/CircularIcon"
import Link from 'next/link'

export default function Development() {

    // 

    const pageText = `
    The development of IoT (Internet of Things) solutions involves various stages and aspects. It is a technology that has gained increasing relevance in various sectors, such as home automation, industry, healthcare, agriculture, among others. It enables the connection and communication between physical devices and computational systems, creating an intelligent and interconnected ecosystem.
    Behind IoT, there are several programming languages and technologies that drive the development of innovative solutions and intelligent applications for your day-to-day life. Here are some of the most popular languages and technologies:
    `

    const pageCode = `
    // * = tradução para linguagem humana


void setup()// Configuração inicial do código, que ocorre
            // antes da execução do loop (linha 12)
{
  pinMode(0, OUTPUT); // Define pino 0 (vermelho)
  pinMode(1, OUTPUT); // ----------- 1 (amarelo)
  pinMode(2, OUTPUT); // ----------- 2 (verde)
}

void loop() // Inicia um loop, onde o código é iniciado 
            // e repetido milhares de vezes por segundo
  
{
  digitalWrite(2, HIGH); // *Seleciona o pino 2 (verde)
                         // e determina sua voltagem
                         // como HIGH (~3.3 Volts), ligando-o
  
  delay(100);            // Espera 100 milisegundos para ler a 
                         // proxima linha de código
                         // 
                         // *Atrasar 100 ms
  
  digitalWrite(2, LOW);  // Desliga o pino 2 (voltagem mínima).
                         //
                         // *Seleciona o pino de valor 2
                         // e determina sua voltagem 
                         // como LOW (~0 Volts), desligando-o
  delay(100);
  
  digitalWrite(1, HIGH); // Liga pino 1
  
  delay(5000);
  
  digitalWrite(1, LOW);  // Desliga pino 1
  
  digitalWrite(0, HIGH); // Liga pino 0
  
  delay(1000);
  
  digitalWrite(0, LOW);  // Desliga pino 0
}
    `

    return (
        <article className="w-3/5 text-justify mx-auto">

            <div className='mb-5'>
                <Typography variant="h3" fontSize={30}>What is IoT development?</Typography>
                <div>
                    {pageText.split('\n').map((paragraph) => {
                        return <p className="mb-3">
                            {paragraph}
                        </p>
                    })}
                </div>
            </div>

            <div className='mb-3'>
                <Typography variant="h3" fontSize={30}>
                    Which languages are used in IoT development?
                </Typography>
                <div className="flex justify-evenly">
                    <div className="w-2/5">
                        <CircularIcon
                            width={100}
                            alt="python"
                            backgroundColor="bg-amber-500"
                            src={python}
                        />
                        <p>
                            Python stands out in the IoT community due to its simple syntax and readability.
                            It is a widely used high-level language for developing IoT applications and processing data
                            collected from devices
                        </p>
                    </div>

                    <div className="w-2/5">
                        <div className="flex justify-center">
                            <CircularIcon
                                width={100}
                                alt="c"
                                backgroundColor="bg-sky-300"
                                src={c}
                            />
                            <CircularIcon
                                width={100}
                                alt="c plus plus"
                                backgroundColor="bg-sky-500"
                                src={cpp}
                            />
                        </div>
                        <p>
                            C and C++ are two related and highly valued languages in the field of IoT due to their
                            efficiency and low resource consumption.
                            They are often used in IoT devices with limited capabilities,
                            enabling the creation of fast and efficient applications.
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <Typography variant="h3" fontSize={30}>
                    I want to develop IoT technologies!
                </Typography>
                <p>
                    So, what if <b>you</b> want to to develop such emergent technologies?
                    In this ever-evolving digital era, the power to shape the world around us lies within our grasp,
                    and anyone can embark on the thrilling journey of developing their very own
                    IoT devices. The limitless possibilities of IoT beckon us to explore and
                    redefine the boundaries of innovation.
                </p>
                <p>
                    Right below there is a video that will introduce you to Arduino, a software for developing IoTs
                    in a simple and intuitive way.
                </p>
                <iframe
                    width="100%"
                    height="504"
                    src="https://www.youtube.com/embed/1ENiVwk8idM"
                    title="Arduino in 100 Seconds"
                    allow="
                        accelerometer; 
                        autoplay; 
                        clipboard-write; 
                        encrypted-media; 
                        gyroscope; 
                        picture-in-picture; 
                        web-share
                    "
                />

                <div>
                    <Typography variant="h3" fontSize={30}>
                        Why not practice a little?
                    </Typography>
                    <p>
                        if you want to see a real prototype, here's an Arduino board programming simulator.
                        It "simulates" a traffic light and you can open the code with summary and explanatory comments about
                        how the algorithm works
                        (note that to change the code you need to enter <a className='text-blue-600' target='_blank' href="https://www.tinkercad.com/login?next=%2Fthings%2F9DcI6djuOvw-copy-of-arduino-traffic-light-circuit%2Feditel">
                            the project editor on the TinkerCad website
                        </a> and log in.).
                    </p>
                    <iframe
                        width="100%"
                        height="453"
                        src="https://www.tinkercad.com/embed/9DcI6djuOvw?editbtn=1"
                    />
                </div>
            </div>
        </article >
    )
}