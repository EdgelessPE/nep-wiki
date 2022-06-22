# Plot

规定[用户自留文件夹](/misc/plot.md)的内容。

- **参数**

  - `fileList :Array<{name :String,description :String}>`：自留文件夹中有效的文件/文件夹的文件名、描述。

- **示例**

    ```toml
    [polt]
    fileList = [
        {
            name = "frpc.ini",
            description = "frp客户端配置文件"
        }
    ]
    ```

  <!-- TODO:如果必须则应当提供缺省时的文件 -->
