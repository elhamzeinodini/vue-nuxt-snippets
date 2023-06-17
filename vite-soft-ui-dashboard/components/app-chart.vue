<template>
  <section class="bar">
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
      class="bar__item"
    />
    <app-bar-chart-data></app-bar-chart-data>
  </section>
</template>

<script lang="ts">
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

interface DataSets {
  label: string;
  data: number[];
  backgroundColor: string;
  borderRadius: number;
  barThickness: number;
}

interface ChartData {
  labels: string[];
  datasets: DataSets[];
}

interface SalesXY {
  ticks: {
    color: string;
    display?: boolean;
    stepSize?: number;
    min?: number;
    max?: number;
  };
  grid: {
    display: boolean;
  };
}

interface Stringies {
  [key: string]: string;
}

interface TooltipItem {
  index: number;
  datasetIndex: number;
  formattedValue: string;
  value: number;
}

interface ToolTip {
  enabled: boolean;
  mode: string;
  intersect: boolean;
  backgroundColor: string;
  titleFontColor: string;
  titleFontFamily: string;
  titleFontSize: number;
  bodyFontColor: string;
  bodyFontFamily: string;
  bodyFontSize: number;
  callbacks: {
    label: (tooltipItem: TooltipItem) => string;
  };
}

interface ChartOptions {
  responsive: boolean;
  scales: {
    x: SalesXY;
    y: SalesXY;
  };
  plugins: {
    legend: Stringies;
    tooltip: ToolTip;
  };
}
export default defineComponent({
  name: "BarChart",
  components: { Bar },
  setup() {
    const { sales } = useSalesInfo();

    const salesMonth = ref<string[]>([]);
    const salesValues = ref<number[]>([]);

    sales.forEach(({ info }) => {
      info.forEach(({ month, value }) => {
        salesMonth.value.push(month);
        salesValues.value.push(value);
      });
    });

    const chartData = reactive<ChartData>({
      labels: salesMonth.value,
      datasets: [
        {
          label: "Sales",
          data: salesValues.value,
          backgroundColor: "#fff",
          borderRadius: 3,
          barThickness: 5,
        },
      ],
    });

    const chartOptions = reactive<ChartOptions>({
      responsive: true,
      scales: {
        x: {
          ticks: {
            color: "#fff",
            display: false,
          },
          grid: {
            display: false,
          },
        },
        y: {
          ticks: {
            color: "#fff",
            stepSize: 200,
            min: 0,
            max: 400,
          },
          grid: {
            display: false,
          },
        },
      },
      plugins: {
        legend: {
          position: "top",
        },
        tooltip: {
          enabled: true,
          mode: "index",
          intersect: false,
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          titleFontColor: "#fff",
          titleFontFamily: "Arial",
          titleFontSize: 14,
          bodyFontColor: "#fff",
          bodyFontFamily: "Arial",
          bodyFontSize: 12,
          callbacks: {
            label: function (tooltipItem) {
              return "sales: " + tooltipItem.formattedValue;
            },
          },
        },
      },
    });
 
    return { salesMonth, salesValues, chartData, chartOptions};
  },
});
</script>

<style lang="scss" scoped>
.bar__item {
  background-color: $dark-gradient;
  border-radius: $border-radius-md;
  padding: $rm-0-5;
}
</style>
