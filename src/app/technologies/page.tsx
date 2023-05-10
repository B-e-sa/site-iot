"use client"
import { List, ListItemButton, ListItemText } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from 'react';
import topics from '../../utils/topics.json';

export default function Technologies() {

    const [selectedTopic, setSelectedTopic] = useState("")

    const handleListItemClick = (topic: string) => {
        setSelectedTopic(topic)
    }

    return (
        <div className="flex min-h-screen p-7">
            <div>
                <Box sx={{ width: 200, maxWidth: 200, marginRight: 10 }}>
                    <List aria-label="main page topics">
                        {topics.map((item) => {
                            return (
                                <ListItemButton
                                    key={item.id}
                                    selected={selectedTopic === item.id}
                                    onClick={() => handleListItemClick(item.id)}
                                >
                                    <a href={`#${item.id}`}>
                                        <ListItemText primary={item.title} />
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
                            <h2 className="font-bold text-xl " id={item.id}>{item.title}</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab fuga veniam laudantium, tempora, est delectus accusamus, sequi obcaecati at non molestias. Necessitatibus est quisquam placeat. Iste, in. Excepturi, dolore maxime!</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}