# Plot

规定用户自留文件夹的内容。

- **参数**

  - `fileList :Array<{name :String,description :String,required :bool}>`：自留文件夹中有效的文件/文件夹的文件名、描述、是否必须提供。

- **示例**

    ```toml
    [polt]
    fileList = [
        {
            name = "frpc.ini",
            description = "frp客户端配置文件",
            required = true
        }
    ]
    ```

  <!-- TODO:如果必须则应当提供缺省时的文件 -->
