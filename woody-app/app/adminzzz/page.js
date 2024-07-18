"use client"

import { Container,Row,Col } from "react-bootstrap";
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Page(){

    const data = {
        labels: ['Positive', 'Negative', 'Neutral','Undecided'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 23],
            backgroundColor: [
                '#c0c0c0',
                '#404040',
                '#808080',
                '#D6A56E'
              ]
          },
        ],
      };
    
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
          tooltip: {
            enabled: true,
          },
        },
      };

    return (
        <Container>
            <Row className="pt-4">
                <h1 className="f-2 font-semibold text-4xl txt-1 drop-shadow-md"> Dashboard </h1>
            </Row>
            <Row className="pt-4">
                <Col md={3} className="bg-white p-2 rounded-lg shadow-xl">
                    <h1 className="f-2 p-2 text-2xl drop-shadow-xl">Reviews Comparison (%)</h1>
                    <Doughnut data={data} options={options} />
                </Col>
            </Row>
        </Container>
    )
}