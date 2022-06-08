# WorkflowConfig

## uac
在安装过程中是否需要 [UAC](https://zh.wikipedia.org/wiki/%E4%BD%BF%E7%94%A8%E8%80%85%E5%B8%B3%E6%88%B6%E6%8E%A7%E5%88%B6) 权限。
- **类型：** `bool`
- **细节**

    通常仅当安装方式为全局安装器安装时需要使能此项。
- **示例**
    ```toml
    uac = false
    ```

## check_version
使用此工作流安装后的主程序位置，用于帮助 nep 判断当前已安装程序的版本号。
- **类型：** `String`
- **细节**

    <!-- TODO:增加环境变量章节 -->
    对于使用安装器安装的软件，提供以[环境变量](nep_env.md)开头的绝对路径；
    
    对于使用便携安装的软件，提供相对于 `PackageName` 的相对路径。

    nep 默认读取该文件的文件版本作为当前版本号。

    :::tip
    根据[规范](/misc/norm#统一使用正斜杠（-）)，统一使用正斜杠 `/` 分割路径。
    :::
- **示例**
    ```toml
    check_version = "${APP_DATA}/Local/Programs/Microsoft VS Code/Code.exe"
    ```