import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Statistics = () => {

    const data = [
        {
            name: "Assignment 1",
            marks: 60
        },
        {
            name: "Assignment 2",
            marks: 60
        },
        {
            name: "Assignment 3",
            marks: 58
        },
        {
            name: "Assignment 4",
            marks: 60
        },
        {
            name: "Assignment 5",
            marks: 60
        },
        {
            name: "Assignment 6",
            marks: 57
        },
        {
            name: "Assignment 7",
            marks: 60
        },
        {
            name: "Assignment 8",
            marks: 60
        }
    ];
    return (
        <div style={{ width: '100%' }}>
            <h3 className='text-primary mt-5'>Assignment Marks</h3>
            <ResponsiveContainer width="100%" height={400}>
            <AreaChart
                width={500}
                height={200}
                data={data}
                syncId="anyId"
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="marks" stroke="#82ca9d" fill="#82ca9d" />
            </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;