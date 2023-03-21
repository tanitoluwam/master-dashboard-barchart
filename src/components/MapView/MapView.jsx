import React from "react";
import Box from "@mui/material/Box";
import {
  Typography,
  Divider,
  Stack,
  Button,
  Container,
  IconButton,
} from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  // Title,
  // Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  // Title,
  // Tooltip,
  Legend,
  ChartDataLabels
);

// import { BarChart } from "../Barchart/Barchat";

export const MapView = () => {
  const options = {
    scales: {
      x: {
        beginAtZero: true,
        min: 0,
        max: 3000,
        stepSize: 10,
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,

    plugins: {
      datalabels: {
        display: true,
        color: "black",
        formatter: Math.round,
        anchor: "end",
        align: "right",
        labels: {
          title: {
            font: {
              weight: 400,
              color: "#B6B5B7",
            },
          },
        },
      },
      legend: {
        display: false,
      },
    },
  };
  const labels = [
    "Russia",
    "Uganda",
    "South Africa",
    "Nigeria",
    "Ghana",
    "Croatia",
    "Argentina",
    "China",
  ];

  const state = {
    labels,
    datasets: [
      {
        data: [1156, 1770, 800, 2100, 1156, 850, 850, 420],
        backgroundColor: "rgb(8,172,172)",
      },
    ],
  };
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          width: "600px",
          height: "400px",
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 20px",
            "& .MuiButton-root": { borderRadius: "50px" },
          }}
        >
          <Stack direction="row">
            <Button
              variant="contained"
              endIcon={<TrendingUpIcon />}
              sx={{
                backgroundColor: "#57DB56",
                " &:hover": {
                  backgroundColor: "#57DB56",
                },
              }}
            >
              14.89%
            </Button>
            <Box sx={{ marginLeft: "10px" }}>
              <Typography
                component="p"
                sx={{ color: "#6f6f6f", fontSize: "13px" }}
              >
                71803 sales
              </Typography>
              <Typography
                component="h2"
                sx={{
                  color: "#2a282d",
                  fontSize: "13px",
                  ml: 2,
                  fontWeight: 700,
                }}
              >
                72 Countries
              </Typography>
            </Box>
          </Stack>
          <IconButton sx={{ display: "flex", flexDirection: "column" }}>
            <PublicOutlinedIcon fontSize="medium" sx={{ color: "#ed7e81" }} />
            <Typography
              sx={{ color: "#ed7e81", fontSize: "12px" }}
              component="div"
            >
              Map view
            </Typography>
          </IconButton>
        </Box>
        <Divider />
        <Box sx={{ padding: "10px 20px" }}>
          <Bar options={options} data={state} />
        </Box>
      </Box>
    </Container>
  );
};
