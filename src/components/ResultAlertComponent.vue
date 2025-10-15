<template>
	<div id="statusPanel" :class="{ 'alert mb-4 ': true, 'alert-warning': isWarningAlert, 'alert-success': isSuccessAlert, 'alert-danger': isErrorAlert }" role="alert">
		<h4 class="mb-3">{{$t('resultAlertComponent.title')}}</h4>
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
				text:this.$t('resultAlertComponent.processing')
			},
			{
				status:'success',
				text:this.$t('resultAlertComponent.foundTotal', { total: this.ipData.length })
			}
			];
			
			if(this.loadingCount > 0) {
				alertList.push(
				{
					status: 'loading',
					text: this.$t('resultAlertComponent.checkingProviders', { success: this.successCount, total: this.ispData.length })
				}
				);
				
			} else {
				
				if (this.successCount == this.ispData.length) {
					alertList.push(
					{
						status: 'success',
						text: this.$t('resultAlertComponent.allProvidersLoaded')
					}
					);
					
				} else if (this.errorCount == this.ispData.length) {
					alertList.push(
					{
						status: 'error',
						text: this.$t('resultAlertComponent.couldNotCheckProviders')
					}
					);
					
				} else {
					alertList.push(
					{
						status: 'warning',
						text: this.$t('resultAlertComponent.checkingProviders', { success: this.successCount, total: this.ispData.length })
					}
					);
					alertList.push(
					{
						status: 'error',
						text: this.$t('resultAlertComponent.errorChecking', { errorCount: this.errorCount })
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