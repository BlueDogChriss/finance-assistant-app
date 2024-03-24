import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import CalculateIcon from '@mui/icons-material/Calculate';
import BarChartIcon from '@mui/icons-material/BarChart';

export const SidebarData = [
    {
        title: "Profil",
        path: "/Profile",
        icon: <PersonIcon />
    },
    {
        title: "Tips Calculator",
        path: "/Tips",
        icon: <CalculateIcon />
    },
    {
        title: "Statistics",
        path: "/Statistics",
        icon: <BarChartIcon />
    }
];