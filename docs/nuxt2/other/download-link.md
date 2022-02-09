 async getReportObjectUrl(month: number, year: number) {
    const url = `front/agencies/applications/report?month=${month}&year=${year}`;
    // const response = await this.apiRequest.getJSON(url, { responseType: "blob" });
    const response = await this.apiRequest.getJSON(url, { responseType: "arraybuffer" });
    if (!!response && response.status === 200) {
      // return window.URL.createObjectURL(new Blob([response.data]));
      return window.URL.createObjectURL(new Blob([response.data], { type: "application/pdf;charset=utf-8" }));
    }
    return null;
  }


   <a class="ml-16 text-color-blue" :href="reportObjectUrl" target="_blank">{{ reportName }}</a>

   reportObjectUrl = getReportObjectUrl()