"use client"

import { Container,Row,Col } from "react-bootstrap";
import React from 'react';
import { Doughnut,PolarArea } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';
import { useEffect,useState } from 'react';
import { db } from "@/utils/firebaseConfig";
import { collection,getDocs } from "@firebase/firestore";

ChartJS.register(RadialLinearScale,ArcElement, Tooltip, Legend);

export default function Page(){

  const [sentimentCounts, setSentimentCounts] = useState([0, 0, 0]); 
  const [itemCounts, setItemCounts] = useState([0, 0]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'reviews'));
        const sentimentCount = { Good: 0, Bad: 0, Neutral: 0 };

        querySnapshot.forEach((doc) => {
          const sentiment = doc.data().sentiment;
          if (sentimentCount.hasOwnProperty(sentiment)) {
            sentimentCount[sentiment]++;
          }
        });

        // Convert the sentimentCount object to an array: [Good, Bad, Neutral]
        const countsArray = [
          sentimentCount.Good || 0,
          sentimentCount.Bad || 0,
          sentimentCount.Neutral || 0
        ];

        setSentimentCounts(countsArray);
      } catch (error) {
        console.error("Error fetching reviews: ", error);
      }
    };

    fetchReviews();

    const fetchProductionData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'products'));
        const itemCount = { chair: 0, table: 0 };

        querySnapshot.forEach((doc) => {
          const itemType = doc.data().type;
          if (itemCount.hasOwnProperty(itemType)) {
            itemCount[itemType]++;
          }
        });

        // Convert the itemCount object to an array: [Chair, Table]
        const countsArray = [
          itemCount.chair || 0,
          itemCount.table || 0
        ];

        setItemCounts(countsArray);
      } catch (error) {
        console.error("Error fetching production data: ", error);
      }
    };

    fetchProductionData();
  }, []);

    const data = {
        labels: ['Positive', 'Negative', 'Neutral'],
        datasets: [
          {
            label: 'Frequency',
            data: sentimentCounts,
            backgroundColor: [
                '#c0c0c0',
                '#404040',
                '#808080'
              ]
          },
        ],
      };

      const data2 = {
        labels: ['Chair','Tables'],
        datasets: [
          {
            label: 'Frequency',
            data: itemCounts,
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
                <h1 className="f-2 font-semibold text-3xl md:text-4xl txt-1 drop-shadow-md"> Dashboard </h1>
            </Row>
            <Row className="pt-4">
                <Col md={3} className="bg-white p-2 rounded-lg shadow-xl my-3 md:m-4">
                    <h1 className="f-2 p-2 text-2xl drop-shadow-xl">Reviews Comparison</h1>
                    <PolarArea data={data} options={options} />
                </Col>
                <Col md={3} className="bg-white p-2 rounded-lg shadow-xl my-3 md:m-4">
                    <h1 className="f-2 p-2 text-2xl drop-shadow-xl">Products Comparison</h1>
                    <Doughnut data={data2} options={options} />
                </Col>
            </Row>
        </Container>
    )
}