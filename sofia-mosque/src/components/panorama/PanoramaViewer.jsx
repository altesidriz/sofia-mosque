import { useEffect, useRef, useState } from 'react';
import image1 from '../../assets/WEB-Foae.jpg';
import image2 from '../../assets/WEB-Pan-Balkon.jpg';
import { AiOutlineFullscreen } from "react-icons/ai";
import { AiOutlineFullscreenExit } from "react-icons/ai";

// Helper to detect iOS
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

const PanoramaViewer = () => {
    const wrapperRef = useRef(null);
    const viewerRef = useRef(null);
    const [isFullscreen, setIsFullscreen] = useState(false);

    useEffect(() => {
        const initializeViewer = () => {
            window.pannellum.viewer(viewerRef.current, {
                default: {
                    firstScene: "scene1",
                    sceneFadeDuration: 1000,
                    autoRotate: 0.5,
                    showFullscreenCtrl: false,
                    compass: false
                },
                scenes: {
                    scene1: {
                        title: "First Floor",
                        type: "equirectangular",
                        panorama: image1,
                        hfov: 110,
                        pitch: 0,
                        yaw: 0,
                        autoLoad: true,
                        hotSpots: [
                            {
                                pitch: 5,
                                yaw: -50,
                                type: "scene",
                                text: "Go to Balcony",
                                sceneId: "scene2",
                            }
                        ]
                    },
                    scene2: {
                        title: "Balcony",
                        type: "equirectangular",
                        panorama: image2,
                        hfov: 110,
                        pitch: 0,
                        yaw: 180,
                        autoLoad: true,
                        hotSpots: [
                            {
                                pitch: -45,
                                yaw: 180,
                                type: "scene",
                                text: "Back 1st Floor",
                                sceneId: "scene1",
                            }
                        ]
                    }
                }
            });
        };

        if (window.pannellum) {
            initializeViewer();
        } else {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css';
            document.head.appendChild(link);

            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js';
            script.onload = initializeViewer;
            document.body.appendChild(script);
        }

        const handleFullscreenChange = () => {
            const isFull = document.fullscreenElement || document.webkitFullscreenElement;
            setIsFullscreen(!!isFull);
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange);

        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
            document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
        };
    }, []);

    const toggleFullscreen = () => {
        const wrapper = wrapperRef.current;

        if (isIOS) {
            wrapper.classList.toggle('ios-fullscreen');
            setIsFullscreen(prev => !prev);
            return;
        }

        if (isFullscreen) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        } else {
            if (wrapper.requestFullscreen) {
                wrapper.requestFullscreen();
            } else if (wrapper.webkitRequestFullscreen) {
                wrapper.webkitRequestFullscreen();
            } else {
                alert("Fullscreen not supported on this device");
            }
        }
    };

    return (
        <div
            ref={wrapperRef}
            className="panorama-wrapper"
        >
            <div
                ref={viewerRef}
                style={{ width: '100%', height: '100%' }}
            />
            <button
                onClick={toggleFullscreen}
                style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    width: '45px',
                    height: '45px',
                    display:'flex',
                    alignItems:'center',
                    justifyContent: 'center',
                    backgroundColor: '#ffffff',
                    color: 'black',
                    border: '1px solid black',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    zIndex: 10
                }}
            >
                {isFullscreen ? <AiOutlineFullscreenExit size={40}/> : <AiOutlineFullscreen size={40} />}
            </button>
        </div>
    );
};

export default PanoramaViewer;
