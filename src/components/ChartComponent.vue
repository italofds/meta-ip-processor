<template>
    <div class="card mb-4 rounded-3 shadow-sm">
        <div class="card-header py-3">
            <h4 class="my-0 fw-normal">{{ this.title}}</h4>
        </div>
        <div class="card-body">
            <canvas ref="canvas" style="max-height:400px;"></canvas>
        </div>
    </div>
</template>

<script>
import Chart from 'chart.js/auto';
import { markRaw } from 'vue'

export default {
    name: 'ChartComponent',
    props: {
        data: null,
        type: {
            type: String,
            default: 'pie'
        },
        title: {
            type: String,
            default: 'Título'
        }
    },
    data() {
        return {
            chart: null,
        };
    },
    mounted() {
        this.createChart();
    },
    watch: {
        data: {
            deep: true,
            handler() {
                this.updateChart();
            }
        }
    },
    methods: {
        updateChart() {
            if(this.chart) {
                this.chart.data = this.data;
                this.chart.update();
            }
        },
        createChart() {
            if (this.chart) {
                this.chart.destroy();
            }

            const chartObj = new Chart(this.$refs.canvas.getContext('2d'), {
                type: this.type,
                data: this.data,
                options: {
                    plugins: {
                        legend: {
                            position: "right"
                        }
                    }
                }
            });          
            
            this.chart = markRaw(chartObj);
        }
    },
    beforeUnmount() {
        if (this.chart) {
            this.chart.destroy();
        }
    }
};
</script>