const scenes = {
    lobby: {
        title: "Main Lobby",
        hfov: 110,
        pitch: 0,
        yaw: 100,
        type: "equirectangular",
        panorama: "/images/lobby.jpg",
        hotSpots: [
            {
                pitch: 0,
                yaw: 120,
                type: "scene",
                text: "Go to Hallway",
                sceneId: "hall"
            }
        ]
    },
    hall: {
        title: "Hallway",
        hfov: 110,
        pitch: 0,
        yaw: 200,
        type: "equirectangular",
        panorama: "/images/hall.jpg",
        hotSpots: [
            {
                pitch: 0,
                yaw: 100,
                type: "scene",
                text: "Back to Lobby",
                sceneId: "lobby"
            },
            {
                pitch: 0,
                yaw: 270,
                type: "scene",
                text: "Go to Room",
                sceneId: "room"
            }
        ]
    },
    room: {
        title: "Meeting Room",
        hfov: 110,
        pitch: 0,
        yaw: 50,
        type: "equirectangular",
        panorama: "/images/room.jpg",
        hotSpots: [
            {
                pitch: 0,
                yaw: 180,
                type: "scene",
                text: "Back to Hallway",
                sceneId: "hall"
            }
        ]
    }
};

export default scenes;
