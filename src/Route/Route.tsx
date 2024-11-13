import React, { Children } from "react";
import Homepage from "../Features/Homepage";
import About from "../Components/About";
import Layout from "../Components/Layout";
import Qualification from "../Components/Qualification";
import Skills from "../Components/Skills";


export const Route = [
    {
        path : "/",
        element : <Layout/>,
        children : [
            {
              path : "/",
              element : <Homepage/>
            },
            {
                path : "/about",
                element : <About/>
            },
            {
                path : "/qualification",
                element : <Qualification/>
            },
            {
                path : "/skills",
                element : <Skills/>
            },
        ]
    },
    
]