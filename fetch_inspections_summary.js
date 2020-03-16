// https://docs.google.com/spreadsheets/u/0/d/e/2CAIWO3el-HmgYwUDCtPq_lRifv9VeS5De_q1mFXBFN3IdI8fo4s9imGUqQGBwxlo-ETfBD_zxsbRQoCRyMg/gviz/chartiframe?oid=711912240


data = JSON.parse(chartData.chart.chartJson)
rows = data.dataTable.rows
嚴重特殊傳染性肺炎通報 = r.map(function(it){return it.c[1].v})
居家檢疫送驗 = r.map(function(it){return it.c[2].v})
疑似新冠病毒感染送驗 = r.map(function(it){return it.c[3].v})

text嚴重特殊傳染性肺炎通報 = JSON.stringify(嚴重特殊傳染性肺炎通報, null, 20)
text居家檢疫送驗 = JSON.stringify(居家檢疫送驗, null, 20)
text疑似新冠病毒感染送驗 = JSON.stringify(疑似新冠病毒感染送驗, null, 20)
