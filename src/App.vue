<template>
	<header class="navbar navbar-expand navbar-dark bg-dark fixed-top shadow">
		<div class="container">
			<div class="navbar-brand my-1">
				<!-- <i class="bi bi-meta text-secondary h2 align-middle me-3"></i> -->
				<svg class="bi text-secondary h2 mb-0 align-middle me-3"><use href="#meta"></use></svg>
				<a class="text-light align-middle d-sm-inline d-none" href="https://github.com/italofds" target="_blank">italofds</a>
				<span class="text-secondary align-middle d-sm-inline d-none"> / </span>
				<a class="text-light align-middle" href="https://github.com/italofds/meta-ip-processor" target="_blank">meta-ip-processor</a>
				<span class="badge rounded-pill text-bg-secondary align-middle ms-3" style="font-size:10pt;"><small>v1.4.0</small></span>
			</div>

			<div class="d-flex flex-row">
				<div class="dropdown">
					<button class="btn btn-dark dropdown-toggle d-flex align-items-center" id="bd-lang" type="button" aria-expanded="false" data-bs-toggle="dropdown" data-bs-display="static" :aria-label="$t('app.ariaChangeLanguage')">
						<svg v-if="$i18n.locale == 'pt'" class="bi my-1"><use href="#brFlag"></use></svg>
							<svg v-if="$i18n.locale == 'en'" class="bi my-1"><use href="#enFlag"></use></svg>
							<span class="d-none ms-2" id="bd-lang-text">{{ $t('app.ariaChangeLanguage') }}</span>
					</button>
					<ul id="dropdown-lang" class="dropdown-menu dropdown-menu-end" aria-labelledby="bd-lang-text">
						<li>
							<button type="button" aria-pressed="false" :class="['dropdown-item d-flex align-items-center', { 'active': $i18n.locale == 'pt' }]" @click="changeLocale('pt')">
								<svg class="bi me-2"><use href="#brFlag"></use></svg>
								pt-BR
								<svg class="bi ms-auto d-none"><use href="#check2"></use></svg>
							</button>
						</li>
						<li>
							<button type="button" aria-pressed="false" :class="['dropdown-item d-flex align-items-center', { 'active': $i18n.locale == 'en' }]" @click="changeLocale('en')">
								<svg class="bi me-2"><use href="#enFlag"></use></svg>
								en-US
								<svg class="bi ms-auto d-none"><use href="#check2"></use></svg>
							</button>
						</li>							
					</ul>
				</div>

				<div class="dropdown">
					<button class="btn btn-dark dropdown-toggle d-flex align-items-center" id="bd-theme" type="button" aria-expanded="false" data-bs-toggle="dropdown" data-bs-display="static" :aria-label="$t('app.ariaChangeTheme')">
						<svg class="bi my-1 theme-icon-active"><use href="#circle-half"></use></svg>
						<span class="d-none ms-2" id="bd-theme-text">{{ $t('app.ariaChangeTheme') }}</span>
					</button>
					<ul id="dropdown-theme" class="dropdown-menu dropdown-menu-end" aria-labelledby="bd-theme-text">
						<li>
							<button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="light" aria-pressed="false">
								<svg class="bi me-2 opacity-50"><use href="#sun-fill"></use></svg>
								{{ $t('app.themeLight') }}
								<svg class="bi ms-auto d-none"><use href="#check2"></use></svg>
							</button>
						</li>
						<li>
							<button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="dark" aria-pressed="false">
								<svg class="bi me-2 opacity-50"><use href="#moon-stars-fill"></use></svg>
								{{ $t('app.themeDark') }}
								<svg class="bi ms-auto d-none"><use href="#check2"></use></svg>
							</button>
						</li>
						<li>
							<button type="button" class="dropdown-item d-flex align-items-center active" data-bs-theme-value="auto" aria-pressed="true">
								<svg class="bi me-2 opacity-50"><use href="#circle-half"></use></svg>
								{{ $t('app.themeAuto') }}
								<svg class="bi ms-auto d-none"><use href="#check2"></use></svg>
							</button>
						</li>
					</ul>
				</div>
			</div>			
		</div>

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
			<symbol id="enFlag" viewBox="0 0 32 32">
				<rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#fff"></rect><path d="M1.638,5.846H30.362c-.711-1.108-1.947-1.846-3.362-1.846H5c-1.414,0-2.65,.738-3.362,1.846Z" fill="#a62842"></path><path d="M2.03,7.692c-.008,.103-.03,.202-.03,.308v1.539H31v-1.539c0-.105-.022-.204-.03-.308H2.03Z" fill="#a62842"></path><path fill="#a62842" d="M2 11.385H31V13.231H2z"></path><path fill="#a62842" d="M2 15.077H31V16.923000000000002H2z"></path><path fill="#a62842" d="M1 18.769H31V20.615H1z"></path><path d="M1,24c0,.105,.023,.204,.031,.308H30.969c.008-.103,.031-.202,.031-.308v-1.539H1v1.539Z" fill="#a62842"></path><path d="M30.362,26.154H1.638c.711,1.108,1.947,1.846,3.362,1.846H27c1.414,0,2.65-.738,3.362-1.846Z" fill="#a62842"></path><path d="M5,4h11v12.923H1V8c0-2.208,1.792-4,4-4Z" fill="#102d5e"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path><path fill="#fff" d="M4.601 7.463L5.193 7.033 4.462 7.033 4.236 6.338 4.01 7.033 3.279 7.033 3.87 7.463 3.644 8.158 4.236 7.729 4.827 8.158 4.601 7.463z"></path><path fill="#fff" d="M7.58 7.463L8.172 7.033 7.441 7.033 7.215 6.338 6.989 7.033 6.258 7.033 6.849 7.463 6.623 8.158 7.215 7.729 7.806 8.158 7.58 7.463z"></path><path fill="#fff" d="M10.56 7.463L11.151 7.033 10.42 7.033 10.194 6.338 9.968 7.033 9.237 7.033 9.828 7.463 9.603 8.158 10.194 7.729 10.785 8.158 10.56 7.463z"></path><path fill="#fff" d="M6.066 9.283L6.658 8.854 5.927 8.854 5.701 8.158 5.475 8.854 4.744 8.854 5.335 9.283 5.109 9.979 5.701 9.549 6.292 9.979 6.066 9.283z"></path><path fill="#fff" d="M9.046 9.283L9.637 8.854 8.906 8.854 8.68 8.158 8.454 8.854 7.723 8.854 8.314 9.283 8.089 9.979 8.68 9.549 9.271 9.979 9.046 9.283z"></path><path fill="#fff" d="M12.025 9.283L12.616 8.854 11.885 8.854 11.659 8.158 11.433 8.854 10.702 8.854 11.294 9.283 11.068 9.979 11.659 9.549 12.251 9.979 12.025 9.283z"></path><path fill="#fff" d="M6.066 12.924L6.658 12.494 5.927 12.494 5.701 11.799 5.475 12.494 4.744 12.494 5.335 12.924 5.109 13.619 5.701 13.19 6.292 13.619 6.066 12.924z"></path><path fill="#fff" d="M9.046 12.924L9.637 12.494 8.906 12.494 8.68 11.799 8.454 12.494 7.723 12.494 8.314 12.924 8.089 13.619 8.68 13.19 9.271 13.619 9.046 12.924z"></path><path fill="#fff" d="M12.025 12.924L12.616 12.494 11.885 12.494 11.659 11.799 11.433 12.494 10.702 12.494 11.294 12.924 11.068 13.619 11.659 13.19 12.251 13.619 12.025 12.924z"></path><path fill="#fff" d="M13.539 7.463L14.13 7.033 13.399 7.033 13.173 6.338 12.947 7.033 12.216 7.033 12.808 7.463 12.582 8.158 13.173 7.729 13.765 8.158 13.539 7.463z"></path><path fill="#fff" d="M4.601 11.104L5.193 10.674 4.462 10.674 4.236 9.979 4.01 10.674 3.279 10.674 3.87 11.104 3.644 11.799 4.236 11.369 4.827 11.799 4.601 11.104z"></path><path fill="#fff" d="M7.58 11.104L8.172 10.674 7.441 10.674 7.215 9.979 6.989 10.674 6.258 10.674 6.849 11.104 6.623 11.799 7.215 11.369 7.806 11.799 7.58 11.104z"></path><path fill="#fff" d="M10.56 11.104L11.151 10.674 10.42 10.674 10.194 9.979 9.968 10.674 9.237 10.674 9.828 11.104 9.603 11.799 10.194 11.369 10.785 11.799 10.56 11.104z"></path><path fill="#fff" d="M13.539 11.104L14.13 10.674 13.399 10.674 13.173 9.979 12.947 10.674 12.216 10.674 12.808 11.104 12.582 11.799 13.173 11.369 13.765 11.799 13.539 11.104z"></path><path fill="#fff" d="M4.601 14.744L5.193 14.315 4.462 14.315 4.236 13.619 4.01 14.315 3.279 14.315 3.87 14.744 3.644 15.44 4.236 15.01 4.827 15.44 4.601 14.744z"></path><path fill="#fff" d="M7.58 14.744L8.172 14.315 7.441 14.315 7.215 13.619 6.989 14.315 6.258 14.315 6.849 14.744 6.623 15.44 7.215 15.01 7.806 15.44 7.58 14.744z"></path><path fill="#fff" d="M10.56 14.744L11.151 14.315 10.42 14.315 10.194 13.619 9.968 14.315 9.237 14.315 9.828 14.744 9.603 15.44 10.194 15.01 10.785 15.44 10.56 14.744z"></path><path fill="#fff" d="M13.539 14.744L14.13 14.315 13.399 14.315 13.173 13.619 12.947 14.315 12.216 14.315 12.808 14.744 12.582 15.44 13.173 15.01 13.765 15.44 13.539 14.744z"></path>
			</symbol>
			<symbol id="brFlag" viewBox="0 0 32 32">
				<rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#459a45"></rect><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M3.472,16l12.528,8,12.528-8-12.528-8L3.472,16Z" fill="#fedf00"></path><circle cx="16" cy="16" r="5" fill="#0a2172"></circle><path d="M14,14.5c-.997,0-1.958,.149-2.873,.409-.078,.35-.126,.71-.127,1.083,.944-.315,1.951-.493,2.999-.493,2.524,0,4.816,.996,6.519,2.608,.152-.326,.276-.666,.356-1.026-1.844-1.604-4.245-2.583-6.875-2.583Z" fill="#fff"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path>
			</symbol>
		</svg>
	</header>

	<main id="start" style="padding-top: 70px;">
		<div class="container p-3">
			<div class="bg-body-tertiary mb-3 p-3 p-lg-5 rounded">
				<h1 class="mb-3">{{ $t('app.titleMain') }}</h1>
				<p class="lead" v-html="$t('app.introDescription')"></p>
				<p class="lead" v-html="$t('app.introInstructions')"></p>

				<form @submit.prevent="handleFormSubmit" class="mt-5">
					<div class="row">
						<div class="input-group mb-2">
							<input v-on:change="previewFile" id="inputFile" name="file" type="file" class="form-control form-control-lg" :aria-label="$t('app.ariaUpload')" accept=".html" required="required">
							<button id="btnSend" class="btn btn-primary btn-lg" type="submit">{{ $t('app.buttonsProcess') }}</button>
						</div>
					</div>
				</form>

				<div class="alert alert-info mt-2" role="alert">
                    <i class="bi bi-info-circle-fill me-2"></i>
                    <small v-html="$t('app.securityAlert')"></small>
                </div>
			</div>

			<a class="anchor" id="result"></a>

			<div class="my-5" v-show="resultList.length > 0">
				<ul class="nav nav-tabs mb-4" role="tablist">
					<li class="nav-item" role="presentation">
						<button class="nav-link active" data-bs-toggle="tab" data-bs-target="#list-tab-pane" type="button" role="tab" aria-controls="list-tab-pane" aria-selected="true">{{ $t('app.tabsList') }}</button>
					</li>
					<li class="nav-item" role="presentation">
						<button @click="loadCharts" class="nav-link" data-bs-toggle="tab" data-bs-target="#charts-tab-pane" type="button" role="tab" aria-controls="charts-tab-pane" aria-selected="false">{{ $t('app.tabsCharts') }}</button>
					</li>
				</ul>

				<div class="tab-content">
					<div class="tab-pane fade show active" id="list-tab-pane" role="tabpanel" aria-labelledby="list-tab" tabindex="0">
						<result-alert-component :ipData="resultItens" :ispData="ispList"></result-alert-component>

						<div class="card mb-4 rounded-3 shadow-sm">
							<div class="card-header py-3">
								<h4 class="my-0 fw-normal">{{ $t('app.cardsProvidersLocation') }}</h4>
							</div>
							<div class="card-body">
								<GMapMap ref="myMapRef" :center="mapCenter" :zoom="mapZoom" map-type-id="terrain" style="width: 100%; height: 400px" :options="mapOptions">
									<GMapMarker :key="marker" v-for="marker in mapMarkers" :position="marker.position"/>	
								</GMapMap>
							</div>
						</div>
						
						<div class="card mb-4 rounded-3 shadow-sm">
							<div class="card-header py-3">
								<h4 class="my-0 fw-normal">{{ $t('app.cardsIpList') }}</h4>
							</div>
							<div class="card-body">
								<label class="form-label">{{ $t('app.labelsControls') }}</label>

								<div class="row row-cols-lg-auto g-3 mb-3">
									<div class="col-12 d-grid d-lg-block">
										<div class="input-group">
											<span class="input-group-text" id="basic-addon1">{{ $t('app.labelsTimezone') }}</span>
											<select v-model="formData.selectedTimezone" class="form-select">
												<option v-for="item in timezoneItens" :value="item.id" :key="item.id">{{ item.text }}</option>
											</select>
										</div>
									</div>

									<div class="col-12 d-grid d-lg-block">
										<div class="btn-group" role="group">
											<button @click="clearFilters()" type="button" class="btn btn-outline-secondary position-relative" :disabled="!isFilterDefined">
												{{ $t('app.buttonsClearFilters') }}
											</button>
											<button type="button" class="btn btn-outline-secondary position-relative" data-bs-toggle="modal" data-bs-target="#exampleModal">
												{{ $t('app.buttonsFilter') }}
												<span v-if="isFilterDefined" class="position-absolute top-0 start-100 translate-middle p-2 bg-primary border border-light rounded-circle">
													<span class="visually-hidden">{{ $t('app.ariaAlert') }}</span>
												</span>
											</button>
										</div>										
									</div>

									<div class="col-12 d-grid d-lg-block">
										<button type="button" class="btn btn-outline-secondary" @click="$refs.listComponent.exportExcel()">{{ $t('app.buttonsExportExcel') }}</button>
									</div>
								</div>

								<hr/>
								
								<list-component ref="listComponent" :ipData="resultItens" :ispData="ispList" :timezoneData="formData.selectedTimezone"></list-component>
							</div>
						</div>						
					</div>

					<div class="tab-pane fade" id="charts-tab-pane" role="tabpanel" aria-labelledby="chart-tab" tabindex="0">
						<chart-component :data="dataChart1" :title="$t('app.chartsByDate')" :type="'line'"></chart-component>
						<chart-component :data="dataChart2" :title="$t('app.chartsByDayOfWeek')" :type="'bar'"></chart-component>
						<chart-component :data="dataChart3" :title="$t('app.chartsByHour')" :type="'line'"></chart-component>
						<chart-component :data="dataChart4" :title="$t('app.chartsByProvider')" :type="'pie'"></chart-component>
					</div>
				</div>
			</div>

			<p class="text-muted small text-center" v-html="$t('app.footerDevelopedByHTML')"></p>
		</div>
	</main>

	<!-- Filter Modal -->
	<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<h1 class="modal-title fs-5" id="exampleModalLabel">{{ $t('app.modalFilterTitle') }}</h1>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<div class="row g-3">
						<div class="col-md-6">
							<label for="inputInitialDate" class="form-label">{{ $t('app.modalInitialDate') }}</label>
							<input v-model="filterData.initialDate" type="date" class="form-control" id="inputInitialDate">
						</div>
						<div class="col-md-6">
							<label for="inputFinalDate" class="form-label">{{ $t('app.modalFinalDate') }}</label>
							<input v-model="filterData.finalDate" type="date" class="form-control" id="inputFinalDate">
						</div>
						<div class="col-md-6">
							<label for="inputInitialTime" class="form-label">{{ $t('app.modalInitialTime') }}</label>
							<input v-model="filterData.initialTime" type="time" class="form-control" id="inputInitialTime" >
						</div>
						<div class="col-md-6">
							<label for="inputFinalTime" class="form-label">{{ $t('app.modalFinalTime') }}</label>
							<input v-model="filterData.finalTime" type="time" class="form-control" id="inputFinalTime">
						</div>
						<div class="col-md-6">
							<label for="selectCountry" class="form-label">{{ $t('app.modalCountry') }}</label>
							<select v-model="filterData.country" class="form-select" id="selectCountry">
								<option value="">{{ $t('app.modalAll') }}</option>
								<option v-for="item in countryItens" :value="item" :key="item">{{ item }}</option>
							</select>
						</div>
						<div class="col-md-6">
							<label for="selectRegion" class="form-label">{{ $t('app.modalRegion') }}</label>
							<select v-model="filterData.region" class="form-select" id="selectRegion">
								<option value="">{{ $t('app.modalAll') }}</option>
								<option v-for="item in regionItens" :value="item" :key="item">{{ item }}</option>
							</select>
						</div>
						<div class="col-md-6">
							<label for="selectCity" class="form-label">{{ $t('app.modalCity') }}</label>
							<select v-model="filterData.city" class="form-select" id="selectCity">
								<option value="">{{ $t('app.modalAll') }}</option>
								<option v-for="item in cityItens" :value="item" :key="item">{{ item }}</option>
							</select>
						</div>
						<div class="col-md-6">
							<label for="selectISP" class="form-label">{{ $t('app.modalIsp') }}</label>
							<select v-model="filterData.isp" class="form-select" id="selectISP">
								<option value="">{{ $t('app.modalAll') }}</option>
								<option v-for="item in ispItens" :value="item" :key="item">{{ item }}</option>
							</select>
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal" @click="clearFilters()">{{ $t('app.buttonsClearFilters') }}</button>
					<button type="button" class="btn btn-primary" data-bs-dismiss="modal">{{ $t('app.buttonsClose') }}</button>
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
				initialTime: '',
				finalTime: '',
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
				this.filterData.initialTime !== "" ||
				this.filterData.finalTime !== "" ||
				this.filterData.country !== "" ||
				this.filterData.region !== "" ||
				this.filterData.city !== "" ||
				this.filterData.isp !== "";
		},
		resultItens: function() {
			return this.resultList.filter(ipInfo => {
				// Convert data and time for comparison
				const ipDate = moment.utc(ipInfo.timestamp).utcOffset(this.formData.selectedTimezone);
				const initialDate =  moment(this.filterData.initialDate).utcOffset(this.formData.selectedTimezone, true);
				const finalDate =  moment(this.filterData.finalDate).utcOffset(this.formData.selectedTimezone, true);

				const ipTime = moment(`${ipDate.hour()}:${ipDate.minute()}`, "HH:mm").utcOffset(this.formData.selectedTimezone, true);
				const initialTime = moment(this.filterData.initialTime, "HH:mm").utcOffset(this.formData.selectedTimezone, true);
				const finalTime = moment(this.filterData.finalTime, "HH:mm").utcOffset(this.formData.selectedTimezone, true);

				// Finding correspondent ISP
				const ispObj = this.ispList[ipInfo.ispIndex];
				if (!ispObj) return false;  // If there is no corresponding ISP, discard the IP

				// Verify all the filters
				return (this.filterData.initialDate === "" || ipDate.isSameOrAfter(initialDate, 'day')) &&
					(this.filterData.finalDate === "" || ipDate.isSameOrBefore(finalDate, 'day')) &&
					(this.filterData.initialTime === "" || ipTime.isSameOrAfter(initialTime, 'minute')) &&
					(this.filterData.finalTime === "" || ipTime.isSameOrBefore(finalTime, 'minute')) &&
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

			const sortedTimestamps = this.resultList.map(ip => moment.utc(ip.timestamp).utcOffset(this.formData.selectedTimezone)).sort((a, b) => a - b);
			const firstDay = sortedTimestamps[0];
			const lastDay = sortedTimestamps[sortedTimestamps.length - 1];
			const dateCounts = {};
			const dayOfWeekCounts = Array.from({ length: 7 }, () => ({}));
			const hourCounts = Array.from({ length: 24 }, () => 0);
			const ispCounts = {};
			
			for (let day = firstDay; day.isSameOrBefore(lastDay, 'day'); day.add(1, 'day')) {
				const formattedDay = this.formatDate(day, 'L');
				dateCounts[formattedDay] = 0;
			}
			

			this.resultList.forEach(ip => {
				const momentTimestamp = moment.utc(ip.timestamp).locale(this.$i18n.locale).utcOffset(this.formData.selectedTimezone);

				const date = this.formatDate(ip.timestamp, 'L');
				dateCounts[date] += 1;

				const dayOfWeek = momentTimestamp.day();
				dayOfWeekCounts[dayOfWeek].name = momentTimestamp.format('dddd');
				dayOfWeekCounts[dayOfWeek].count = (dayOfWeekCounts[dayOfWeek].count || 0) + 1;

				const hour = momentTimestamp.hours();
				hourCounts[hour] += 1;

				const ispName = this.ispList[ip.ispIndex].isp;
				ispCounts[ispName] = (ispCounts[ispName] || 0) + 1;
			});

			const dataChart1 = Object.entries(dateCounts).map(([day, count]) => ({ day, count }));
			const dataChart2 = Object.entries(dayOfWeekCounts).map(([dayOfWeek]) => ({ dayOfWeek: dayOfWeekCounts[dayOfWeek].name, count: dayOfWeekCounts[dayOfWeek].count }));
			const dataChart3 = Object.entries(hourCounts).map(([hour, count]) => ({ hour: parseInt(hour)+"h", count }));
			const dataChart4 = Object.entries(ispCounts).map(([name, count]) => ({ name, count }));


			// ##############################################
			// ######### First Chart - Logs By Date #########
			// ##############################################	

			this.dataChart1 = {
				labels: dataChart1.map(row => row.day),
				datasets: [
					{
						label: this.$t('app.connectionLogs'),
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
						label: this.$t('app.connectionLogs'),
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
						label: this.$t('app.connectionLogs'),
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
						label: this.$t('app.connectionLogs'),
						data: dataChart4.map(row => row.count)
					}
				]
			}
		},
		clearFilters() {
			this.filterData.initialDate = "";
			this.filterData.finalDate = "";			
			this.filterData.initialTime = "";
			this.filterData.finalTime = "";		
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
		formatDate(dateValue, format) {
			return moment.utc(dateValue).utcOffset(this.formData.selectedTimezone).locale(this.$i18n.locale).format(format);
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
					ispItem.isp = this.$t('app.notFound');
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
					var url  = process.env.VUE_APP_IP_API_URL + item.ip + "/" + this.formatDate(item.timestamp, "YYYY-MM-DD");
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
					console.error('An error occurred while fetching data: ', error);
				}	
			}	
		},
		changeLocale(value) {
			this.$i18n.locale = value;
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