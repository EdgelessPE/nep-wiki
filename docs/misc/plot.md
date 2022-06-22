# 用户自留文件夹
为了方便用户自行补充一些自定义文件（配置文件等），我们会规定U盘中的某个目录为资源的用户自留文件夹，你可以通过指定 [`polt`](api.md#用户自留文件夹相关) 表要求用户在此文件夹中放置一些资源需要使用的自定义文件，然后通过 [`${UserPolt}`](api.md#userpolt) 获取此文件夹的位置。


以 [frp-client](https://github.com/fatedier/frp) 资源包为例，假设我们需要用户提供 `frpc.ini` 配置文件，则这样配置 `polt` 表：
```toml
[polt]
fileList = [
  {
    name = "frpc.ini",
    description = "frp客户端配置文件"
  }
]
```
然后在配置工作流中复制此文件到实际的工作目录：
```toml
  [setup_flow.copy_config]
  name = "Copy config"
  type = "File"

  operation = "Copy"
  source = "${UserPolt}/frpc.ini"
  target = "./frpc-client/frpc.ini"
```