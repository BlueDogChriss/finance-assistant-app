import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import CalculateIcon from '@mui/icons-material/Calculate';

export const SidebarData = [
    {
        title: "Profil",
        path: "/profile",
        icon: <PersonIcon/>
    },
    {
        title: "Tips Calculator",
        path: "/tips",
        icon: <CalculateIcon />
    }
];