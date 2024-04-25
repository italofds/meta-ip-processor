<template>
	<header class="navbar navbar-expand navbar-dark bg-dark fixed-top shadow">
		<div class="container">
			<div class="navbar-brand my-1">
				<i class="bi bi-meta text-secondary h2 align-middle me-3"></i>
				<a class="text-light align-middle d-sm-inline d-none" href="https://github.com/italofds" target="_blank">italofds</a>
				<span class="text-secondary align-middle d-sm-inline d-none"> / </span>
				<a class="text-light align-middle" href="https://github.com/italofds/meta-ip-processor" target="_blank">meta-ip-processor</a>
				<span class="badge rounded-pill text-bg-secondary align-middle ms-3" style="font-size:10pt;"><small>v1.0.0</small></span>
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
				</svg>
			</div>
		</div>
	</header>

	<main id="start" style="padding-top: 70px;">
		<div class="container p-3">
			<div class="bg-body-tertiary mb-3 p-3 p-lg-5 rounded">
				<h1 class="mb-3">Processador de dados de IP da plataforma META</h1>
				<p class="lead">Esta ferramenta realiza o processamento das respostas da empresa <strong>META PLATFORMS, INC.</strong> referentes aos endereços IP's requisitados judicialmente pelas plataformas <strong>Facebook Records</strong> e <strong>WhatsApp Records</strong>.</p>
				<p class="lead">Para isso, é necessário que o usuário informe o arquivo do tipo <strong>".html"</strong> a ser processado. Após o processamento, todos os registros respondidos pela empresa constarão em formato de lista, com data e hora convertidos pro fuso horário selecionado, além de constar também informações dos provedores de conexão dos respectivos endereços IP.</p>

				<form @submit.prevent="handleFormSubmit" class="mt-5">
					<div class="row">
						<div class="input-group mb-2">
							<input v-on:change="previewFile" id="inputFile" name="file" type="file" class="form-control form-control-lg" aria-label="Upload" accept=".html" required="required">
							<button id="btnSend" class="btn btn-primary btn-lg" type="submit">Processar Arquivo!</button>
						</div>
					</div>
				</form>
			</div>

			<a class="anchor" id="result"></a>

			<div class="my-5" v-show="resultList.length > 0">
				<ul class="nav nav-tabs mb-3">
					<li class="nav-item">
						<a class="nav-link active" aria-current="page" href="#">Lista</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">Gráficos</a>
					</li>
				</ul>

				<h2>Lista de Endereços IP</h2>

				<p class="text-muted">Exibindo resultado do total de <strong>{{ resultList.length }}</strong> endereços IP identificados.</p>

				<div class="row row-cols-lg-auto g-3 mb-3">
					<div class="col-12">
						<div class="input-group">
							<span class="input-group-text" id="basic-addon1">Fuso Horário:</span>
							<select v-model="formData.selectedTimezone" class="form-select">
								<option v-for="item in timezoneItens" :value="item.id" :key="item.id">{{ item.text }}</option>
							</select>
						</div>
					</div>
					<div class="col-12 d-grid d-lg-block">
						<button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">Filtrar</button>
					</div>
					<div class="col-12 d-grid d-lg-block">
						<button type="button" class="btn btn-outline-secondary" @click="exportExcel()">Exportar Excel</button>
					</div>
				</div>

				<GMapMap ref="myMapRef" class="mt-3 mb-3" :center="mapCenter" :zoom="mapZoom" map-type-id="terrain" style="width: 100%; height: 400px" :options="mapOptions">
					<GMapMarker :key="marker" v-for="marker in mapMarkers" :position="marker.position"/>	
				</GMapMap>
				
				<div class="table-responsive mb-3 mt-3">
					<table class="table table-striped table-hover mb-0">
						<thead>
							<tr>
								<th class="text-nowrap" scope="col"></th>
								<th class="text-nowrap" scope="col">Endereço IP</th>
								<th class="text-nowrap text-center" scope="col">Data</th>
								<th class="text-nowrap text-center" scope="col">Hora</th>
								<th class="text-nowrap" scope="col">País</th>
								<th class="text-nowrap" scope="col">UF</th>
								<th class="text-nowrap" scope="col">Cidade</th>
								<th class="text-nowrap" scope="col">ISP</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(resultObj, index) in resultList" :key="index" :class="ipQueryArray[resultObj.ipQueryIndex].status">
								<td>
									<div v-if="ipQueryArray[resultObj.ipQueryIndex].status == 'loading'" class="spinner-border spinner-border-sm" role="status">
										<span class="visually-hidden">Loading...</span>
									</div>
									<i v-if="ipQueryArray[resultObj.ipQueryIndex].status == 'error'" class="text-danger bi bi-exclamation-diamond-fill"></i>
									<i v-if="ipQueryArray[resultObj.ipQueryIndex].status == 'success'" class="text-success bi bi-check-circle-fill"></i>
								</td>
								<td class="text-nowrap">{{ printValue(resultObj.ip) }}</td>								
								<td class="text-nowrap text-center">{{ convertDatetimeFormat(resultObj.timestamp, "DD/MM/YYYY") }}</td>
								<td class="text-nowrap text-center">{{ convertDatetimeFormat(resultObj.timestamp, "HH:mm:ss") }}</td>
								<td class="text-nowrap">{{ printValue(ipQueryArray[resultObj.ipQueryIndex].country) }}</td>
								<td class="text-nowrap">{{ printValue(ipQueryArray[resultObj.ipQueryIndex].region) }}</td>
								<td class="text-nowrap">{{ printValue(ipQueryArray[resultObj.ipQueryIndex].city) }}</td>
								<td class="text-nowrap">{{ printValue(ipQueryArray[resultObj.ipQueryIndex].isp) }}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<p class="text-muted small text-center">Desenvolvido por <a target="_blank" href="https://github.com/italofds">Ítalo Santos</a> | © 2024 | Licença GPL-3.0| Hospedado pelo GitHub Pages | Contribua: <a target="_blank" href="https://github.com/italofds/meta-ip-processor">github.com/italofds/meta-ip-processor</a></p>	
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
							<input type="datetime-local" class="form-control" id="inputInitialDate">
						</div>
						<div class="col-md-6">
							<label for="inputFinalDate" class="form-label">Data Final</label>
							<input type="datetime-local" class="form-control" id="inputFinalDate">
						</div>
						<div class="col-md-6">
							<label for="selectCountry" class="form-label">País</label>
							<select type="text" class="form-select" id="selectCountry">
								<option>Todos</option>
							</select>
						</div>
						<div class="col-md-6">
							<label for="selectRegion" class="form-label">UF</label>
							<select type="text" class="form-select" id="selectRegion">
								<option>Todos</option>
							</select>
						</div>
						<div class="col-md-6">
							<label for="selectCity" class="form-label">Cidade</label>
							<select type="text" class="form-select" id="selectCity">
								<option>Todos</option>
							</select>
						</div>
						<div class="col-md-6">
							<label for="selectISP" class="form-label">ISP</label>
							<select type="text" class="form-select" id="selectISP">
								<option>Todos</option>
							</select>
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Limpar Filtros</button>
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

