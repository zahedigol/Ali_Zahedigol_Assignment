import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import React from 'react'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function BarChart({ saleList, mode }) {
  let result = []

  const helper = {}
  if (saleList) {
    result = saleList?.reduce(function sort(r, o) {
      const key = o?.product_normalized

      if (!helper[key]) {
        helper[key] = { ...o } // create a copy of o
        helper[key].sales_number = Number(helper[key].sales_number)
        helper[key].revenue = Number(helper[key].revenue)
        r.push(helper[key])
      } else {
        helper[key].sales_number += o.sales_number
        helper[key].revenue += Number(o.revenue)
      }
      delete helper[key].date
      delete helper[key].id
      delete helper[key].user
      return r
    }, [])
  }
  const sales = result.map((item) => item.sales_number)
  const revenues = result.map((item) => item.revenue)

  const labels = result.map((item) => item.product)
  const data = {
    labels,
    datasets: [
      {
        label: 'dataset',
        data: mode === 1 ? sales : revenues,
        backgroundColor: 'lightblue',
      },
    ],
  }
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  }

  return <Bar options={options} data={data} />
}
