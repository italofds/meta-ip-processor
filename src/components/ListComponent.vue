<template>
	<div class="table-responsive mb-3 mt-3">
		<table class="table table-striped table-hover mb-0">
			<thead>
				<tr>
					<th class="text-nowrap" scope="col">#</th>
					<th class="text-nowrap" scope="col">{{ $t('listComponent.ipAddress') }}</th>
					<th class="text-nowrap" scope="col">{{ $t('listComponent.logicalPort') }}</th>
					<th class="text-nowrap text-center" scope="col">{{ $t('listComponent.date') }}</th>
					<th class="text-nowrap text-center" scope="col">{{ $t('listComponent.time') }}</th>
					<th class="text-nowrap" scope="col">{{ $t('listComponent.country') }}</th>
					<th class="text-nowrap" scope="col">{{ $t('listComponent.region') }}</th>
					<th class="text-nowrap" scope="col">{{ $t('listComponent.city') }}</th>
					<th class="text-nowrap" scope="col">{{ $t('listComponent.provider') }}</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(resultObj, index) in finalList" :key="index" :class="ispData[resultObj.ispIndex].status">
					<td>
						<div v-if="ispData[resultObj.ispIndex].status == 'loading'" class="spinner-border spinner-border-sm" role="status">
							<span class="visually-hidden">Loading...</span>
						</div>
						<i v-if="ispData[resultObj.ispIndex].status == 'error'" class="text-danger bi bi-x-circle-fill"></i>
						<i v-if="ispData[resultObj.ispIndex].status == 'success'" class="text-success bi bi-check-circle-fill"></i>
					</td>
					<td class="text-nowrap">{{ printValue(resultObj.ip) }}</td>
					<td class="text-nowrap">{{ printValue(resultObj.port) }}</td>
					<td class="text-nowrap text-center">{{ convertDatetimeFormat(resultObj.timestamp, "DD/MM/YYYY") }}</td>
					<td class="text-nowrap text-center">{{ convertDatetimeFormat(resultObj.timestamp, "HH:mm:ss") }}</td>
					<td class="text-nowrap">{{ printValue(ispData[resultObj.ispIndex].country) }}</td>
					<td class="text-nowrap">{{ printValue(ispData[resultObj.ispIndex].region) }}</td>
					<td class="text-nowrap">{{ printValue(ispData[resultObj.ispIndex].city) }}</td>
					<td class="text-nowrap">{{ printValue(ispData[resultObj.ispIndex].isp) }}</td>
				</tr>
			</tbody>
		</table>
	</div>

	<p class="text-center">{{ $t('listComponent.displayingRecords', { first: firstVisibleItem, last: lastVisibleItem }) }}</p>

	<div class="d-flex justify-content-center">
		<div class="row row-cols-lg-auto g-3 mb-3">

			<div class="col-12 d-grid d-lg-block">
				<div class="btn-group" role="group">
					<button @click="firstPage" type="button" class="btn btn-outline-secondary" :disabled="currentPage == 1">
						<i class="bi bi-chevron-double-left"></i>
					</button>
					<button @click="previewsPage" type="button" class="btn btn-outline-secondary" :disabled="currentPage == 1">
						<i class="bi bi-chevron-left"></i>
					</button>
				</div>
			</div>

			<div class="col-12 d-grid d-lg-block">
				<div class="input-group">
					<div class="input-group-text" id="btnGroupAddon">{{ $t('listComponent.pageNumber') }}</div>
					<input v-model="currentPage" type="number" class="form-control text-center" step="1" min="1" :max="maxPages" aria-label="List Page" aria-describedby="List Page">
				</div>
			</div>

			<div class="col-12 d-grid d-lg-block">
				<div class="btn-group" role="group">
					<button @click="nextPage" type="button" class="btn btn-outline-secondary" :disabled="currentPage == maxPages">
						<i class="bi bi-chevron-right"></i>
					</button>
					<button @click="lastPage" type="button" class="btn btn-outline-secondary" :disabled="currentPage == maxPages">
						<i class="bi bi-chevron-double-right"></i>
					</button>
				</div>
			</div>			
		</div>
	</div>
</template>

<script>
import moment from 'moment';
import * as XLSX from 'xlsx';



export default {
	name: 'ListComponent',
	props: {
		ipData: null,
		ispData: null,
		timezoneData: null
	},
	data() {
		return {
			MAX_ITENS_PER_PAGE: 100,
			currentPage: 1
		};
	},
    watch: {
        ipData: {
            deep: true,
            handler() {
                this.restartList();
            }
        }
    },
	computed: {
		maxPages: function () {
			return Math.ceil(this.ipData.length / this.MAX_ITENS_PER_PAGE);
		},
		firstVisibleItem: function() {
			return (this.currentPage-1) * this.MAX_ITENS_PER_PAGE;
		},
		lastVisibleItem: function() {
			var itemIndex = ((this.currentPage-1) * this.MAX_ITENS_PER_PAGE) + this.MAX_ITENS_PER_PAGE;

			if(itemIndex > this.ipData.length) {
				itemIndex = this.ipData.length;
			}
			return itemIndex;
		},
		finalList: function() {
			return this.ipData.slice(this.firstVisibleItem, this.lastVisibleItem);
		}
	},
	methods: {
		restartList() {
			this.currentPage = 1;
		},
		printValue: function (value) {
			return value ? value : "-";
		},
		convertDatetimeFormat: function (dateValue, format) {
			if (dateValue) {
				const utcDate = new Date(dateValue);
				const momentUtcDate = moment.utc(utcDate);
				const targetTime = momentUtcDate.utcOffset(this.timezoneData);
				const timeText = targetTime.format(format);
				return timeText;
			}
			return "";
		},
		exportExcel() {
			var exportDataList = [];

			for(let resultItem of this.ipData) {
				var exportData = {};
				exportData[this.$t('listComponent.ipAddress')] = this.printValue(resultItem.ip);
				exportData[this.$t('listComponent.logicalPort')] = this.printValue(resultItem.port);
				exportData[this.$t('listComponent.date')] = this.convertDatetimeFormat(resultItem.timestamp, "DD/MM/YYYY");
				exportData[this.$t('listComponent.time')] = this.convertDatetimeFormat(resultItem.timestamp, "HH:mm:ss");
				exportData[this.$t('listComponent.country')] = this.printValue(this.ispData[resultItem.ispIndex].country);
				exportData[this.$t('listComponent.region')] = this.printValue(this.ispData[resultItem.ispIndex].region);
				exportData[this.$t('listComponent.city')] = this.printValue(this.ispData[resultItem.ispIndex].city);
				exportData[this.$t('listComponent.provider')] = this.printValue(this.ispData[resultItem.ispIndex].isp);
				exportDataList.push(exportData);
			}			

			var worksheet = XLSX.utils.json_to_sheet(exportDataList);					
			var workbook = XLSX.utils.book_new();
			XLSX.utils.book_append_sheet(workbook, worksheet, this.$t('listComponent.sheetName'));
			XLSX.writeFile(workbook, "meta-ip-result.xlsx");
		},
		previewsPage() {
			if(this.currentPage > 1) {
				this.currentPage -= 1;
			}
		},
		firstPage() {
			this.currentPage = 1;
		},
		nextPage() {
			if(this.currentPage < this.maxPages) {
				this.currentPage += 1;
			}
		},
		lastPage() {
			this.currentPage = this.maxPages;
		}
	}
};
</script>