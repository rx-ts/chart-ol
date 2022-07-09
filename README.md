# chart online

服务器端生成 SVG 图片，可以嵌入到任何地方。

![](https://chart-ol.vercel.app?option={"xAxis":{"type":"category","data":["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},"yAxis":{"type":"value"},"series":[{"data":[150,230,224,218,135,147,260],"type":"line"}]})

Usage:

```
https://chart-ol.vercel.app?w=[width]&h=[height]&option=[json]
```

- `w`: 宽。默认 `500`。
- `h`: 高。默认 `300`。
- `option`: echarts 配置项，<https://echarts.apache.org/zh/option.html>。

## Examples:

### 折线图

echarts 配置：

```ts
option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line',
    },
  ],
}
```

将图表嵌入到 Markdown:

```
![](https://chart-ol.vercel.app?option={"xAxis":{"type":"category","data":["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},"yAxis":{"type":"value"},"series":[{"data":[150,230,224,218,135,147,260],"type":"line"}]})
```

效果:

![](https://chart-ol.vercel.app?option={"xAxis":{"type":"category","data":["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},"yAxis":{"type":"value"},"series":[{"data":[150,230,224,218,135,147,260],"type":"line"}]})

### 雷达图

```
https://chart-ol.vercel.app?option={"radar":{"indicator":[{"name":"Sales","max":6500},{"name":"Administration","max":16000},{"name":"Information","max":30000},{"name":"Customer","max":38000},{"name":"Development","max":52000},{"name":"Marketing","max":25000}]},"series":[{"name":"Budget","type":"radar","data":[{"value":[4200,3000,20000,35000,50000,18000],"name":"Allocated"},{"value":[5000,14000,28000,26000,42000,21000],"name":"Actual"}]}]}
```

![](https://chart-ol.vercel.app?option={"radar":{"indicator":[{"name":"Sales","max":6500},{"name":"Administration","max":16000},{"name":"Information","max":30000},{"name":"Customer","max":38000},{"name":"Development","max":52000},{"name":"Marketing","max":25000}]},"series":[{"name":"Budget","type":"radar","data":[{"value":[4200,3000,20000,35000,50000,18000],"name":"Allocated"},{"value":[5000,14000,28000,26000,42000,21000],"name":"Actual"}]}]})

## Sponsors

| 1stG                                                                                                                               | RxTS                                                                                                                               | UnTS                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| [![1stG Open Collective backers and sponsors](https://opencollective.com/1stG/organizations.svg)](https://opencollective.com/1stG) | [![RxTS Open Collective backers and sponsors](https://opencollective.com/rxts/organizations.svg)](https://opencollective.com/rxts) | [![UnTS Open Collective backers and sponsors](https://opencollective.com/unts/organizations.svg)](https://opencollective.com/unts) |

## Backers

| 1stG                                                                                                                             | RxTS                                                                                                                             | UnTS                                                                                                                             |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| [![1stG Open Collective backers and sponsors](https://opencollective.com/1stG/individuals.svg)](https://opencollective.com/1stG) | [![RxTS Open Collective backers and sponsors](https://opencollective.com/rxts/individuals.svg)](https://opencollective.com/rxts) | [![UnTS Open Collective backers and sponsors](https://opencollective.com/unts/individuals.svg)](https://opencollective.com/unts) |

## License

[MIT][] © [JounQin][]@[1stG.me][]

[1stg.me]: https://www.1stg.me
[jounqin]: https://github.com/JounQin
[mit]: http://opensource.org/licenses/MIT
