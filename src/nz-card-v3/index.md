> 由于组件名可能跟 2.x 会有所冲突，因此会有 `v3` 字样。

## API

### `nz-card`

| Name    | Type           | Default  | Summary |
| ------- | ------------- | ----- | ----- |
| nzBordered | `Boolean` | `true` | 是否有边框 |
| [过期] nzNoHovering | `boolean` | `false` | 取消鼠标移过浮起，已过期请使用 `nzHoverable` |
| nzHoverable | `Boolean` | - | 鼠标移过浮起 |
| nzLoading | `boolean` |  | 是否显示加载状态 |
| nzType | `inner` |  | 卡片类型，可设置为 `inner` 或 不设置 |
| nzTitle | `string, TemplateRef<any>` |  | 卡片标题 |
| #extra | `TemplateRef<any>` |  | 卡片右上角的操作区域 |
| #cover | `TemplateRef<any>` |  | 卡片封面区域 |
| #body | `TemplateRef<any>` |  | 内容区域，默认情况下也可以无须指定，因为 `<ng-content>` 内容都被认为是内容区域 |
| nzTabChange | `EventEmitter` |  | 点击选项卡事件回调，当内容包括 `nz-card-tab` 组件时有效 |

### `nz-card-action`

操作区域组件，放置在内容区域中，使用方式见示例。

### `nz-card-v3-grid`

网格型内嵌卡片。

### `nz-card-tab`

卡片选项卡组件，放置在内容区域中，使用方式见示例。 其中 `<ng-content>` 为选项卡内容。

| Name    | Type           | Default  | Summary |
| ------- | ------------- | ----- | ----- |
| nzTabHeading | `string, TemplateRef<any>` |  | 选项卡标题 |

### `nz-card-meta`

| Name    | Type           | Default  | Summary |
| ------- | ------------- | ----- | ----- |
| nzAvatar | `string, TemplateRef<any>` |  | 头像/图标 |
| nzTitle | `string, TemplateRef<any>` |  | 标题内容 |
| nzDescription | `string, TemplateRef<any>` |  | 描述内容 |

## DEMO

```html
<nz-card-v3 [nzTitle]="'Card title'">
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
</nz-card-v3>
```