# 登陆npm

npm logo

# 更新版本

npm version <update_type>

* npm version major   2.0.0

* npm version minor   1.1.0

* npm version patch   1.0.1

* npm version premajor   1.0.0-0

* major：主版本号（大版本）
* minor：次版本号（小更新）
* patch：补丁号（补丁）
* premajor：预备主版本
* preminor: 预备次版本
* prepatch：预备补丁版本
* prerelease：预发布版本

# 发布更新

npm publish

# 查看本地版本

npm version

# 查看远程版本

npm view <name> versions

# 撤销

由于撤销发布会让把要撤销的包作为依赖的包不能正常工作，所以npm官方对包的撤销是有限制的：

1. 不允许撤销发布已经超过24小时的包（unpublish is only allowed with versions published in the last 24 hours）
2. 如果在24小时内确实要撤销，需要加--force参数
3. 即使撤销了发布的包，再次发布的时候也不能与之前被撤销的包的名称/版本其中之一相同，因为这两者构成的唯一性已经被占用，官方并没有随着撤销而删除

# 推荐替代

npm deprecate