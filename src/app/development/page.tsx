"use client"
import c from '../../../public/programming-icons/c.png'
import cpp from '../../../public/programming-icons/cpp.svg'
import python from '../../../public/programming-icons/python.svg'
import CircularIcon from "../components/CircularIcon"
import Title from '../components/typography/Title'
import Topic from '../components/typography/Topic'
import Text from '../components/typography/Text'
import { useContext } from 'react'
import { Context } from '../context/Context'

export default function Development() {
    const { language } = useContext(Context)

    const iWantToDevelopTitle = language === 'pt'
        ? "Eu quero desenvolver tecnologias IoT!"
        : "I want to develop IoT technologies!"

    const iWantToDevelop = language === 'pt'
        ? <p>
            E se <b>você</b> quiser desenvolver essas tecnologias emergentes?
            Nesta era digital em constante evolução, o poder de moldar o mundo ao nosso redor está ao nosso alcance,
            e qualquer pessoa pode embarcar na emocionante jornada de desenvolver seus próprios
            dispositivos IoT. As possibilidades ilimitadas do IoT nos convidam a explorar e
            redefinir os limites da inovação.
        </p>
        : <p>
            So, what if <b>you</b> want to to develop such emergent technologies?
            In this ever-evolving digital era, the power to shape the world around us lies within our grasp,
            and anyone can embark on the thrilling journey of developing their very own
            IoT devices. The limitless possibilities of IoT beckon us to explore and
            redefine the boundaries of innovation.
        </p>

    const whyNotPracticeTitle = language === 'pt'
        ? 'Por quê não praticar um pouco?'
        : 'Why not practice a little?'

    const whyNotPractice = language === 'pt'
        ? <p>
            Se você quiser ver um protótipo real, aqui está um simulador de programação de placa Arduino. Ele "simula" um semáforo e você pode abrir o código com um resumo e comentários explicativos sobre como o algoritmo funciona (observe que para alterar o código você precisa acessar o <a
                className='text-blue-600'
                target='_blank'
                href="https://www.tinkercad.com/login?next=%2Fthings%2F9DcI6djuOvw-copy-of-arduino-traffic-light-circuit%2Feditel">
                editor de projetos no site TinkerCad
            </a> e fazer login).
        </p>
        : <p>
            if you want to see a real prototype, here's an Arduino board programming simulator.
            It "simulates" a traffic light and you can open the code with summary and explanatory comments about
            how the algorithm works
            (note that to change the code you need to enter <a className='text-blue-600' target='_blank' href="https://www.tinkercad.com/login?next=%2Fthings%2F9DcI6djuOvw-copy-of-arduino-traffic-light-circuit%2Feditel">
                the project editor on the TinkerCad website
            </a> and log in.).
        </p>

    const artduinoIntroduction = language === 'pt'
        ? 'Logo abaixo está um video que irá lhe introduzir ao Arduíno, um software para desenvolvimento de IoTs de uma forma simples e intuitiva'
        : 'Right below there is a video that will introduce you to Arduino, a software for developing IoTs in a simple and intuitive way.'


    const whatIsTitle = language === 'pt'
        ? "O que é desenvolvimento IoT?"
        : "What is IoT development?"

    const whatIs = language === 'pt'
        ? "O desenvolvimento de soluções de IoT (Internet das Coisas) envolve várias etapas e aspectos. É uma tecnologia que tem ganhado relevância crescente em diversos setores, como automação residencial, indústria, saúde, agricultura, entre outros. Ela possibilita a conexão e comunicação entre dispositivos físicos e sistemas computacionais, criando um ecossistema inteligente e interconectado. Por trás da IoT, existem várias linguagens de programação e tecnologias que impulsionam o desenvolvimento de soluções inovadoras e aplicativos inteligentes para o seu dia a dia. Continue lendo para saber mais sobre isso."
        : 'The development of IoT (Internet of Things) solutions involves various stages and aspects. It is a technology that has gained increasing relevance in various sectors, such as home automation, industry, healthcare, agriculture, among others. It enables the connection and communication between physical devices and computational systems, creating an intelligent and interconnected ecosystem. Behind IoT, there are several programming languages and technologies that drive the development of innovative solutions and intelligent applications for your day - to - day life.Continue reading to learn more about it.'

    const whichLanguagesTitle = language === 'pt'
        ? 'Que línguas são utilizadas no desenvolvimento de IoTs?'
        : 'Which languages are used in IoT development?'

    const whichLanguagesPython = language === 'pt'
        ? 'Python se destaca na comunidade de IoT devido à sua sintaxe simples e legibilidade. É uma linguagem de alto nível amplamente utilizada para desenvolver aplicações de IoT e processar dados coletados de dispositivos.'
        : 'Python stands out in the IoT community due to its simple syntax and readability. It is a widely used high - level language for developing IoT applications and processing data collected from devices'

    const whichLanguagesC = language === 'pt'
        ? 'C e C++ são duas linguagens relacionadas e altamente valorizadas no campo de IoT devido à sua eficiência e baixo consumo de recursos. Elas são frequentemente usadas em dispositivos de IoT com capacidades limitadas, permitindo a criação de aplicativos rápidos e eficientes.'
        : 'C and C++ are two related and highly valued languages in the field of IoT due to their efficiency and low resource consumption. They are often used in IoT devices with limited capabilities, enabling the creation of fast and efficient applications.'

    return (
        <article className="w-3/5 mx-auto text-md">

            <Topic>
                <Title string={whatIsTitle} />
                <Text string={whatIs} />
            </Topic>

            <Topic>
                <Title string={whichLanguagesTitle} />
                <div className="flex justify-evenly my-5">
                    <div className="w-2/5">
                        <CircularIcon
                            width={100}
                            alt="python"
                            backgroundColor="bg-amber-500"
                            src={python}
                        />
                        <Text string={whichLanguagesPython} />

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
                        <Text string={whichLanguagesC} />
                    </div>
                </div>
            </Topic>

            <Topic>
                <Title string={iWantToDevelopTitle} />
                <div>
                    {iWantToDevelop}
                    <Text
                        string={artduinoIntroduction}
                    />
                    <iframe
                        width="100%"
                        height="504"
                        style={{ marginTop: 6 }}
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
                    <Title string={whyNotPracticeTitle} />
                    <div>
                        {whyNotPractice}
                        <iframe
                            style={{ marginTop: 6 }}
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