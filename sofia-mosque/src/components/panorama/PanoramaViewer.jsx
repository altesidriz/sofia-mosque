import { createRoot } from 'react-dom/client';
import { useEffect, useRef, useState } from 'react';

import image1 from '../../assets/WEB-Foae.jpg';
import image2 from '../../assets/WEB-Pan-Balkon.jpg';
import { FaDotCircle } from "react-icons/fa";
import { FaCircleDown, FaCircleUp } from "react-icons/fa6";

const PanoramaViewer = () => {
      const viewerRef = useRef(null);
  
      useEffect(() => {
          const initializeViewer = () => {
              window.pannellum.viewer(viewerRef.current, {
                  default: {
                      firstScene: "scene1",
                      sceneFadeDuration: 1000,
                      autoRotate: 0.5
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
      }, []);
  
      return (
          <div
              ref={viewerRef}
              style={{ width: '100%', height: '80vh' }}
          />
      );
  };
  
export default PanoramaViewer;