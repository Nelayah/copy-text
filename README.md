# Copy Text

在选择复制粘贴的内容后面添加自定义的信息

## 示例

![](https://ftp.bmp.ovh/imgs/2019/12/687eeb36bcab1490.gif)

## 安装

```bash
npm i copy-text-pjs --save-dev
```

## 使用

```typescript
import setCopyText from 'copy-text-pjs';

const copyRightText = `
<br />本文出自 A 网站，遵循版权协议，转载请附上原文出处链接及本声明
<br />原文链接：${location.href}
<br />Copyright © 2000 - ${new Date().getFullYear()} A, All right reserved. 粤 ICP 备 00000000
`;

setCopyText(copyRightText);
```