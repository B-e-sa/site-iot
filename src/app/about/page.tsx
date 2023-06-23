"use client"
import isThemeDark from "@/utils/isThemeDark";
import { List, ListItemButton, ListItemText } from "@mui/material";
import Box from "@mui/material/Box";
import { useContext, useState } from 'react';
import Text from "../components/typography/Text";
import Title from "../components/typography/Title";
import useFetch from "../hooks/useFetch";
import { Context } from "../context/Context";
import { ITopic } from "@/types";

export default function About() {

    const [selectedTopicId, setSelectedTopicId] = useState("#iot-importance")

    const { language } = useContext(Context)

    const { value } = useFetch('http://localhost:3000/api/topics', {
        method: 'POST',
        body: JSON.stringify({ lang: language })
    }, [language])

    const handleListItemClick = (topic: string) => {
        setSelectedTopicId(topic)
    }

    const setListBorderColor = (id: string) => {
        const isTopicSelected = selectedTopicId === id

        const light = 'border-l-zinc-400'
        const dark = 'border-l-zinc-600'

        const selectedBorderColor = isThemeDark()
            ? light
            : dark

        const unselectedBorderColor = isThemeDark()
            ? dark
            : light

        return isTopicSelected
            ? selectedBorderColor
            : unselectedBorderColor
    }

    if (!value) return

    return (
        <div className="flex p-7 h-fit">
            <div>
                <Box
                    width={200}
                    maxWidth={200}
                    marginRight={10}
                    position="sticky"
                    top={0}
                >
                    <List aria-label="main page topics" className="p-3 -mt-6">
                        {(value as ITopic[]).map(({ id, title }) => {
                            return (
                                <ListItemButton
                                    key={id}
                                    onClick={() => handleListItemClick(id)}
                                >
                                    <a href={`#${id}`}>
                                        <ListItemText
                                            className={`${setListBorderColor(id)}  border-l-2 pl-2 w-44 h-14 flex items-center`}
                                            primary={title}
                                        />
                                    </a>
                                </ListItemButton>
                            )
                        })}
                    </List>
                </Box>
            </div>
            <div >
                {(value as ITopic[]).map(({ id, title, content }) => {
                    return (
                        <div key={title} className="mb-8" id={id}>
                            <Title string={title} mb={1} />
                            <Text
                                string={content}
                                style={{ marginBottom: 15 }}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}