const MAX_DAYS_DIFF = 10;

export default {
	name: 'App',
	data() {
		return { 
			ipQueryArray: [],
			resultList: [],			
			formData: {
				selectedFile: '',
				selectedTimezone: -new Date().getTimezoneOffset()
			},
			mapMarkers: [],
			mapCenter: { lat: 0, lng: 0 },
			mapZoom: 1,
			mapOptions: {
				zoomControl: true,
				mapTypeControl: false,
				scaleControl: false,
				streetViewControl: false,
				rotateControl: false,
				fullscreenControl: false,
				scrollwheel: false
			}
		};
	},
	computed: {
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
		printValue: function (value) {
			return value ? value : "-";
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
			this.resultList = [];
			this.ipQueryArray = [];
			this.mapMarkers = [];
			var file = this.formData.selectedFile;

			//Abort previous API calls on axios
			const controller = new AbortController();
			controller.abort();

			if (file) {
				const reader = new FileReader();
				reader.onload = (e) => {

					this.resultList = fileProcess(e.target.result);
					this.mountQueryList();
				}; 
				reader.readAsText(file);
			}
		},
		mountQueryList() {
			for(let resultItem of this.resultList) {
				var resultIp = resultItem.ip;
				var resultDate = resultItem.timestamp;
				var isRepeated = false;
				var ipQueryIndex = undefined;

				for (let i = 0; i < this.ipQueryArray.length; i++) {
					let ipQueryItem = this.ipQueryArray[i];

					if(ipQueryItem.ip === resultIp) {
						const difference = Math.abs(new Date(ipQueryItem.timestamp) - new Date(resultDate)) / (1000 * 3600 * 24);
						if(difference <= MAX_DAYS_DIFF){
							isRepeated = true;
							ipQueryIndex = i;
							break;
						}
					}
				}				

				if(!isRepeated) {
					let ipQueryItem = {};
					ipQueryItem.ip = resultIp;
					ipQueryItem.timestamp = resultDate;
					ipQueryItem.country = "";
					ipQueryItem.region = "";
					ipQueryItem.city = "";
					ipQueryItem.isp = "";
					ipQueryItem.status = "loading";					

					this.ipQueryArray.push(ipQueryItem);	
					ipQueryIndex = this.ipQueryArray.length-1;
					resultItem.ipQueryIndex = ipQueryIndex;							
					
				} else {
					resultItem.ipQueryIndex = ipQueryIndex;
				}				
			}

			window.location.href='#result';
			this.fetchData();
		},
		async fetchData() {
			var bounds = new window.google.maps.LatLngBounds();
			var mapMarkersSet = new Set();

			for(let item of this.ipQueryArray){
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