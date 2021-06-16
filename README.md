# 支付中台前端代码规范
## 依赖库
+ Eslint 
+ Prittier 
+ Typescript  

## 安装   

+ `npm i eslint-config-prittier-ts --dev` or 
+ `yarn add eslint-config-prittier-ts -D`  

> 使用 yarn 如果出现错误的话 需要补充安装 `yarn add eslint-plugin-prettier@latest -D` 

## 配置
+ 在 `.eslintrc.js` 中加入 :  
```javascript 
module.exports = {
  "extends": ["eslint-config-prittier-ts"]
}
```