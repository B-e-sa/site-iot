"use client"
import { List, ListItemButton, ListItemText } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from 'react';
import topics from '../../utils/topics.json';
import Text from "../components/Text";
import Title from "../components/Title";
import { useContext } from 'react'

export default function About() {

    const [selectedTopic, setSelectedTopic] = useState("#iot-importance")

    const handleListItemClick = (topic: string) => {
        setSelectedTopic(topic)
    }

    const setBorderColor = (id: string) => {
        if (selectedTopic === id) {
            return false
                ? "border-l-zinc-400"
                : "border-l-zinc-800"
        }

        return false
            ? "border-l-zinc-700"
            : "border-l-zinc-400"
    }

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
                        {topics.map(({ id, title }) => {
                            return (
                                <ListItemButton
                                    key={id}
                                    selected={selectedTopic === id}
                                    onClick={() => handleListItemClick(id)}
                                >
                                    <a href={`#${id}`}>
                                        <ListItemText
                                            style={{ color: false ? "white" : "black" }}
                                            className={`${setBorderColor(id)} border-l-2 pl-2 w-44 h-14 flex items-center`}
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
                {topics.map(({ id, title, content }) => {
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