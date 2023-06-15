"use client"
import { List, ListItemButton, ListItemText } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from 'react';
import topics from '../../utils/topics.json';
import Text from "../components/Text";

export default function About() {

    const [selectedTopic, setSelectedTopic] = useState("#iot-importance")

    const handleListItemClick = (topic: string) => {
        setSelectedTopic(topic)
    }

    return (
        <div className="flex p-7 h-fit">
            <div>
                <Box sx={{
                    width: 200,
                    maxWidth: 200,
                    marginRight: 10,
                    position: "sticky",
                    top: 0
                }}>        
                    <List aria-label="main page topics" className="p-3 -mt-6">
                        {topics.map((item) => {
                            return (
                                <ListItemButton
                                    key={item.id}
                                    selected={selectedTopic === item.id}
                                    onClick={() => handleListItemClick(item.id)}
                                >
                                    <a href={`#${item.id}`}>
                                        <ListItemText
                                            className={`${selectedTopic === item.id ? "border-l-zinc-800" : "border-l-zinc-300"} border-l-2 pl-2 w-44 h-14 flex items-center`}
                                            primary={item.title}
                                        />
                                    </a>
                                </ListItemButton>
                            )
                        })}
                    </List>
                </Box>
            </div>
            <div >
                {topics.map(item => {
                    return (
                        <div key={item.title} className="mb-11" >
                            <h2 className="font-bold text-xl " id={item.id}>
                                {item.title}
                            </h2>
                            <Text
                                string={item.content}
                                style={{ marginBottom: 15 }}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}