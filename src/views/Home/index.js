import * as echarts from 'echarts'
export default {
  data () {
    const myData = ['福州市', '莆田市', '泉州市', '厦门市', '龙岩市', '三明市', '南平市', '宁德市']
    // 全彩屏，双基色屏，简易屏，条形屏
    const offLine = [
      [20, 40, 60, 60, 10, 20, 40, 20, 20, 10],
      [10, 30, 50, 20, 50, 30, 30, 40, 10, 20],
      [50, 20, 40, 10, 20, 40, 20, 30, 30, 30],
      [20, 10, 30, 40, 10, 10, 10, 40, 40, 40]
    ]
    const onLine = [
      [10, 20, 20, 40, 20, 10, 60, 60, 40, 20],
      [20, 10, 40, 30, 30, 50, 20, 50, 30, 10],
      [30, 30, 30, 20, 40, 20, 10, 40, 20, 50],
      [40, 40, 40, 10, 10, 10, 40, 30, 10, 20]
    ]
    const offLineSum = [100, 100, 180, 130, 90, 100, 100, 130, 100, 100]
    const onLineSum = [100, 100, 130, 100, 100, 90, 130, 180, 100, 100]
    return {
      options: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line'
          },
          backgroundColor: 'rgba(9, 24, 48, 0.5)',
          borderColor: 'rgba(75, 253, 238, 0.4)',
          textStyle: {
            color: '#CFE3FC'
          }
        },
        grid: {
          top: '30',
          left: '0%',
          right: '0%',
          bottom: '0%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          boundaryGap: true,
          axisLine: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: '#959FA9',
              fontSize: 14
            }
          },
          axisTick: {
            show: false
          },
          data: ['2020-2-17', '2020-2-17', '2020-2-17', '2020-2-17', '2020-2-17', '2020-2-17', '2020-2-17']
        }],
        yAxis: [{
          type: 'value',
          axisTick: {
            show: false
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed',
              color: 'rgba(226, 226, 226, 0.3)',
              width: 1
            }
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: 'rgb(2,185,208)'
            }
          },
          axisLabel: {
            textStyle: {
              color: '#959FA9',
              fontSize: 14
            }
          }
        }],
        series: [{
          name: '待办',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          showAllSymbol: true,
          symbolSize: 12,
          label: {
            show: true,
            position: 'top'

          },
          itemStyle: {
            normal: {
              color: '#60acfc'
            }
          },

          areaStyle: { // 区域填充样式
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(96, 172, 252, 0.28)'
              },
              {
                offset: 1,
                color: 'rgba(96, 172, 252, 0.01)'
              }
              ], false)
            }
          },
          data: [80, 90, 70, 100, 110, 100, 90]
        }, {
          name: '已办',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          showAllSymbol: true,
          symbolSize: 12,
          label: {
            show: true,
            position: 'top'

          },
          itemStyle: {
            normal: {
              color: 'rgba(58, 199, 139, 1)'
            }
          },

          areaStyle: { // 区域填充样式
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(58, 199, 139, 0.28)'
              },
              {
                offset: 1,
                color: 'rgba(58, 199, 139, 0.01)'
              }
              ], false)
            }
          },
          data: [50, 60, 40, 60, 70, 40, 50]
        }, {
          name: '超期',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          showAllSymbol: true,
          symbolSize: 12,
          label: {
            show: true,
            position: 'top'

          },
          itemStyle: {
            normal: {
              color: '#feb64d'
            }
          },

          areaStyle: { // 区域填充样式
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(254, 182, 77, 0.28)'
              },
              {
                offset: 1,
                color: 'rgba(254, 182, 77, 0.01)'
              }
              ], false)
            }
          },
          data: [10, 50, 30, 40, 50, 30, 26]
        }, {
          name: '超期',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          showAllSymbol: true,
          symbolSize: 12,
          label: {
            show: true,
            position: 'top'

          },
          itemStyle: {
            normal: {
              color: '#ff7b7b'
            }
          },

          areaStyle: { // 区域填充样式
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(255, 123, 123, 0.28)'
              },
              {
                offset: 1,
                color: 'rgba(255, 123, 123, 0.01)'
              }
              ], false)
            }
          },
          data: [30, 68, 26, 80, 60, 40, 20]
        }]
      },
      histogramOptions: {
        color: [
          '#60acfc',
          '#5bc49f',
          '#feb64d',
          '#ff7b7b'
        ],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          orient: 'vertical',
          x: 'right',
          y: 'center',
          align: 'left',
          padding: 0,
          data: ['待办', '已办', '超期', '退回']
        },
        grid: {
          top: '4%',
          right: 40,
          left: 0,
          bottom: 0,
          containLabel: true
        },
        xAxis: {
          type: 'category',
          axisTick: {
            show: false
          },
          data: ['总数', '一季度', '二季度', '三季度', '四季度']
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        series: [
          {
            type: 'bar',
            stack: 'one',
            align: 'inside',
            name: '待办',
            data: [10, '-', 10, '-', '-'],
            barWidth: '40%',
            label: {
              show: true,
              position: 'inside',
              fontSize: 12,
              color: 'white',
              textBorderWidth: 1,
              textBorderColor: 'inherit'
            },
            labelLayout: {
              hideOverlap: true
            }
          },
          {
            type: 'bar',
            stack: 'one',
            align: 'inside',
            name: '已办',
            data: [32, 10, 8, '-', 14],
            barWidth: '40%',
            label: {
              show: true,
              position: 'inside',
              fontSize: 12,
              color: 'white',
              textBorderWidth: 1,
              textBorderColor: 'inherit'
            },
            labelLayout: {
              hideOverlap: true
            }
          },
          {
            type: 'bar',
            stack: 'one',
            align: 'inside',
            name: '超期',
            data: [171, 27, 20, 100, 24],
            barWidth: '40%',
            label: {
              show: true,
              position: 'inside',
              fontSize: 12,
              color: 'white',
              textBorderWidth: 1,
              textBorderColor: 'inherit'
            },
            labelLayout: {
              hideOverlap: true
            }
          },
          {
            type: 'bar',
            stack: 'one',
            align: 'inside',
            name: '退回',
            data: [84, '-', 52, '-', 32],
            barWidth: '40%',
            label: {
              show: true,
              position: 'inside',
              fontSize: 12,
              color: 'white',
              textBorderWidth: 1,
              textBorderColor: 'inherit'
            },
            labelLayout: {
              hideOverlap: true
            }
          },
          {
            type: 'bar',
            name: '总数',
            color: 'rgba(0,0,0,0)',
            data: [297, 37, 90, 100, 70],
            barWidth: 0,
            label: {
              show: true,
              position: 'top',
              fontSize: 12
            },
            z: -1,
            barGap: '-100%',
            labelLayout: {
              hideOverlap: true
            }
          }
        ]
      },
      doubleColumnOptions: {
        legend: [
          {
            // 图例
            top: '0%',
            left: 'center', // 图例距离左侧距离(此处水平居中)
            textStyle: {
              // 图例文本样式
              color: '#666'
            },
            itemGap: 100,
            selectedMode: false, // 图例点击失效
            data: ['即办件', '承诺件']
          },
          {
            // 图例
            bottom: '0',
            left: 'center', // 图例距离左侧距离(此处水平居中)
            textStyle: {
              // 图例文本样式
              color: '#666'
            },
            selectedMode: true, // 图例点击失效
            data: ['待办', '已办', '超期', '退回']
          }
        ],
        tooltip: {
          // 提示框
          show: true,
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器配置项。
            type: 'shadow' // 'line' 直线指示器;'shadow' 阴影指示器.
          },
          // formatter: '{b}<br/>脱机: {c}' // 提示框所提示的文本内容
          formatter: function (params) {
            const fullScreenColor = '<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:#60acfc;"></span>' // 全彩屏颜色
            const doubleScreenColor = '<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:#5bc49f;"></span>' // 双基色屏颜色
            const simpleScreenColor = '<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:#feb64d;"></span>' // 简易屏颜色
            const lineScreenColor = '<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:#ff7b7b;"></span>' // 条形屏颜色
            const fullScreen = params[0] // 全彩屏序列
            const doubleScreen = params[1] // 双基色屏序列
            const simpleScreen = params[2] // 简易屏屏序列
            const lineScreen = params[3] // 条形屏屏序列
            const bg = params[4] // 背景区分即办件与承诺件
            const status =
                bg.seriesName === '即办件'
                  ? '<span style="display:inline-block;color:#2087FE;">即办件</span>'
                  : '<span style="display:inline-block;color:#DC3239;">承诺件</span>'
            return (
              `${fullScreen.name}(${status})</br>` +
              `${fullScreenColor}${fullScreen.seriesName}：${fullScreen.value}</br>` +
              `${doubleScreenColor}${doubleScreen.seriesName}：${doubleScreen.value}</br>` +
              `${simpleScreenColor}${simpleScreen.seriesName}：${simpleScreen.value}</br>` +
              `${lineScreenColor}${lineScreen.seriesName}：${lineScreen.value}</br>`
            )
          }
        },
        grid: [
          {
            // 左边
            show: false,
            left: '2%',
            top: 20,
            bottom: 60,
            containLabel: true,
            width: '43%'
          },
          {
            // 中间
            show: false,
            left: '55%',
            top: 40,
            bottom: 60,
            width: '14%'
          },
          {
            // 右边
            show: false,
            right: '2%',
            top: 20,
            bottom: 60,
            containLabel: true,
            width: '43%'
          }
        ],
        // X轴线配置
        xAxis: [
          {
            // 左侧区域
            gridIndex: 0, // x 轴所在的 grid 的索引，默认位于第一个 grid。[ default: 0 ]
            type: 'value', // 轴线类型: 数值轴
            position: 'top', // 轴线位置(此处位于顶部)
            inverse: true, // 是否是反向坐标轴.[ default: false ]
            axisLine: {
              show: false // 轴线不显示
            },
            axisTick: {
              show: false // 轴线刻度不显示
            },
            axisLabel: {
              // 轴线刻度标签
              show: true, // 显示刻度标签
              textStyle: {
                // 标签样式
                color: '#153D7D64',
                fontSize: 12
              }
            },
            splitLine: {
              // 垂直于X轴的分隔线
              show: true, // 显示分隔线
              lineStyle: {
                // 分隔线样式
                color: '#153D7D64',
                width: 1,
                type: 'solid'
              }
            }
          },
          {
            // 中间区域
            gridIndex: 1,
            show: false // 中间部分不显示X轴
          },
          {
            // 右侧区域
            gridIndex: 2,
            type: 'value',
            position: 'top',
            inverse: false, // 是否是反向坐标轴.[ default: false ]
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#153D7D64',
                fontSize: 12
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#153D7D64',
                width: 1,
                type: 'solid'
              }
            }
          }
        ],
        // Y轴线配置
        yAxis: [
          {
            // 左侧区域
            gridIndex: 0, // y 轴所在的 grid 的索引，默认位于第一个 grid。[ default: 0 ]
            type: 'category', // 轴线类型: 类目轴
            // 类目轴中 boundaryGap 可以配置为 true 和 false。默认为 true，这时候刻度只是作为分隔线，标签和数据点都会在两个刻度之间的带(band)中间。
            boundaryGap: true, // 坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样。
            inverse: true, // 是否是反向坐标轴.[ default: false ]
            position: 'right', // y轴的位置。'left' or 'right'
            axisLine: {
              show: false // y轴线不显示
            },
            axisTick: {
              show: false, // y轴线刻度不显示
              lineStyle: {
                // 刻度线样式
                color: '#11356D'
              }
            },
            axisLabel: {
              show: false // 刻度标签不显示
            },
            data: myData // Y轴(这里是类目轴)的类目数据
          },
          {
            gridIndex: 1, // 中间区域
            type: 'category',
            boundaryGap: true,
            inverse: true,
            position: 'left', // y轴的位置。'left' or 'right'
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: true, // 显示中间部分的Y轴刻度标签(中间的文字)
              textStyle: {
                // 标签样式
                color: '#cccccc',
                fontSize: 12
              }
            },
            data: myData
          },
          {
            // 右侧区域
            gridIndex: 2,
            type: 'category',
            boundaryGap: true,
            inverse: true,
            position: 'left',
            axisLine: {
              show: false
            },
            axisTick: {
              show: false,
              lineStyle: {
                // 刻度线样式
                color: '#153D7D'
              }
            },
            axisLabel: {
              show: false
            },
            data: myData
          }
        ],
        series: [
          {
            name: '待办', // 系列名称
            type: 'bar',
            // barGap: 5, // 柱间距离
            barWidth: 15, // 柱子宽度
            xAxisIndex: 0, // 对应在X轴的grid索引
            yAxisIndex: 0, // 对应在Y轴的grid索引
            stack: '1', // 相同就是堆叠
            // barGap:'-100%', //重叠
            label: {
              show: true,
              position: 'top',
              color: '#60acfc',
              fontSize: 10
            },
            itemStyle: {
              // 柱条样式。
              color: '#60acfc'
              // borderWidth:1,
              // borderColor:'transparent'
            },
            emphasis: {
              // 鼠标指向高亮
              show: true,
              label: {
                color: '#60acfc96' // 高亮状态下柱条颜色
              },
              itemStyle: {
                color: '#60acfc96' // 高亮状态下柱条颜色
              }
            },
            data: offLine[0] // 系列中的数据内容数组
          },
          {
            name: '已办', // 系列名称
            type: 'bar',
            barWidth: 15, // 柱子宽度
            xAxisIndex: 0, // 对应在X轴的grid索引
            yAxisIndex: 0, // 对应在Y轴的grid索引
            stack: '1', // 相同就是堆叠
            label: {
              show: true,
              position: 'top',
              color: '#5bc49f',
              fontSize: 10
            },
            itemStyle: {
              // 柱条样式。
              color: '#5bc49f'
              // borderWidth:1,
              // borderColor:'transparent'
            },
            emphasis: {
              // 高亮
              show: true,
              label: {
                color: '#5bc49f96' // 高亮状态下柱条颜色
              },
              itemStyle: {
                color: '#5bc49f96' // 高亮状态下柱条颜色
              }
            },
            data: offLine[1] // 系列中的数据内容数组
          },
          {
            name: '超期', // 系列名称
            type: 'bar',
            barWidth: 15, // 柱子宽度
            xAxisIndex: 0, // 对应在X轴的grid索引
            yAxisIndex: 0, // 对应在Y轴的grid索引
            stack: '1', // 相同就是堆叠
            label: {
              show: true,
              position: 'top',
              color: '#feb64d',
              fontSize: 10
            },
            itemStyle: {
              // 柱条样式。
              color: '#feb64d'
              // borderWidth:1,
              // borderColor:'transparent'
            },
            emphasis: {
              // 高亮
              show: true,
              label: {
                color: '#feb64d96' // 高亮状态下柱条颜色
              },
              itemStyle: {
                color: '#feb64d96' // 高亮状态下柱条颜色
              }
            },
            data: offLine[2] // 系列中的数据内容数组
          },
          {
            name: '退回', // 系列名称
            type: 'bar',
            barWidth: 15, // 柱子宽度
            xAxisIndex: 0, // 对应在X轴的grid索引
            yAxisIndex: 0, // 对应在Y轴的grid索引
            stack: '1', // 相同就是堆叠
            label: {
              show: true,
              position: 'top',
              color: '#ff7b7b',
              fontSize: 10
            },
            itemStyle: {
              // 柱条样式。
              color: '#ff7b7b'
              // borderWidth:1,
              // borderColor:'transparent'
            },
            emphasis: {
              // 高亮
              show: true,
              label: {
                color: '#ff7b7b96' // 高亮状态下柱条颜色
              },
              itemStyle: {
                color: '#ff7b7b96' // 高亮状态下柱条颜色
              }
            },
            data: offLine[3] // 系列中的数据内容数组
          },
          // 即办件背景
          {
            name: '即办件', // 系列名称
            type: 'bar',
            // barGap: 5, // 柱间距离
            barWidth: 21, // 柱子宽度
            xAxisIndex: 0, // 对应在X轴的grid索引
            yAxisIndex: 0, // 对应在Y轴的grid索引
            // stack: '1', // 相同就是堆叠
            barGap: '-120%', // 重叠
            itemStyle: {
              // 柱条样式。
              // color: '#DC3239',
              color: 'transparent',
              borderWidth: 1,
              // borderColor: '#DC3239',
              shadowColor: '#DC3239',
              shadowBlur: 20
            },
            emphasis: {
              scale: false
            },
            data: offLineSum // 系列中的数据内容数组
          },
          {
            name: '待办', // 系列名称
            type: 'bar',
            barWidth: 15, // 柱子宽度
            xAxisIndex: 2, // 对应在X轴的grid索引
            yAxisIndex: 2, // 对应在Y轴的grid索引
            stack: '2', // 相同就是堆叠
            label: {
              show: true,
              position: 'top',
              color: '#60acfc',
              fontSize: 10
            },
            itemStyle: {
              // 柱条样式。
              color: '#60acfc'
              // borderWidth:1,
              // borderColor:'transparent'
            },
            emphasis: {
              // 鼠标指向高亮
              show: true,
              label: {
                color: '#60acfc96' // 高亮状态下柱条颜色
              },
              itemStyle: {
                color: '#60acfc96' // 高亮状态下柱条颜色
              }
            },
            data: onLine[0] // 系列中的数据内容数组
          },
          {
            name: '已办', // 系列名称
            type: 'bar',
            barWidth: 15, // 柱子宽度
            xAxisIndex: 2, // 对应在X轴的grid索引
            yAxisIndex: 2, // 对应在Y轴的grid索引
            stack: '2', // 相同就是堆叠
            label: {
              show: true,
              position: 'top',
              color: '#5bc49f',
              fontSize: 10
            },
            itemStyle: {
              // 柱条样式。
              color: '#5bc49f'
              // borderWidth:1,
              // borderColor:'transparent'
            },
            emphasis: {
              // 高亮
              show: true,
              label: {
                color: '#5bc49f96' // 高亮状态下柱条颜色
              },
              itemStyle: {
                color: '#5bc49f96' // 高亮状态下柱条颜色
              }
            },
            data: onLine[1] // 系列中的数据内容数组
          },
          {
            name: '超期', // 系列名称
            type: 'bar',
            barWidth: 15, // 柱子宽度
            xAxisIndex: 2, // 对应在X轴的grid索引
            yAxisIndex: 2, // 对应在Y轴的grid索引
            stack: '2', // 相同就是堆叠
            label: {
              show: true,
              position: 'top',
              color: '#feb64d',
              fontSize: 10
            },
            itemStyle: {
              // 柱条样式。
              color: '#feb64d'
              // borderWidth:1,
              // borderColor:'transparent'
            },
            emphasis: {
              // 高亮
              show: true,
              label: {
                color: '#feb64d96' // 高亮状态下柱条颜色
              },
              itemStyle: {
                color: '#feb64d96' // 高亮状态下柱条颜色
              }
            },
            data: onLine[2] // 系列中的数据内容数组
          },
          {
            name: '退回', // 系列名称
            type: 'bar',
            barWidth: 15, // 柱子宽度
            xAxisIndex: 2, // 对应在X轴的grid索引
            yAxisIndex: 2, // 对应在Y轴的grid索引
            stack: '2', // 相同就是堆叠
            label: {
              show: true,
              position: 'top',
              color: '#ff7b7b',
              fontSize: 10
            },
            itemStyle: {
              // 柱条样式。
              color: '#ff7b7b'
              // borderWidth:1,
              // borderColor:'transparent'
            },
            emphasis: {
              // 高亮
              show: true,
              label: {
                color: '#ff7b7b96' // 高亮状态下柱条颜色
              },
              itemStyle: {
                color: '#ff7b7b96' // 高亮状态下柱条颜色
              }
            },
            data: onLine[3] // 系列中的数据内容数组
          },
          // 承诺件背景
          {
            name: '承诺件', // 系列名称
            type: 'bar',
            // barGap: 5, // 柱间距离
            barWidth: 21, // 柱子宽度
            xAxisIndex: 2, // 对应在X轴的grid索引
            yAxisIndex: 2, // 对应在Y轴的grid索引
            // stack: '2', // 相同就是堆叠
            barGap: '-120%', // 重叠
            itemStyle: {
              // 柱条样式。
              // color: '#2087FE',
              color: 'transparent',
              borderWidth: 1,
              // borderColor: '#2087FE'
            },
            data: onLineSum // 系列中的数据内容数组
          }
        ]
      }
    }
  }
}
