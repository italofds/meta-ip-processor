<template>
	<header class="navbar navbar-expand navbar-dark bg-dark fixed-top shadow">
		<div class="container">
			<div class="navbar-brand my-1">
				<!-- <i class="bi bi-meta text-secondary h2 align-middle me-3"></i> -->
				<svg class="bi text-secondary h2 mb-0 align-middle me-3"><use href="#meta"></use></svg>
				<a class="text-light align-middle d-sm-inline d-none" href="https://github.com/italofds" target="_blank">italofds</a>
				<span class="text-secondary align-middle d-sm-inline d-none"> / </span>
				<a class="text-light align-middle" href="https://github.com/italofds/meta-ip-processor" target="_blank">meta-ip-processor</a>
				<span class="badge rounded-pill text-bg-secondary align-middle ms-3" style="font-size:10pt;"><small>v1.1.0</small></span>
			</div>

			<div class="dropdown">
				<button class="btn btn-dark dropdown-toggle d-flex align-items-center" id="bd-theme" type="button" aria-expanded="false" data-bs-toggle="dropdown" data-bs-display="static" aria-label="Alterar Tema">
					<svg class="bi my-1 theme-icon-active"><use href="#circle-half"></use></svg>
					<span class="d-none ms-2" id="bd-theme-text">Alterar Tema</span>
				</button>
				<ul id="dropdown-theme" class="dropdown-menu dropdown-menu-end" aria-labelledby="bd-theme-text">
					<li>
						<button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="light" aria-pressed="false">
							<svg class="bi me-2 opacity-50"><use href="#sun-fill"></use></svg>
							Claro
							<svg class="bi ms-auto d-none"><use href="#check2"></use></svg>
						</button>
					</li>
					<li>
						<button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="dark" aria-pressed="false">
							<svg class="bi me-2 opacity-50"><use href="#moon-stars-fill"></use></svg>
							Escuro
							<svg class="bi ms-auto d-none"><use href="#check2"></use></svg>
						</button>
					</li>
					<li>
						<button type="button" class="dropdown-item d-flex align-items-center active" data-bs-theme-value="auto" aria-pressed="true">
							<svg class="bi me-2 opacity-50"><use href="#circle-half"></use></svg>
							Auto
							<svg class="bi ms-auto d-none"><use href="#check2"></use></svg>
						</button>
					</li>
				</ul>

				<svg xmlns="http://www.w3.org/2000/svg" class="d-none">
					<symbol id="check2" viewBox="0 0 16 16">
						<path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
					</symbol>
					<symbol id="circle-half" viewBox="0 0 16 16">
						<path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/>
					</symbol>
					<symbol id="moon-stars-fill" viewBox="0 0 16 16">
						<path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
						<path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
					</symbol>
					<symbol id="sun-fill" viewBox="0 0 16 16">
						<path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
					</symbol>
					<symbol id="meta" viewBox="0 0 16 16">
						<path fill-rule="evenodd" d="M8.217 5.243C9.145 3.988 10.171 3 11.483 3 13.96 3 16 6.153 16.001 9.907c0 2.29-.986 3.725-2.757 3.725-1.543 0-2.395-.866-3.924-3.424l-.667-1.123-.118-.197a55 55 0 0 0-.53-.877l-1.178 2.08c-1.673 2.925-2.615 3.541-3.923 3.541C1.086 13.632 0 12.217 0 9.973 0 6.388 1.995 3 4.598 3q.477-.001.924.122c.31.086.611.22.913.407.577.359 1.154.915 1.782 1.714m1.516 2.224q-.378-.614-.727-1.133L9 6.326c.845-1.305 1.543-1.954 2.372-1.954 1.723 0 3.102 2.537 3.102 5.653 0 1.188-.39 1.877-1.195 1.877-.773 0-1.142-.51-2.61-2.87zM4.846 4.756c.725.1 1.385.634 2.34 2.001A212 212 0 0 0 5.551 9.3c-1.357 2.126-1.826 2.603-2.581 2.603-.777 0-1.24-.682-1.24-1.9 0-2.602 1.298-5.264 2.846-5.264q.136 0 .27.018Z" />
					</symbol>
				</svg>
			</div>
		</div>
	</header>

	<main id="start" style="padding-top: 70px;">
		<div class="container p-3">
			<div class="bg-body-tertiary mb-3 p-3 p-lg-5 rounded">
				<h1 class="mb-3">Processador de dados de IP da plataforma META</h1>
				<p class="lead">Ferramenta de processamento para tratar as respostas da empresa <strong>Meta Platforms, Inc.</strong> acerca dos endereços IP solicitados judicialmente, especificamente através das plataformas <strong>Facebook Records</strong> e <strong>WhatsApp Records</strong>.</p>
				<p class="lead">Para isso, é necessário que o usuário informe o arquivo do tipo <strong>".html"</strong> a ser processado. Após o processamento, todos os registros respondidos pela empresa constarão em formato de lista, com data e hora convertidos pro fuso horário selecionado, além de constar também informações dos provedores de conexão dos respectivos endereços IP.</p>

				<form @submit.prevent="handleFormSubmit" class="mt-5">
					<div class="row">
						<div class="input-group mb-2">
							<input v-on:change="previewFile" id="inputFile" name="file" type="file" class="form-control form-control-lg" aria-label="Upload" accept=".html" required="required">
							<button id="btnSend" class="btn btn-primary btn-lg" type="submit">Processar</button>
						</div>
					</div>
				</form>
			</div>

			<a class="anchor" id="result"></a>

			<div class="my-5" v-show="resultList.length > 0">
				<ul class="nav nav-tabs mb-4" role="tablist">
					<li class="nav-item" role="presentation">
						<button class="nav-link active" data-bs-toggle="tab" data-bs-target="#list-tab-pane" type="button" role="tab" aria-controls="list-tab-pane" aria-selected="true">Lista</button>
					</li>
					<li class="nav-item" role="presentation">
						<button @click="loadCharts" class="nav-link" data-bs-toggle="tab" data-bs-target="#charts-tab-pane" type="button" role="tab" aria-controls="charts-tab-pane" aria-selected="false">Gráficos</button>
					</li>
				</ul>

				<div class="tab-content">
					<div class="tab-pane fade show active" id="list-tab-pane" role="tabpanel" aria-labelledby="list-tab" tabindex="0">
						<result-alert-component :ipData="resultItens" :ispData="ispList"></result-alert-component>

						<div class="card mb-4 rounded-3 shadow-sm">
							<div class="card-header py-3">
								<h4 class="my-0 fw-normal">Localização Aproximada dos Provedores</h4>
							</div>
							<div class="card-body">
								<GMapMap ref="myMapRef" :center="mapCenter" :zoom="mapZoom" map-type-id="terrain" style="width: 100%; height: 400px" :options="mapOptions">
									<GMapMarker :key="marker" v-for="marker in mapMarkers" :position="marker.position"/>	
								</GMapMap>
							</div>
						</div>
						
						<div class="card mb-4 rounded-3 shadow-sm">
							<div class="card-header py-3">
								<h4 class="my-0 fw-normal">Lista de Endereços IP</h4>
							</div>
							<div class="card-body">
								<label class="form-label">Controles</label>

								<div class="row row-cols-lg-auto g-3 mb-3">
									<div class="col-12 d-grid d-lg-block">
										<div class="input-group">
											<span class="input-group-text" id="basic-addon1">Fuso Horário:</span>
											<select v-model="formData.selectedTimezone" class="form-select">
												<option v-for="item in timezoneItens" :value="item.id" :key="item.id">{{ item.text }}</option>
											</select>
										</div>
									</div>

									<div class="col-12 d-grid d-lg-block">
										<div class="btn-group" role="group">
											<button @click="clearFilters()" type="button" class="btn btn-outline-secondary position-relative" :disabled="!isFilterDefined">
												Limpar Filtros
											</button>
											<button type="button" class="btn btn-outline-secondary position-relative" data-bs-toggle="modal" data-bs-target="#exampleModal">
												Filtrar
												<span v-if="isFilterDefined" class="position-absolute top-0 start-100 translate-middle p-2 bg-primary border border-light rounded-circle">
													<span class="visually-hidden">Alert</span>
												</span>
											</button>
										</div>										
									</div>

									<div class="col-12 d-grid d-lg-block">
										<button type="button" class="btn btn-outline-secondary" @click="$refs.listComponent.exportExcel()">Exportar Excel</button>
									</div>
								</div>

								<hr/>
								
								<list-component ref="listComponent" :ipData="resultItens" :ispData="ispList" :timezoneData="formData.selectedTimezone"></list-component>
							</div>
						</div>						
					</div>

					<div class="tab-pane fade" id="charts-tab-pane" role="tabpanel" aria-labelledby="chart-tab" tabindex="0">
						<chart-component :data="dataChart1" :title="'Quantidade de Registros por Data'" :type="'line'"></chart-component>
						<chart-component :data="dataChart2" :title="'Quantidade de Registros por Dia da Semana'" :type="'bar'"></chart-component>
						<chart-component :data="dataChart3" :title="'Quantidade de Registros por Hora'" :type="'line'"></chart-component>
						<chart-component :data="dataChart4" :title="'Quantidade de Registros por Provedor'" :type="'pie'"></chart-component>
					</div>
				</div>
			</div>

			<p class="text-muted small text-center">Desenvolvido por <a target="_blank" href="https://github.com/italofds">Ítalo Santos</a> | © 2024 | Licença GPL-3.0 | Hospedado pelo GitHub Pages | Contribua: <a target="_blank" href="https://github.com/italofds/meta-ip-processor">github.com/italofds/meta-ip-processor</a></p>	
		</div>
	</main>

	<!-- Filter Modal -->
	<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<h1 class="modal-title fs-5" id="exampleModalLabel">Filtrar Registros</h1>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<div class="row g-3">
						<div class="col-md-6">
							<label for="inputInitialDate" class="form-label">Data Inicial</label>
							<input v-model="filterData.initialDate" type="datetime-local" class="form-control" id="inputInitialDate">
						</div>
						<div class="col-md-6">
							<label for="inputFinalDate" class="form-label">Data Final</label>
							<input v-model="filterData.finalDate" type="datetime-local" class="form-control" id="inputFinalDate">
						</div>
						<div class="col-md-6">
							<label for="selectCountry" class="form-label">País</label>
							<select v-model="filterData.country" class="form-select" id="selectCountry">
								<option value="">Todos</option>
								<option v-for="item in countryItens" :value="item" :key="item">{{ item }}</option>
							</select>
						</div>
						<div class="col-md-6">
							<label for="selectRegion" class="form-label">UF</label>
							<select v-model="filterData.region" class="form-select" id="selectRegion">
								<option value="">Todos</option>
								<option v-for="item in regionItens" :value="item" :key="item">{{ item }}</option>
							</select>
						</div>
						<div class="col-md-6">
							<label for="selectCity" class="form-label">Cidade</label>
							<select v-model="filterData.city" class="form-select" id="selectCity">
								<option value="">Todos</option>
								<option v-for="item in cityItens" :value="item" :key="item">{{ item }}</option>
							</select>
						</div>
						<div class="col-md-6">
							<label for="selectISP" class="form-label">ISP</label>
							<select v-model="filterData.isp" class="form-select" id="selectISP">
								<option value="">Todos</option>
								<option v-for="item in ispItens" :value="item" :key="item">{{ item }}</option>
							</select>
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal" @click="clearFilters()">Limpar Filtros</button>
					<button type="button" class="btn btn-primary" data-bs-dismiss="modal">Fechar</button>
				</div>
			</div>
		</div>
	</div>

	<a href="#start" class="btn btn-primary btn-lg btn-top p-0 d-flex justify-content-center align-items-center" v-if="resultList.length > 0">
		<i class="bi-arrow-up"></i>
	</a>
