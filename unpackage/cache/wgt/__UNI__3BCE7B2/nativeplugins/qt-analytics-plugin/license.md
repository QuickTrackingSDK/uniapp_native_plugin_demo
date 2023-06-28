本协议是QuickTracking与您之间达成的协议。请阅读条款内容。
<a name="C8AYL"></a>
## 概念解释
全域采集及增长分析 (Quick Tracking) 是阿里云推出的企业级流量统计分析产品，支持多端（APP、小程序、WEB）数据采集，提供通用的多维度用户行为分析模型。借助Quick Tracking，技术、产品、运营等同学可以快速按需提取和分析流量数据，衡量产品升级和运营活动效果。同时原始采集日志可以二次开发，可对接到数据加工平台、BI可视化平台和营销平台等，完成流量数据和业务数据的融合和利用。<br />QuickTracking SDK必须跟随QuickTrack产品一起使用。
<a name="Cxpmi"></a>
## 隐私条款
QuickTracking SDK通过采集唯一设备识别码（如IMEI/android ID/IDFA/OPENUDID/GUID、SIM卡 IMSI 信息）对用户进行唯一标识，以便进行诸如用户新增等数据统计。在特殊情况下（如用户使用平板设备或电视盒子时），无法通过唯一设备识别码标识设备，我们会将设备Mac地址作为用户的唯一标识，以便正常提供统计分析服务。

使用权限如下，SDK不会主动申请权限，当宿主有

| **权限** | **用途** |
| --- | --- |
| ACCESS\_NETWORK\_STATE | 检测联网方式，在网络异常状态下避免数据发送，节省流量和电量。 |
| ACCESS\_WIFI\_STATE | 获取WIFI mac地址，在平板设备或电视盒子上，无法通过IMEI标识设备，我们会将WIFI mac地址作为用户的唯一标识，以便正常提供统计分析服务。 |
| INTERNET | 允许应用程序联网和发送统计数据的权限，以便提供统计分析服务。 |

<a name="HqONw"></a>
## 使用授权
<a name="XBwDh"></a>
### 私部署环境
如果您是私部署环境，使用QuickTracking的SDK采集数据都发往了您的环境，所以您在隐私协议中无需透出QuickTracking，但要透出您采集的信息和用途如下：

**收集个人信息类型：**设备信息（IMEI/MAC/Android ID/IDFA/OpenUDID/GUID/SIM卡IMSI）<br />**收集目的：**通过在各个功能的埋点收集用户使用数据，后台对数据进行运营分析（各个功能的打开率、访问人数、访问时长等分析）<br />**涉及权限：**

| **权限** | **用途** |
| --- | --- |
| ACCESS\_NETWORK\_STATE | 检测联网方式，在网络异常状态下避免数据发送，节省流量和电量。 |
| ACCESS\_WIFI\_STATE | 获取WIFI mac地址，在平板设备或电视盒子上，无法通过IMEI标识设备，我们会将WIFI mac地址作为用户的唯一标识，以便正常提供统计分析服务。 |
| INTERNET | 允许应用程序联网和发送统计数据的权限，以便提供统计分析服务。 |

<a name="CCV02"></a>
### SaaS环境
如果您是SaaS环境，使用QuickTracking的SDK采集，需要在您的个人隐私协议中透出：

Quick Tracking 全域采集与增长分析<br />**收集个人信息类型：**设备信息（IMEI/MAC/Android ID/IDFA/OpenUDID/GUID/SIM卡IMSI）<br />**收集目的：**通过在各个功能的埋点收集用户使用数据，后台对数据进行运营分析（各个功能的打开率、访问人数、访问时长等分析）<br />**涉及权限：**

| **权限** | **用途** |
| --- | --- |
| ACCESS\_NETWORK\_STATE | 检测联网方式，在网络异常状态下避免数据发送，节省流量和电量。 |
| ACCESS\_WIFI\_STATE | 获取WIFI mac地址，在平板设备或电视盒子上，无法通过IMEI标识设备，我们会将WIFI mac地址作为用户的唯一标识，以便正常提供统计分析服务。 |
| INTERNET | 允许应用程序联网和发送统计数据的权限，以便提供统计分析服务。 |

**官网链接：**[https://help.aliyun.com/product/194063.html](https://help.aliyun.com/product/194063.html)
<a name="wSUpY"></a>
## 协议修订
根据发展，QuickTracking可能会对本协议进行修改。修改时，QuickTracking会在产品或者网页中显著的位置发布相关信息以便及时通知到用户。如果您选择继续使用我们的服务，即表示您同意接受这些修改。
