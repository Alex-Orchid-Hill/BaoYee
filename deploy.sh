#!/usr/bin/env sh
###
 # @Author: LiBaoDeng libdqd_happy2020@163.com
 # @Date: 2024-08-30 16:26:20
 # @LastEditors: LiBaoDeng libdqd_happy2020@163.com
 # @LastEditTime: 2024-08-30 16:39:14
 # @FilePath: \BaoYee\.vuepress\deploy.sh
 # @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
### 

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:Alex-Orchid-Hill/BaoYee.git master:gh-pages

cd -