</template>

<script>
import axios from 'axios';
import moment from 'moment';
import momentTZ from 'moment-timezone';
import {fileProcess} from './utils/processor';
import darkMapStyleJSON from '../assets/dark-map-style.json'
import '../assets/js/color-modes.js'
import * as bootstrap from 'bootstrap';
import ChartComponent from './components/ChartComponent.vue';
import ListComponent from './components/ListComponent.vue';
import ResultAlertComponent from './components/ResultAlertComponent.vue';

const MAX_DAYS_DIFF = 10;

export default {
	components: {
		ChartComponent,
		ListComponent,
		ResultAlertComponent
	},
	name: 'App',
	data() {
		return { 
			ispList: [],
			resultList: [],	
			charts: {
				logsByDateChart:undefined,
				logsByDayOfWeekChart:undefined,
				logsByHourChart:undefined,
				logsByISPChart:undefined,
			},
			formData: {
				selectedFile: '',
				selectedTimezone: -new Date().getTimezoneOffset()
			},
			filterData: {
				initialDate: '',
				finalDate: '',
				country: '',
				region: '',
				city: '',
				isp: ''
			},
			mapMarkers: [],
			mapCenter: { lat: 0, lng: 0 },
			mapZoom: 2,
			mapOptions: {
				zoomControl: true,
				mapTypeControl: false,
				scaleControl: false,
				streetViewControl: false,
				rotateControl: false,
				fullscreenControl: false,
				scrollwheel: false,
				minZoom: 2
			},
			dataChart1: null,
			dataChart2: null,
			dataChart3: null,
			dataChart4: null,
		};
	},
	computed: {
		isFilterDefined: function() {
			return this.filterData.initialDate !== "" ||
				this.filterData.finalDate !== "" ||
				this.filterData.country !== "" ||
				this.filterData.region !== "" ||
				this.filterData.city !== "" ||
				this.filterData.isp !== "";
		},
		resultItens: function() {
			return this.resultList.filter(ipInfo => {
				// Convertendo o timestamp para objeto Date para comparação
				const ipDate = new Date(ipInfo.timestamp);
				const startDate = new Date(this.filterData.initialDate);
				const endDate = new Date(this.filterData.finalDate);

				// Encontrando o ISP correspondente
				const ispObj = this.ispList[ipInfo.ispIndex];
				if (!ispObj) return false;  // Se nenhum ISP corresponde, descarta o IP

				// Verifica todas as condições de filtragem
				return (this.filterData.initialDate === "" || ipDate >= startDate) && 
					(this.filterData.finalDate === "" || ipDate <= endDate) && 
					(this.filterData.isp === "" || ispObj.isp === this.filterData.isp) &&
					(this.filterData.country === "" || ispObj.country === this.filterData.country) &&
					(this.filterData.region === "" || ispObj.region === this.filterData.region) &&
					(this.filterData.city === "" || ispObj.city === this.filterData.city);
			});
		},
		countryItens: function() {
			return this.getUniqueISPItens("country");
		},
		regionItens: function() {
			return this.getUniqueISPItens("region");
		},
		cityItens: function() {
			return this.getUniqueISPItens("city");
		},
		ispItens: function() {
			return this.getUniqueISPItens("isp");
		},
		timezoneItens: function() {
			// Get all available timezone names
			const timezones = momentTZ.tz.names();

			// Create a set to hold offsets
			const offsets = [];

			// Iterate over each timezone
			timezones.forEach(tz => {
				// Create a moment object in the specified timezone
				const now = momentTZ().tz(tz);

				// Get the offset in minutes and convert to hours and minutes
				const offset = now.utcOffset();
				const sign = offset >= 0 ? '+' : '-';
				const hours = Math.floor(Math.abs(offset) / 60);
				const minutes = Math.abs(offset) % 60;
				const formattedOffset = `UTC${sign}${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
				
				// Add the formatted offset to the set
				offsets.push({'id' : offset, 'text' : formattedOffset});
			});

			// Remove duplicated offsets
			let uniqueOffsets = offsets.filter(function({id}) {
				return !this.has(id) && this.add(id);
			}, new Set);

			return uniqueOffsets.sort((a,b) => a.id - b.id);		
		}
	},
	methods: {
		loadCharts() {
			if(this.logsByDateChart) {
				this.logsByDateChart.destroy();
			}
			
			if(this.logsByDayOfWeekChart) {
				this.logsByDayOfWeekChart.destroy();
			}
			
			if(this.logsByHourChart) {
				this.logsByHourChart.destroy();
			}
			
			if(this.logsByISPChart) {
				this.logsByISPChart.destroy();
			}

			const sortedTimestamps = this.resultList.map(ip => moment.utc(ip.timestamp, 'YYYY-MM-DD HH:mm:SS UTC')).sort((a, b) => a - b);
			const firstDay = sortedTimestamps[0];
			const lastDay = sortedTimestamps[sortedTimestamps.length - 1];
			const daysOfWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
			const dateCounts = {};
			const dayOfWeekCounts = { 'Domingo': 0, 'Segunda': 0, 'Terça': 0, 'Quarta': 0, 'Quinta': 0, 'Sexta': 0, 'Sábado': 0 };
			const hourCounts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			const ispCounts = {};
			
			for (let day = firstDay; day.isSameOrBefore(lastDay, 'day'); day.add(1, 'day')) {
				const formattedDay = this.convertDatetimeFormat(day, 'DD/MM/YYYY');
				dateCounts[formattedDay] = 0;
			}			

			this.resultList.forEach(ip => {
				const momentTimestamp = moment.utc(ip.timestamp, 'YYYY-MM-DD HH:mm:SS UTC').utcOffset(this.formData.selectedTimezone);

				const date = momentTimestamp.format('DD/MM/YYYY');
				dateCounts[date] += 1;

				const dayOfWeek = daysOfWeek[momentTimestamp.day()];
				dayOfWeekCounts[dayOfWeek] = (dayOfWeekCounts[dayOfWeek] || 0) + 1;

				const hour = momentTimestamp.hours();
				hourCounts[hour] += 1;

				const ispName = this.ispList[ip.ispIndex].isp;
				ispCounts[ispName] = (ispCounts[ispName] || 0) + 1;
			});

			const dataChart1 = Object.entries(dateCounts).map(([day, count]) => ({ day, count }));
			const dataChart2 = Object.entries(dayOfWeekCounts).map(([dayOfWeek, count]) => ({ dayOfWeek, count }));
			const dataChart3 = Object.entries(hourCounts).map(([hour, count]) => ({ hour: parseInt(hour)+"h", count }));
			const dataChart4 = Object.entries(ispCounts).map(([name, count]) => ({ name, count }));


			// ##############################################
			// ######### First Chart - Logs By Date #########
			// ##############################################	

			this.dataChart1 = {
				labels: dataChart1.map(row => row.day),
				datasets: [
					{
						label: 'Registros de Conexão',
						data: dataChart1.map(row => row.count)
					}
				]
			}

			// #####################################################
			// ######### First Chart - Logs By Day of Week #########
			// #####################################################

			this.dataChart2 = {
				labels: dataChart2.map(row => row.dayOfWeek),
				datasets: [
					{
						label: 'Registros de Conexão',
						data: dataChart2.map(row => row.count)
					}
				]
			}
			
			// ##############################################
			// ######### First Chart - Logs By Hour #########
			// ##############################################

			this.dataChart3 = {
				labels: dataChart3.map(row => row.hour),
				datasets: [
					{
						label: 'Registros de Conexão',
						data: dataChart3.map(row => row.count)
					}
				]
			}

			// #############################################
			// ######### First Chart - Logs By ISP #########
			// #############################################

			this.dataChart4 = {
				labels: dataChart4.map(row => row.name),
				datasets: [
					{
						label: 'Registros de Conexão',
						data: dataChart4.map(row => row.count)
					}
				]
			}
		},
		clearFilters() {
			this.filterData.finalDate = "";
			this.filterData.initialDate = "";			
			this.filterData.country = "";
			this.filterData.region = "";
			this.filterData.city = "";
			this.filterData.isp = "";
		},
		getUniqueISPItens(attribute) {
			return this.ispList
				.map((item) => item[attribute])
				.filter(
					(value, index, current_value) => value && current_value.indexOf(value) === index
				);
		},
		convertDatetimeFormat: function (dateValue, format) {
			if (dateValue) {
				const utcDate = new Date(dateValue);
				const momentUtcDate = moment.utc(utcDate);
				const targetTime = momentUtcDate.utcOffset(this.formData.selectedTimezone);
				const timeText = targetTime.format(format);
				return timeText;
			}
		},
		previewFile(event) {
			this.formData.selectedFile = event.target.files[0];
		},
		handleFormSubmit() {
			if(this.logsByDateChart) {
				this.logsByDateChart.destroy();
			}
			
			if(this.logsByDayOfWeekChart) {
				this.logsByDayOfWeekChart.destroy();
			}
			
			if(this.logsByHourChart) {
				this.logsByHourChart.destroy();
			}
			
			if(this.logsByISPChart) {
				this.logsByISPChart.destroy();
			}

			this.resultList = [];
			this.ispList = [];
			this.mapMarkers = [];
			var file = this.formData.selectedFile;

			//Return to list tab
			const triggerEl = document.querySelector('button[data-bs-target="#list-tab-pane"]')
			bootstrap.Tab.getInstance(triggerEl).show();

			//Abort previous API calls on axios
			const controller = new AbortController();
			controller.abort();

			if (file) {
				const reader = new FileReader();
				reader.onload = (e) => {

					(async () => {
						this.resultList = await fileProcess(e.target.result);
						this.ispList = await this.generateIspList();

						window.location.href='#result';
						this.fetchData();
					})();
					
				}; 
				reader.readAsText(file);
			}
		},
		async generateIspList() {
			const resultIspList = [];

			for(let resultItem of this.resultList) {
				var resultIp = resultItem.ip;
				var resultDate = resultItem.timestamp;
				var isRepeated = false;
				var ispIndex = undefined;

				for (let i = 0; i < resultIspList.length; i++) {
					let ispItem = resultIspList[i];

					if(ispItem.ip === resultIp) {
						const difference = Math.abs(new Date(ispItem.timestamp) - new Date(resultDate)) / (1000 * 3600 * 24);
						if(difference <= MAX_DAYS_DIFF){
							isRepeated = true;
							ispIndex = i;
							break;
						}
					}
				}				

				if(!isRepeated) {
					let ispItem = {};
					ispItem.ip = resultIp;
					ispItem.timestamp = resultDate;
					ispItem.country = "";
					ispItem.region = "";
					ispItem.city = "";
					ispItem.isp = "NÃO CONSULTADO";
					ispItem.status = "loading";					

					resultIspList.push(ispItem);	
					ispIndex = resultIspList.length-1;
					resultItem.ispIndex = ispIndex;							
					
				} else {
					resultItem.ispIndex = ispIndex;
				}				
			}

			return resultIspList;
		},
		async fetchData() {
			var bounds = new window.google.maps.LatLngBounds();
			var mapMarkersSet = new Set();

			for(let item of this.ispList){
				try {
					var url  = process.env.VUE_APP_IP_API_URL + item.ip + "/" + this.convertDatetimeFormat(item.timestamp, "YYYY-MM-DD");
					const response = await axios.get(url);
				
					item.country = response.data.country;
					item.region = response.data.regionName;
					item.city = response.data.city;
					item.isp = response.data.asn;
					item.status = "success";

					var latitude = response.data.location.lat;
					var longitude = response.data.location.lng;

					const key = `${latitude},${longitude}`;
					if(!mapMarkersSet.has(key)) {
						var marker = {
							position: {
								lat: latitude, lng: longitude
							},
						};

						this.mapMarkers.push(marker);
						mapMarkersSet.add(key);
						bounds.extend(marker.position);

						if(mapMarkersSet.size > 1) {				
							this.$refs.myMapRef.fitBounds(bounds);

						} else {
							this.mapCenter = { lat: latitude, lng: longitude };
							this.mapZoom = 10;
						}
					}

				} catch (error) {
					item.status = "error"
					console.error('Ocorreu um erro durante a busca dos dados: ', error);
				}	
			}	
		}
	},
	setup() {
		const mapStyle = darkMapStyleJSON;

		return {
			mapStyle
		}
	},
	mounted() {
		if(document.documentElement.getAttribute("data-bs-theme") === "dark"){
			this.mapOptions.styles = darkMapStyleJSON;
		}

		const mutationCallback = (mutationsList) => {
			for (const mutation of mutationsList) {
				if (
				mutation.type !== "attributes" ||
				mutation.attributeName !== "data-bs-theme"
				) {
				return
				}

				if(mutation.target.getAttribute("data-bs-theme") === "dark") {
					this.mapOptions.styles = darkMapStyleJSON;
				} else {
					this.mapOptions.styles = [];
				}
			}
		}
		const observer = new MutationObserver(mutationCallback);
		observer.observe(document.documentElement, { attributes: true });
	}
}
</script>

<style>
	.form-label {
		font-weight: bold;
	}
	.form-label:after {
		content: ":";
	}

	a.anchor {
		display: block;
		position: relative;
		top: -50px;
		visibility: hidden;
	}

	.bi {
		width: 1em;
		height: 1em;
		vertical-align: -.125em;
		fill: currentcolor;
	}

	.dropdown-menu .active .bi {
		display: block !important;
	}

	.navbar-brand:hover {
		text-decoration: underrow;
	}

	.navbar-brand a {
		text-decoration: none;
	}

	.navbar-brand a:hover {
		text-decoration: underline;
	}

	.navbar-icon {
		height: 20px;
	}

	tr.loading td {
		color: #CCCCCC;
	}

	tr.error td {
		background-color: #f8d7da;
		color: #000;
	}

	.btn-top {
		position: fixed;
		bottom: 20px;
		right: 20px;
		width: 3rem;
		height: 3rem;
	}
</style>