<template>
	<div id="statusPanel" :class="{ 'alert mb-4 ': true, 'alert-warning': isWarningAlert, 'alert-success': isSuccessAlert, 'alert-danger': isErrorAlert }" role="alert">
		<h4 class="mb-3">Resultado do Processamento:</h4>
		<hr/>
		
		<div v-for="(alertObj, index) in alertList" :key="index"  class="d-flex flex-row mb-2">
			<div v-if="alertObj.status == 'loading'" class="spinner-border spinner-border-sm me-3"><span class="visually-hidden">Loading...</span></div>
			<i v-if="alertObj.status == 'error'" class="text-danger bi bi-x-circle-fill me-3"></i>
			<i v-if="alertObj.status == 'success'" class="text-success bi bi-check-circle-fill me-3"></i>
			<i v-if="alertObj.status == 'warning'" class="text-warning bi bi-exclamation-circle-fill me-3"></i>
			<span><strong>{{ index+1 }}.</strong> <span v-html="alertObj.text"></span></span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ResultAlertComponent',
	props: {
		ipData: null,
		ispData: null
	},
	computed: {
		errorCount: function() {
			return this.countIspByStatus('error');
		},
		successCount: function() {
			return this.countIspByStatus('success');
		},
		loadingCount: function() {
			return this.countIspByStatus('loading');
		},
		isWarningAlert: function() {
			return (this.loadingCount > 0) || (this.successCount > 0 && this.errorCount > 0);
		},
		isErrorAlert: function() {
			return this.loadingCount == 0 && this.successCount == 0 && this.errorCount > 0;
		},
		isSuccessAlert: function() {
			return this.loadingCount == 0 && this.successCount > 0 && this.errorCount == 0;
		},
		alertList: function () {
			var alertList = [
			{
				status:'success', 
				text:'Processando registros: esta etapa poderá levar alguns segundos, dependendo do tamanho do arquivo e da capacidade de processamento da máquina do cliente.'
			},
			{
				status:'success',
				text:`Foram identificados um total de <strong>${ this.ipData.length }</strong> registro(s) de conexão.`
			}
			];
			
			if(this.loadingCount > 0) {
				alertList.push(
				{
					status: 'loading',
					text: `Consultando provedores de conexão dos endereços IP diferentes: <strong>${ this.successCount }</strong> de <strong>${ this.ispData.length }</strong>.`
				}
				);
				
			} else {
				
				if (this.successCount == this.ispData.length) {
					alertList.push(
					{
						status: 'success',
						text: `Todos os provedores de conexão foram carregados.`
					}
					);
					
				} else if (this.errorCount == this.ispData.length) {
					alertList.push(
					{
						status: 'error',
						text: 'Não foi possível consultar os provedores de conexão.'
					}
					);
					
				} else {
					alertList.push(
					{
						status: 'warning',
						text: `Consultando provedores de conexão dos endereços IP diferentes: <strong>${ this.successCount }</strong> de <strong>${ this.ispData.length }</strong>.`
					}
					);
					alertList.push(
					{
						status: 'error',
						text: `Ocorreu um erro ao consultar <strong>${ this.errorCount }</strong> endereço(s) IP.`
					}
					);
				}
			}
			
			return alertList;
		}
	},
	methods: {
		countIspByStatus(status) {
			return this.ispData.filter(function(element){
				return element.status == status;
			}).length;
		}
	}
};
</script>