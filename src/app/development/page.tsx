"use client"
import c from '../../../public/programming-icons/c.png'
import cpp from '../../../public/programming-icons/cpp.svg'
import python from '../../../public/programming-icons/python.svg'
import CircularIcon from "../components/CircularIcon"
import Title from '../components/Title'
import Topic from '../components/Topic'

export default function Development() {

    return (
        <article className="w-3/5 mx-auto text-lg">

            <Topic>
                <Title string="What is IoT development?" />
                <p>
                    The development of IoT (Internet of Things) solutions involves various stages and aspects. It is a technology that has gained increasing relevance in various sectors, such as home automation, industry, healthcare, agriculture, among others. It enables the connection and communication between physical devices and computational systems, creating an intelligent and interconnected ecosystem.
                    Behind IoT, there are several programming languages and technologies that drive the development of innovative solutions and intelligent applications for your day-to-day life. Here are some of the most popular languages and technologies:
                </p>
            </Topic>

            <Topic>
                <Title string='Which languages are used in IoT development?' />
                <div className="flex justify-evenly my-5">
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
            </Topic>

            <Topic>
                <Title string="I want to develop IoT technologies!" />
                <div>
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
                        encrypted-media;
                        picture-in-picture; 
                        web-share
                    "
                    />
                </div>

                <Topic>
                    <Title string="Why not practice a little?" />
                    <div>
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
                </Topic>
            </Topic>
        </article >
    )
}