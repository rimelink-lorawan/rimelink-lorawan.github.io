# 锐米（RimeLink）官网项目

## 项目信息
- **目录**: D:\github\gogs\rime\rimelink
- **框架**: Astro 5.5 + Tailwind CSS 3.4
- **类型**: 公司官网（单页 + 子页面）
- **启动**: `npm run dev`（端口 4321）
- **构建**: `npm run build` → `dist/`

## 公司信息
- 名称: 锐米 RimeLink
- 成立: 2014年7月
- 地点: 长沙市金星大道518号
- 电话: 0731-82236164
- 主营: LoRaWAN 物联网（模组/网关/云平台）

## 导航结构（5 个栏目）
1. 首页 (`/`) — Hero + Products 预览 + CloudPlatform + 案例预览 + About + Contact
2. 产品中心 (`/products/` + 8 篇产品详情) — Content Collection `products`
3. 应用案例 (`/cases/` + 8 篇案例详情) — Content Collection `cases`
4. 文档中心 (`/docs/` + 16 篇文档详情) — Content Collection `docs`（下载+开源合并，category 标记）
5. 关于我们 (`/#about`)

## Content Collections
- `products`: title, date, subtitle?, tag?, tags[]
- `docs`: title, date, category("download"|"open-source"), version?, fileSize?, platform?, repo?, license?, tags[]
- `cases`: title, date, client?, industry?, tags[]

## 页面数量
- 首页: 1
- 产品: 列表 1 + 详情 8 = 9
- 文档: 列表 1 + 详情 16 = 17
- 案例: 列表 1 + 详情 8 = 9
- **合计: 36 页**
